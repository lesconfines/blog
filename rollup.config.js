require("dotenv").config();

import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import markdown from "@jackfranklin/rollup-plugin-markdown";
import glob from "rollup-plugin-glob";
import sveltePreprocess from "svelte-preprocess";
import svg from "rollup-plugin-svg-import";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_API_KEY = process.env.GHOST_API_KEY;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      svg({ stringify: true }),
      markdown(),
      glob(),
      replace({
        process: JSON.stringify({
          browser: true,
          env: {
            NODE_ENV: mode,
            GHOST_API_URL,
            GHOST_API_KEY,
          },
        }),
      }),
      svelte({
        preprocess: sveltePreprocess({ postcss: true }),
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      svg({ stringify: true }),
      markdown(),
      glob(),
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        preprocess: sveltePreprocess({ postcss: true }),
        generate: "ssr",
        dev,
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
