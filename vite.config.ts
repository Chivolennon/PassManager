import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "", // Evita que los archivos se muevan a "dist/assets/"
    rollupOptions: {
      input: {
        main: "public/manifest.json",   // Asegura que manifest.json esté en dist/
        background: "src/scripts/background.ts",
        content: "src/scripts/content.ts"
      },
      output: {
        entryFileNames: "[name].js" // Evita nombres raros como "index-DpoZeYZr.js"
      }
    }
  }
});