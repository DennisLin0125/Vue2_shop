<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>params參數 : {{ $route.params.keyword }}</h1>
    <h1>query參數 : {{ $route.query.k }}</h1>
  </div>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
};
</script>
  
<style>
</style>