# MCP Server

An Streamable HTTP [MCP](https://modelcontextprotocol.io/) server that exposes the component library's showcase data — docs, components, and API definitions — to AI agents like Claude Code.

## Hosted Server

A public instance of Streamable HTTP MCP server is available at:

```
https://varmory-dec8b20a1b83.herokuapp.com/mcp
```

Transport: Streamable HTTP.

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
import attachShowcase from './mcp/showcaseMcp.js';

const server = new McpServer({ name: 'my-server', version: '1.0.0' });
attachShowcase(server);
```

### Options

| Option | Type | Description |
|--------|------|-------------|
| `rootDir` | `string` | Absolute path to the library root. Defaults to one level up from the mcp/ directory. |
| `files` | `string[]` | Explicit list of file paths. Files are auto-classified by extension (see below). |

When both `rootDir` and `files` are provided, the file list is merged on top of the auto-discovered content.

When only `files` is provided, no auto-discovery happens — only the listed files are loaded.

### File classification

Files passed via the `files` option are classified by extension:

- `.vue` — parsed as showcase components. Grouped into categories by parent folder name (numeric prefixes stripped, e.g. `04 Buttons/Btn.vue` → category "Buttons").
- `.md` — loaded as doc pages. The filename without extension becomes the page name (`README.md` → `README`).
- `.json` — loaded as API definitions in Quasar docs format.

### Examples

```js
// Auto-discover everything from default location
attachShowcase(server);

// Point to a specific root
attachShowcase(server, { rootDir: '/path/to/varmory' });

// Explicit files only
attachShowcase(server, {
    files: [
        'src/showcase/categories/04 Buttons/Btn.vue',
        'docs/THEMING.md',
        'definitions/QBtn.json',
    ],
});

// Auto-discover + extra files merged on top
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
| `get_api` | `name: string` | Returns a component's API definition (props, slots, events) |
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
