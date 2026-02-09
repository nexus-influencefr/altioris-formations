import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        formations: 'formations.html',
        contact: 'contact.html',
        'a-propos': 'a-propos.html',
        documents: 'documents.html',
        informations: 'informations.html',
        'mentions-legales': 'mentions-legales.html',
        'politique-confidentialite': 'politique-confidentialite.html'
      }
    }
  }
})
