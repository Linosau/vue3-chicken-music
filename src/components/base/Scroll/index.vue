<!--
 * @Author: Linosau
 * @Date: 2021-07-06 06:51:50
 * @LastEditTime: 2021-07-13 10:11:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/components/base/Scroll/index.vue
-->
<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
import useScroll from './use-scroll'

export default {
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emits: ['scroll'],
  setup (props, { emit }) {
    const rootRef = ref(null)
    useScroll(rootRef, props, emit)

    return {
      rootRef
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
</style>
