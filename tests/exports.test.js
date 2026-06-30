import { describe, it, expect } from 'vitest';

describe('main library exports', () => {
    it('exports Varmory plugin, components, and extractTemplate', async () => {
        const mod = await import('../src/varmory/index.js');
        expect(mod.Varmory).toBeDefined();
        expect(mod.Varmory.install).toBeTypeOf('function');
        expect(mod.JComponentShowcase).toBeDefined();
        expect(mod.JComponentShowcaseWithContent).toBeDefined();
        expect(mod.extractTemplate).toBeTypeOf('function');
    });
});

describe('mcp exports', () => {
    it('exports attachShowcase as default and loadAll as named', async () => {
        const mod = await import('../mcp/showcaseMcp.js');
        expect(mod.default).toBeTypeOf('function');
        expect(mod.loadAll).toBeTypeOf('function');
    });
});
