<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 派发一个action
    // 具有命名空间的写法, 需开启 namespaced:true,
    this.$store.dispatch('Home/categoryList')
    // 常规写法
    // this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>
