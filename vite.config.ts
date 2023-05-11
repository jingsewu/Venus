import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createStyleImportPlugin({
    //   resolves: [AntdResolve()],
    // }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "~",
        replacement: path.resolve(__dirname, "."),
      },
    ],
  },
});
