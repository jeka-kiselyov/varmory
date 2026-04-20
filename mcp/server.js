import path from 'path';
import { fileURLToPath } from 'url';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
// import cors from '@fastify/cors';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import attachShowcase from './showcaseMcp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = Fastify({ logger: true });

// app.register(cors, { origin: true });

// Serve the built SPA from ../demo
app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'demo'),
    wildcard: false,
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
    attachShowcase(server, { rootDir: path.join(__dirname, '..') });

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
