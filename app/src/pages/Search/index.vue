<template>
  <div>
    <h1>params参数：{{$route.params.keyword}}</h1>
    <h1>query参数：{{keyword}}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["keyword"],
}
</script>

<style scoped>

</style>