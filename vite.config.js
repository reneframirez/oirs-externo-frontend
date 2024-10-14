import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'import.meta.env.VITE_NOMBRE_BACKEND': JSON.stringify(env.NOMBRE_BACKEND),
      // Otros variables de entorno prefijadas con VITE_
    },
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      assetsInlineLimit: 0,
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        input: 'src/main.jsx', // Ruta corregida
        output: {
          entryFileNames: 'assets/[name].js',
        },
      },
    },
  }
})
