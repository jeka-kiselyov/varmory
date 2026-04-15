import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
            vue(),
            libInjectCss(),
        ],
    build: {
        lib: {
            // src/indext.ts is where we have exported the component(s)
            entry: resolve(__dirname, "src/varmory/index.js"),
            name: "Varmory",
            // the name of the output files when the build is run
            fileName: "varmory",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue", "quasar", "@quasar/extras", 'pinia'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                    quasar: "Quasar",
                    "@quasar/extras": "QuasarExtras",
                    pinia: "Pinia"
                },
            },
            makeAbsoluteExternalsRelative: true,
        },
        emptyOutDir: true, // Optional: Cleans the dist folder before each build
    },
    resolve: {
        // Deduplicate pinia to ensure a single instance during development
        dedupe: ['pinia', 'vue', 'quasar', '@quasar/extras']
    },
});