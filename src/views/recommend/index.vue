<!--
 * @Author: Linosau
 * @Date: 2021-07-04 16:38:43
 * @LastEditTime: 2021-07-05 10:15:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/views/recommend/index.vue
-->
<template>
  <div class="recommend" v-loading="loading">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>
        <div class="recommend-list">
          <h1 v-show="!loading" class="list-title">热门歌单推荐</h1>
          <ul>
            <li
              class="item"
              v-for="item in albums"
              :key="item.id"
              @click="selectItem(item)"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic">
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{item.title}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/base/Slider'
import Scroll from '@/components/base/Scroll'
import { getRecommend } from '@/api/recommend'

export default {
  name: 'recommend',
  components: {
    Slider,
    Scroll
  },
  async created () {
    const res = await getRecommend()
    console.log(res)
    this.sliders = res.sliders
    this.albums = res.albums
  },
  data: () => ({
    sliders: [],
    albums: [],
    selectedAlbum: null
  }),
  computed: {
    loading () {
      return !this.sliders.length && !this.albums.length
    }
  },
  methods: {
    selectItem (album) {
      console.log(album)
    }
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
    &-content {
      overflow: hidden;
      height: 100%;
    }
    &-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
</style>
