/*
 * @Author: Linosau
 * @Date: 2021-07-06 06:52:01
 * @LastEditTime: 2021-07-06 06:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/components/base/Scroll/use-scroll.js
 */
import BScroll from '@better-scroll/core'
import { onMounted, onUnmounted, ref } from 'vue'

export default function useScroll (wrapperRef) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value)
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
