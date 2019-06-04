<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>首页</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  created(){
  axios({
  method: 'get',
  baseUrl: 'https://www.easy-mock.com/mock/5cede2f74f44830b96f13a09/example/',
  url: '/student',
  wihtcredentials: true,
  params:{
  name:"张三"
  }
  }).then( res => {
  console.log(res.data)
  }).catch( err =>{
  })
  }
  }
</script>
