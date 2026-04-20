# MCP Server

An Streamable HTTP [MCP](https://modelcontextprotocol.io/) server that exposes the component library's showcase data — docs, components, and API definitions — to AI agents like Claude Code.

## Hosted Server

A public instance of Streamable HTTP MCP server is available at:

```
https://varmory-dec8b20a1b83.herokuapp.com/mcp
```

Transport: Streamable HTTP.

```bash
claude mcp add --transport http varmory https://varmory-dec8b20a1b83.herokuapp.com/mcp
```

Once added, you can simply ask Claude to build any web app using varmory, e.g. "Build me a to-do app using Varmory". Claude will discover available components, docs, and API definitions through the MCP server automatically.

To launch MCP server of your own set of components/DOC files, set up the MCP server ( or use the one defined in `mcp/server.js` that hosts both MCP and Component Showcase app ).

## Quick Start

```bash
npm install varmory @modelcontextprotocol/sdk zod
```

```js
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import attachShowcase from 'varmory/mcp';

const server = new McpServer({ name: 'my-server', version: '1.0.0' });

attachShowcase(server, {
    rootDir: './node_modules/varmory',
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

This creates an MCP server with all showcase resources and tools from the library, connected over stdio.

## Dependencies

The MCP server is a self-contained subpackage in `mcp/` with its own dependencies (`@modelcontextprotocol/sdk`, `zod`). These are **not** dependencies of the main library.

## `attachShowcase(server, options?)`

The core export. Takes an MCP server instance, attaches resources and tools, and returns it. This lets you embed the showcase into your own MCP server.

```js
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import attachShowcase from 'varmory/mcp';

const server = new McpServer({ name: 'my-server', version: '1.0.0' });
// rootDir must be provided — otherwise no filesystem scanning happens.
attachShowcase(server, { rootDir: './node_modules/varmory' });
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `rootDir` | `string` | — | Absolute path to a library root with the expected layout (see below). When omitted, **no filesystem scanning happens** — only `files` are loaded. |
| `files` | `string[]` | `[]` | Extra file paths on top of whatever `rootDir` produced. Classified by extension. |
| `quasar` | `boolean` | `true` | When `false`, Quasar's component JSONs and its mixin/`extends` resolver data are **not** auto-loaded from `node_modules`. Definitions you pass via `files` still pass through the normalizer, they just won't have access to Quasar's shared `extends` / mixin pool. |
| `maxDepth` | `number` | `5` | How deep the recursive search for `categories/` and `definitions/` folders goes under `rootDir`. Depth 0 is `rootDir` itself. |

Files from `files` are merged **after** `rootDir` scanning, so `files` overrides same-named docs/definitions.

### Filesystem layout expected at `rootDir`

```
<rootDir>/
    README.md
    docs/*.md
    **/categories/<NN Name>/*.vue        (any folder named `categories` under
                                          rootDir, recursive — `node_modules`,
                                          `.git`, `dist`, `build` are skipped)
    **/definitions/<Vendor>/*.json       (any folder named `definitions`)
    node_modules/quasar/src/…            (optional; picked up when `quasar` is
                                          not false)
```

Category folders may carry a numeric prefix like `04 Buttons` — the prefix is stripped for display, so the category becomes `Buttons`. You can keep categories/definitions wherever fits your project layout — the scanner just looks for folders literally named `categories` or `definitions`.

### File classification

Every file (from `rootDir` scan and from `files`) is routed by extension:

- `.vue` — parsed as a showcase component. Grouped into categories by parent folder name (numeric prefix stripped).
- `.md` — loaded as a doc page. Filename without extension becomes the page name (`README.md` → `README`).
- `.json` — loaded as an API definition keyed by filename.

### API definition normalization

Every loaded `.json` definition is piped through `normalizeQuasarApi`, which:

- resolves `"extends": "<name>"` entries against Quasar's `api.extends.json` (the shared pool of `color`, `dark`, `dense`, …)
- merges props/slots/events/methods contributed by `mixins` listed on the component (composables like `use-size`, `use-form`, or component-local ones like `components/btn/use-btn`)
- tags inherited entries with `_mixin: <short-name>` so `get_api` output can show `_[inherited: use-btn]_`
- sorts entries: **required → own → inherited**

Hand-written JSONs without `mixins`/`extends` short-circuit and pass through untouched.

### Examples

```js
// No auto-discovery — only the listed files
attachShowcase(server, {
    files: [
        'src/showcase/categories/04 Buttons/Btn.vue',
        'docs/USAGE.md',
        'definitions/QBtn.json',
    ],
});

// Full library scan (rootDir + Quasar src by default)
attachShowcase(server, { rootDir: '/path/to/varmory' });

// Library scan without Quasar auto-loading
attachShowcase(server, { rootDir: '/path/to/lib', quasar: false });

// Root scan + extra files merged on top
attachShowcase(server, {
    rootDir: '/path/to/lib',
    files: ['extra/MyWidget.vue', 'extra/GUIDE.md'],
});
```

## Resources

| URI | Description |
|-----|-------------|
| `showcase://docs` | Lists all available doc page names |
| `showcase://docs/{name}` | Returns the markdown content of a doc page |
| `showcase://components` | Lists all categories and their components |
| `showcase://definitions` | Lists all available API definition names |

## Tools

| Tool | Parameters | Description |
|------|-----------|-------------|
| `search_components` | `query: string` | Fuzzy search across component names and labels |
| `search_docs` | `query: string` | Search documentation pages by name or content |
| `get_component` | `name: string` | Returns a component's template code, category, and import info |
| `get_api` | `name: string` | Returns a component's full API: props (with `default`/`values`/required flag/inherited tag), slots (with scope props), events (with payload params), and methods (with params + returns). |
| `get_doc` | `name: string` | Returns the full markdown content of a doc page |

All tools are annotated as read-only, non-destructive, and idempotent.


## Testing with MCP Inspector

Use the official [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) to browse and test the server:

```bash
npx @modelcontextprotocol/inspector
```

Then in the browser at `http://localhost:6274`:

1. Set **Transport Type** to "Streamable HTTP"
2. Enter the server URL (e.g. `http://localhost:3000/mcp` or the hosted URL above)
3. Set **Connection Type** to "Proxy"
4. Click **Connect**

The Inspector provides panels to browse resources, call tools, and inspect raw JSON-RPC messages.
