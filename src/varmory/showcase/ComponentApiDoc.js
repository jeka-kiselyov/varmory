import { computed } from 'vue';
import ApiDocSection from './components/ApiDocSection.vue';

export default {
    components: { ApiDocSection },

    provide() {
        return {
            __apiDoc: computed(() => ({
                loading: this.apiLoading,
                error: this.apiError,
                apiData: this.apiData,
                groups: this.apiGroups,
                docsUrl: this.apiDocsUrl,
                propsList: this.apiPropsList,
                slotsList: this.apiSlotsList,
                eventsList: this.apiEventsList,
                importName: this.apiImportName,
                importFrom: this.apiImportFrom,
            })),
        };
    },

    data() {
        return {
            apiUrl: this.$options.apiUrl || null,
            apiJson: this.$options.apiJson || null,
            apiFetchedData: null,
            apiLoading: false,
            apiError: null,
            apiImportName: null,
            apiImportFrom: null,
        };
    },

    computed: {
        apiData() {
            return this.apiJson || this.apiFetchedData;
        },
        // Normalize to array of { name, data } groups
        apiGroups() {
            const raw = this.apiData;
            if (!raw) return [];
            if (Array.isArray(raw)) {
                return raw.map(entry => ({
                    name: entry.name || null,
                    data: entry.json || entry,
                }));
            }
            return [{ name: null, data: raw }];
        },
        apiTagName() {
            // From array entries: first group with a name (e.g. "QCard")
            for (const g of this.apiGroups) {
                if (g.name) return g.name;
            }
            // From single definition: derive from docsUrl (e.g. /circular-progress → QCircularProgress)
            if (this.apiDocsUrl) {
                const last = this.apiDocsUrl.split('/').pop() || '';
                return 'Q' + last.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
            }
            return null;
        },
        apiDocsUrl() {
            for (const g of this.apiGroups) {
                const url = g.data?.meta?.docsUrl;
                if (url) return url;
            }
            return null;
        },
        apiPropsList() {
            return this.apiGroups.flatMap(g => {
                const props = g.data?.props;
                if (!props) return [];
                return Object.entries(props).map(([name, def]) => ({
                    name,
                    group: g.name,
                    typeLabel: Array.isArray(def.type) ? def.type.join(' | ') : (def.type || '—'),
                    desc: def.desc || '',
                    default: def.default,
                }));
            });
        },
        apiSlotsList() {
            return this.apiGroups.flatMap(g => {
                const slots = g.data?.slots;
                if (!slots) return [];
                return Object.entries(slots).map(([name, def]) => ({
                    name,
                    group: g.name,
                    desc: def.desc || '',
                }));
            });
        },
        apiEventsList() {
            return this.apiGroups.flatMap(g => {
                const events = g.data?.events;
                if (!events) return [];
                return Object.entries(events).map(([name, def]) => ({
                    name,
                    group: g.name,
                    desc: def.desc || '',
                }));
            });
        },
    },

    watch: {
        apiUrl: {
            immediate: true,
            handler(val) {
                if (val) this.apiFetch(val);
            },
        },
    },

    methods: {
        async apiFetch(url) {
            this.apiLoading = true;
            this.apiError = null;
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                this.apiFetchedData = await res.json();
            } catch (e) {
                this.apiError = `Failed to load API: ${e.message}`;
            } finally {
                this.apiLoading = false;
            }
        },
    },
};
