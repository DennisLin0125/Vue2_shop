<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 使用三級連動全局組件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
  </div>
</template>

<script>
// 引入其餘的組件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    ListContainer,
    Recommend,
  }
};
</script>

<style></style>