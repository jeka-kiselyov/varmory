import path from 'path';
import { fileURLToPath } from 'url';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
// import cors from '@fastify/cors';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import attachShowcase, { loadAll } from './showcaseMcp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const PORT = process.env.PORT || 3000;

// Load docs + components once at startup for the /docs and /components routes
const { docs, categories } = loadAll({ rootDir: ROOT_DIR });

const app = Fastify({ logger: true });

// app.register(cors, { origin: true });

// Serve the built SPA from ../demo
app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'demo'),
    wildcard: false,
});

// /llms.txt — README for AI agents
app.get('/llms.txt', async (request, reply) => {
    reply.type('text/plain').send(docs['README'] || '');
});

// /robots.txt
app.get('/robots.txt', async (request, reply) => {
    reply.type('text/plain').send(
        'User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nSitemap: https://varmory-dec8b20a1b83.herokuapp.com/sitemap.xml\nLLMs: https://varmory-dec8b20a1b83.herokuapp.com/llms.txt\nMCP: https://varmory-dec8b20a1b83.herokuapp.com/mcp\n'
    );
});

// /docs/:name — serve markdown doc content as plain text for agents fetching by URL
// Case-insensitive: /docs/usage → USAGE, /docs/MCP → MCP
app.get('/docs/:name', async (request, reply) => {
    const name = request.params.name;
    const key = Object.keys(docs).find(k => k.toLowerCase() === name.toLowerCase());
    if (!key) {
        reply.code(404).type('text/plain').send(`Doc "${name}" not found. Available: ${Object.keys(docs).join(', ')}`);
        return;
    }
    reply.type('text/markdown').send(docs[key]);
});

// /components — list all categories and component names as plain text
app.get('/components', async (request, reply) => {
    const lines = [];
    for (const [cat, items] of Object.entries(categories)) {
        lines.push(`## ${cat}`);
        for (const item of items) {
            const imp = Array.isArray(item.importName) ? item.importName.join(', ') : (item.importName || item.name);
            lines.push(`- ${item.label || item.name} (${imp})`);
        }
    }
    reply.type('text/plain').send(lines.join('\n'));
});

// MCP Streamable HTTP transport — stateless, one server per request
// CORS headers are set on the raw response since reply.hijack() bypasses Fastify's pipeline
app.all('/mcp', async (request, reply) => {
    // const origin = request.headers.origin;
    // if (origin) {
    //     reply.raw.setHeader('Access-Control-Allow-Origin', origin);
    //     reply.raw.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    //     reply.raw.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Mcp-Session-Id');
    //     reply.raw.setHeader('Access-Control-Expose-Headers', 'Mcp-Session-Id');
    // }

    if (request.method === 'OPTIONS') {
        reply.raw.writeHead(204);
        reply.raw.end();
        return reply.hijack();
    }

    const server = new McpServer({ name: 'varmory', version: '1.0.0' });
    // rootDir = repo root (one level up from this file); enables filesystem
    // scanning of the showcase layout + Quasar src.
    attachShowcase(server, { rootDir: ROOT_DIR });

    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    await server.connect(transport);
    await transport.handleRequest(request.raw, reply.raw, request.body);

    reply.hijack();
});

// SPA fallback — serve index.html for any unmatched route
app.setNotFoundHandler(async (request, reply) => {
    return reply.sendFile('index.html');
});

await app.listen({ port: PORT, host: '0.0.0.0' });
console.log(`vArmory running on http://localhost:${PORT}`);
console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
