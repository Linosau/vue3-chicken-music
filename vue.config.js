/*
 * @Author: Linosau
 * @Date: 2021-07-04 15:03:24
 * @LastEditTime: 2021-07-04 15:25:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/vue.config.js
 */
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
  }
}
