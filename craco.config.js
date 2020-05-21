const CracoAlias = require("craco-alias");
const tailwindcss = require("tailwindcss");
const presetEnv = require("postcss-preset-env");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  style: {
    postcss: {
      mode: "extends" /* (default value) */ || "file",
      plugins: [tailwindcss("./tailwind.config.js"), presetEnv({ stage: 0 })],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: ".",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "DARKMAGENTA",
          "@link-color": "TEAL",
        },
      },
    },
  ],
};

// Consider adding purgecss to reduce css size
// https://medium.com/@SlashArash/using-tailwind-css-in-a-react-project-4230838be3f
