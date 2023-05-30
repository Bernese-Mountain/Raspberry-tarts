import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 导入 path 模块
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unoSafeListcss";

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx({}),
    Unocss(),
    // Unocss({presets: [presetUno(), presetAttributify(), presetIcons()],})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 使用 path 模块和 __dirname 变量
    },
  },
  build: {
    rollupOptions,
    minify:false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/buildEntry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
})