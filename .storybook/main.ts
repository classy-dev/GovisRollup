import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../src/public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-styling",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  webpackFinal: async (config: any) => {
    config.resolve = config.resolve || {};
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    // Alias 설정 - Ensure paths end with /* for directory mapping
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ComponentFarm": path.resolve(__dirname, "../src/components"),
      "@ComponentFarm/*": path.resolve(__dirname, "../src/components/*"),
      "@ApiFarm": path.resolve(__dirname, "../src/api"),
      "@ApiFarm/*": path.resolve(__dirname, "../src/api/*"),
      "@HookFarm": path.resolve(__dirname, "../src/hook"),
      "@HookFarm/*": path.resolve(__dirname, "../src/hook/*"),
      "@UtilFarm": path.resolve(__dirname, "../util"),
      "@UtilFarm/*": path.resolve(__dirname, "../util/*"),
      "@InterfaceFarm": path.resolve(__dirname, "../src/interface"),
      "@InterfaceFarm/*": path.resolve(__dirname, "../src/interface/*"),
      "@MobxFarm": path.resolve(__dirname, "../src/mobx"),
      "@MobxFarm/*": path.resolve(__dirname, "../src/mobx/*")
    };

    // Babel loader 추가
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
          "@babel/preset-typescript",
        ],
        plugins: ["@emotion/babel-plugin"],
      },
    });

    // 확장자 추가
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;