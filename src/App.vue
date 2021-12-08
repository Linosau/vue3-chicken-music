<!--
 * @Author: Linosau
 * @Date: 2021-07-03 21:25:40
 * @LastEditTime: 2021-07-05 10:26:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/App.vue
-->
<template>
  <m-header></m-header>
  <tab></tab>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import MHeader from '@/components/header'
import Tab from '@/components/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>
