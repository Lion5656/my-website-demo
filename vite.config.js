import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, './'),
    base: './',
    build: {
        outDir: 'dist'
    },
    server: {
        port: 5173,
        hot: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                    'if-function',
                ],
            }
        }
    }
});
