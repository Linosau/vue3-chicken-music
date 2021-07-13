/*
 * @Author: Linosau
 * @Date: 2021-07-04 15:03:24
 * @LastEditTime: 2021-07-05 01:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/vue.config.js
 */
const registerRouter = require('./backend/router')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/styles/variable.scss";
          @import "@/styles/mixin.scss";
        `
      }
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
