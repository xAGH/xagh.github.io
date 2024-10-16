import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ioc": resolve(__dirname, "./src/ioc"),
      "@layouts": resolve(__dirname, "./src/apps/shared/layouts"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@terminal": resolve(__dirname, "./src/apps/terminal"),
    },
  },
});
