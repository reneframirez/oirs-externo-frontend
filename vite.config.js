// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'process.env': {
        // Puedes mantener otras variables de entorno necesarias aquí
        NOMBRE_BACKEND: env.NOMBRE_BACKEND,
      },
    },
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist', // Directorio de salida simplificado
      assetsInlineLimit: 0,
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        input: '/src/main.jsx',
        output: {
          entryFileNames: 'assets/[name].js',
        },
      },
    },
  }
})
