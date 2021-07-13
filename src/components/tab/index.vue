<!--
 * @Author: Linosau
 * @Date: 2021-07-04 15:47:58
 * @LastEditTime: 2021-07-05 15:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/components/tab/index.vue
-->
<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      replace
    >
      <span class="tab-link">{{tab.name}}</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'tab',
  data: () => ({
    tabs: [
      { name: '推荐', path: '/recommend' },
      { name: '歌手', path: '/singer' },
      { name: '排行', path: '/top-list' },
      { name: '搜索', path: '/search' }
    ]
  })
}
</script>

<style rel="stylesheet/less" lang="scss" scoped>
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;

    .tab-item {
      flex: 1;
      text-align: center;

      .tab-link {
        padding-bottom: 5px;
        color: $color-text-l;
      }

      &.router-link-active {
        .tab-link {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>
