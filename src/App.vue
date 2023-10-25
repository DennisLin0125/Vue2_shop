<template>
  <div>
    <Header />
    <!-- 路由組件的出口處 -->
    <router-view></router-view>
    <!-- 在home或Search出現 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  // 當組件掛載完畢就可以發請求
  mounted(){
    // 通知Vuex發送請求,獲取數據,存儲於倉庫中
    this.$store.dispatch("categoryList");
  }
}
</script>

<style></style>