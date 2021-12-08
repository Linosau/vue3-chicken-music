/*
 * @Author: Linosau
 * @Date: 2021-07-03 21:25:40
 * @LastEditTime: 2021-07-04 15:23:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import LoadingDirective from '@/components/directive/Loading/directive'
import '@/styles/index.scss'

createApp(App)
  .use(store).use(router)
  .use(lazyPlugin, { loading: require('@/assets/images/default.png') })
  .directive('loading', LoadingDirective)
  .mount('#app')
