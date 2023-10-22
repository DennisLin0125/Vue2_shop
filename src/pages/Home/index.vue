<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 使用三級連動全局組件 -->
    <TypeNav />

    <!-- 渲染其餘的組件 -->
    <ListContainer />
    <Recommend />
    <Rank />
  </div>
</template>

<script>
// 引入其餘的組件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
  }
};
</script>

<style></style>