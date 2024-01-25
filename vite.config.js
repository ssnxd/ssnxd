import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [React()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
