<template>
  <div class="user">
    <h1>用户信息</h1>
    <h3>ID:{{$route.params.id}}</h3>
    <p>查询参数: {{$route.query.test}}</p>
    <h4>学生信息</h4>
    <p>照片:{{image}}</p>
    <p>出生日期:{{date}}</p>
    <p>城市:{{city}}</p>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'user',
  data() {
  return {
  id: null,
  students: [],
  city: null,
  date: null,
  image: null,
  baseUrl: 'https://www.easy-mock.com/mock/5cede2f74f44830b96f13a09/example'
  }
  },
  mounted(){
  Axios({
  methods:'GET',
  url: this.baseUrl + '/student'
  }).then(res =>{
  let result = res.data.data
  this.students = result
  let id = this.$route.params.id
  console.log(id)
  this.city = this.students[id-1].city
  this.date = this.students[id-1].date
  this.image = this.students[id-1].image
  })
  },
  beforeRouteUpdate(to, from, next){
  console.log('组件复用时调用RouteUpdate')
  console.log(id)
  let id = to.params.id
  this.city = this.students[id-1].city
  this.date = this.students[id-1].date
  this.image = this.students[id-1].image
  console.log(to);
  next()
  },
  beforeRouteEnter(to, from, next){
  console.log('组件进入之前--内部调用beforeRouterEnter')
  next()
  },
  beforeRouteLeave(to, from, next){
  console.log('离开user组件时--内部调用beforeRouterLeave')
  const answer = window.confirm('是否离开user组件')
  if (answer) {
  next()
  } else {
  next(false)
  }
  },
}
</script>

<style>

</style>
