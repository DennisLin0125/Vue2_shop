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
  }
}
</script>

<style></style>