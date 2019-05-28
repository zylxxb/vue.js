<template>
  <div class="user">
    <h1>用户信息</h1>
    <h3>ID:{{$route.params.id}}</h3>
  </div>
</template>

<script>
export default {
  name: 'user',
  beforeRouteUpdate(to, from, next){   // 当前页面路由信息
  console.log(this.$route);
  next()
  }
}
</script>

<style>

</style>
