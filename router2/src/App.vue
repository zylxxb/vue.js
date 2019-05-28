<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/one">user1</router-link> |
      <router-link to="/user/two">user2</router-link> |
      <router-link to="/star">动态</router-link>
      <br>
      <br>
      <button @click='toIndex'>跳转到首页</button>
      <button @click='toUser1'>跳转到1</button>
      <button @click='toUser2'>跳转到2</button>
    </div>
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:  {
     toIndex(){
        this.$router.push({name: 'home'})
     },
     toUser1(){
        this.$router.push('/user/1')
     },
     toUser2(){
        this.$router.push('/user/2')
     },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
background-color: #ccc
}
</style>
