function resolveEntry(name, def, base) {
    if (!def || typeof def !== 'object') return def;
    if (!def.extends) return def;
    const source = base?.[def.extends] || base?.[name];
    if (!source) {
        const { extends: _e, ...rest } = def;
        return rest;
    }
    const { extends: _e, ...overrides } = def;
    return { ...source, ...overrides };
}

function mergeSection(target, source, base, mixinName) {
    if (!source) return target;
    const out = { ...target };
    for (const [name, def] of Object.entries(source)) {
        const resolved = resolveEntry(name, def, base);
        if (mixinName) {
            // Mixin pass: this is the source-of-truth for the prop. Replace + tag.
            out[name] = { ...resolved, _mixin: mixinName };
        } else if (out[name]) {
            // Own-prop overlay on top of an existing (mixin) entry: keep mixin's
            // desc/type/default, override only what's explicitly set. Preserves _mixin.
            out[name] = { ...out[name], ...resolved };
        } else {
            out[name] = resolved;
        }
    }
    return out;
}

function shortMixinName(ref) {
    const last = ref.split('/').pop() || ref;
    return last.replace(/^private\./, '');
}

function hasRawMarkers(raw) {
    if (!raw || typeof raw !== 'object') return false;
    if (Array.isArray(raw.mixins) && raw.mixins.length > 0) return true;
    for (const section of ['props', 'slots', 'events', 'methods']) {
        const bag = raw[section];
        if (!bag) continue;
        for (const def of Object.values(bag)) {
            if (def && typeof def === 'object' && def.extends) return true;
        }
    }
    return false;
}

export default function normalizeQuasarApi(raw, { apiExtends = {}, mixinLookup = {} } = {}) {
    if (!hasRawMarkers(raw)) return raw;

    const extProps = apiExtends?.props || {};
    const extSlots = apiExtends?.slots || {};
    const extEvents = apiExtends?.events || {};
    const extMethods = apiExtends?.methods || {};

    let props = {};
    let slots = {};
    let events = {};
    let methods = {};

    if (Array.isArray(raw.mixins)) {
        for (const ref of raw.mixins) {
            const mixin = mixinLookup[ref];
            if (!mixin) continue;
            const mixinName = shortMixinName(ref);
            props = mergeSection(props, mixin.props, extProps, mixinName);
            slots = mergeSection(slots, mixin.slots, extSlots, mixinName);
            events = mergeSection(events, mixin.events, extEvents, mixinName);
            methods = mergeSection(methods, mixin.methods, extMethods, mixinName);
        }
    }

    props = mergeSection(props, raw.props, extProps);
    slots = mergeSection(slots, raw.slots, extSlots);
    events = mergeSection(events, raw.events, extEvents);
    methods = mergeSection(methods, raw.methods, extMethods);

    // Resolve `extends` inside nested scope/params objects (slots, events, methods).
    // The base is `extProps` since these inner entries have prop-shaped definitions.
    // IMPORTANT: clone the entry before assigning a new scope/params, otherwise we
    // mutate the original raw JSON (which may be made reactive by Vue when stored
    // in data()), feeding reactive updates back into our own dependency chain.
    slots = remapNestedExtends(slots, 'scope', extProps);
    events = remapNestedExtends(events, 'params', extProps);
    methods = remapNestedExtends(methods, 'params', extProps);

    // Order: required first, then component's own entries, then inherited (mixin) ones.
    props = sortByOrigin(props);
    slots = sortByOrigin(slots);
    events = sortByOrigin(events);
    methods = sortByOrigin(methods);

    const { mixins: _m, ...rest } = raw;
    return { ...rest, props, slots, events, methods };
}

function remapNestedExtends(bag, nestedKey, base) {
    const out = {};
    for (const [name, entry] of Object.entries(bag)) {
        if (entry && typeof entry === 'object' && entry[nestedKey]) {
            out[name] = { ...entry, [nestedKey]: mergeSection({}, entry[nestedKey], base) };
        } else {
            out[name] = entry;
        }
    }
    return out;
}

function sortByOrigin(bag) {
    const rank = (def) => (def?.required ? 0 : (def?._mixin ? 2 : 1));
    const entries = Object.entries(bag);
    // Stable sort (ES2019+) preserves original order within same rank.
    entries.sort((a, b) => rank(a[1]) - rank(b[1]));
    return Object.fromEntries(entries);
}
