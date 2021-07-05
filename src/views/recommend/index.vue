<!--
 * @Author: Linosau
 * @Date: 2021-07-04 16:38:43
 * @LastEditTime: 2021-07-05 10:15:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/views/recommend/index.vue
-->
<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider v-if="sliders.length" :sliders="sliders" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/base/Slider'
import { getRecommend } from '@/api/recommend'

export default {
  name: 'recommend',
  components: {
    Slider
  },
  data: () => ({
    sliders: [],
    albums: [],
    selectedAlbum: null
  }),
  async created () {
    const res = await getRecommend()
    this.sliders = res.sliders
    this.albums = res.albums
  }
}
</script>

<style lang="scss" scoped>
  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    overflow: scroll;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
    }
    .slider-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
