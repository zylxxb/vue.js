<template>
  <div>
  <ul id="navbar" class="list-group col-md-2">
    <li class="list-group-item"><router-link to="/4">博文</router-link></li>
    <li class="list-group-item"><router-link to="/5">笔记</router-link></li>
    <li class="list-group-item"><router-link to="/6">收藏</router-link></li>
  </ul>
  <div id="content">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'PageOne',
}
</script>

<style scoped>
ul{
   height: 600px;
   padding-right: -15px;
   background-color: #fee;
}
li{
   background-color: #fee;
   padding-right: -15px;
   margin-right: -15px;
   text-align:center
}
a{
   text-decoration: none;
   display: block;
   color:#000;
   font-size:16px
}
li:hover{
   color:#fff;
   background-color:#caf
}
div{
  background-color: #fcc;
}
</style>
