<!--
 * @Author: Linosau
 * @Date: 2021-07-05 01:49:57
 * @LastEditTime: 2021-07-05 10:21:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/components/base/slider/index.vue
-->
<template>
  <div ref="rootRef" class="slider">
    <div class="slider-group">
      <div
        class="slider-page"
        v-for="item in sliders"
        :key="item.id"
      >
        <a class="slider-link" :href="item.link">
          <img :src="item.pic" />
        </a>
      </div>
    </div>

    <div class="slider-dots">
      <span
        class="dot"
        v-for="(item, index) in sliders"
        :key="item.id"
        :class="{'active': currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlider from './use-slider'

export default {
  name: 'Slider',
  props: {
    sliders: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef)

    return {
      rootRef,
      currentPageIndex
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider {
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    &-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }
    &-page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }
    &-link {
      display: block;
      width: 100%;
      > img {
        display: block;
        width: 100%;
      }
    }

    &-dots {
      position: absolute;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%);
      line-height: 12px;
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        transform: translateZ(1px);
        border-radius: 50%;
        background: $color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
    }
  }
</style>
