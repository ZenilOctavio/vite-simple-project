import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue()],
  build : {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root,'index.html'),
        about: resolve(root,'about','index.html')
      }
    }
  }
})
