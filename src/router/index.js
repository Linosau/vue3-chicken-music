/*
 * @Author: Linosau
 * @Date: 2021-07-03 21:25:40
 * @LastEditTime: 2021-07-04 15:32:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import(/* webpackChunkName: "recommend" */ '@/views/recommend')
const Singer = () => import(/* webpackChunkName: "singer" */ '@/views/singer')
const TopList = () => import(/* webpackChunkName: "top-list" */ '@/views/top-list')
const Search = () => import(/* webpackChunkName: "search" */ '@/views/search')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
