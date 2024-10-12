import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    build: {
        target: 'esnext', // Imposta il target ESNext per supportare le moderne funzionalità di JS
        rollupOptions: {
            output: {
                format: 'es' // Usiamo il formato ESModule per l'output
            }
        }
    }
});
