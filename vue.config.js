const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@api": resolve("src/api"),
        "@components": resolve("src/components"),
        "@router": resolve("src/router"),
        "@layout": resolve("src/layout"),
        "@store": resolve("src/store"),
        "@views": resolve("src/views"),
      },
    },
  },
});
