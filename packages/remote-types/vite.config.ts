import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), dts({
        outDir: 'dist',
        entryRoot: 'src',
        tsconfigPath: './tsconfig.json'
    })],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "ErrorBoundary",
            fileName: "index",
            formats: ["es", "cjs"]
        },
        outDir: "dist",
        rollupOptions: {
            external: ["react", "react-dom"]
        }
    }
});
