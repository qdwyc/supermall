module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },
  devServer: {
    host: "localhost",
    port: "8081",
    open: true //自动在浏览器地址栏中打开项目
  }
};
