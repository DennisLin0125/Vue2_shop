<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 使用三級連動全局組件 -->
    <TypeNav />
    <ListContainer />
  </div>
</template>

<script>
// 引入其餘的組件
import ListContainer from '@/pages/Home/ListContainer'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    ListContainer,
  }
};
</script>

<style></style>