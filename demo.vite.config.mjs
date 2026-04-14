import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    root: 'src',
    plugins: [
            vue({
                template: { transformAssetUrls }
            }),
            quasar(),
            // libInjectCss(),
        ],
    build: {
        rollupOptions: {
            external: [],
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            },
        },
        outDir: '../demo', // relative to .root ^
    },
});