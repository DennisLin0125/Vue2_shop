<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 使用三級連動全局組件 -->
    <TypeNav />

    <!-- 渲染其餘的組件 -->
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
// 引入其餘的組件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 派發action
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.homeStore.floorList,
    }),
  },
};
</script>

<style></style>
