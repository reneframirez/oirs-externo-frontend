import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'import.meta.env.VITE_NOMBRE_BACKEND': JSON.stringify(env.VITE_NOMBRE_BACKEND),
      'import.meta.env.VITE_USUPRODEF_PRUEBA': JSON.stringify(env.VITE_USUPRODEF_PRUEBA),
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(env.VITE_APP_VERSION),
      'import.meta.env.VITE_APP_ENTORNO': JSON.stringify(env.VITE_APP_ENTORNO),
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      assetsInlineLimit: 0,
      manifest: true,
      emptyOutDir: true,
      // Eliminar rollupOptions.input para permitir que Vite procese index.html
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
        },
      },
    },
  }
})
