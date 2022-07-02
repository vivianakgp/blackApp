/// <reference types="vitest" />

import { resolve as pathResolve } from "path";

import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";

const baseFolder = pathResolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    alias({
      entries: [
        {
          find: "@/components",
          replacement: pathResolve(baseFolder, "components"),
        },
        {
          find: "@/src",
          replacement: pathResolve(baseFolder, "src"),
        },
      ],
    }) as any,
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});