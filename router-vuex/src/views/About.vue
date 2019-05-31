<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>我的信息:{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed:{
    name() {
      return this.$store.state.name
    }
  }
}
</script>
