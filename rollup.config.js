import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      extensions: [".css"],
      minimize: false,
      inject: true,
      extract: false,
    }),
    // 이미지 및 폰트 등의 에셋 처리
    url({
      include: [
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.svg",
        "**/*.webp",
      ],
      limit: 20 * 1024, // 20kb 이하는 base64로 인라인 처리
      emitFiles: true,
    }),
    // 이미지 폴더를 dist로 복사
    copy({
      targets: [{ src: "src/public/images", dest: "dist" }],
      verbose: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "node_modules/**"],
      outDir: "dist",
    }),
    terser(),
  ],
  external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
};
