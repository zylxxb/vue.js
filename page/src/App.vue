<template>
  <div id="app">
  <nav class="navbar navbar-inverse">
    <a class="navbar-brand" href="#">Blog</a>
    <ul class="nav navbar-nav">
      <li @click="tran('PageOne')"><a href="#">首页</a></li>
      <li @click="tran('PageTwo')"><a href="#">动态</a></li>
      <li @click="tran('PageThree')"><a href="#">留言</a></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">工具箱 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">特别关注</a></li>
          <li><a href="#">关注</a></li>
          <li><a href="#">粉丝</a></li>
          <li><a href="#">空间</a></li>
          <li><a href="#">个性设置</a></li>
        </ul>
      </li>
    </ul>
    <form class="navbar-form">
      <div class="form-group  col-md-offset-5">
        <input type="text" class="form-control" placeholder="请输入内容...">
      </div>
      <button type="search" class="btn btn-success">搜索</button>
    </form>
  </nav>
  <div class="page">
    <component :is="com" style="height:600px"></component>
  </div>
  </div>
</template>

<script>
import PageOne from './view/PageOne.vue'
import PageTwo from './view/PageTwo.vue'
import PageThree from './view/PageThree.vue'

export default {
  name: 'app',
  components: {
    PageOne,
    PageTwo,
    PageThree
  },
  data: function() {
    return{
       com: ''
    }
  },
  methods: {
    tran: function(params){
        this.com = params
    }
  }
}
</script>

<style>
.navbar{
  margin-bottom: 0px
}
.nav{
  margin-left:50px
}
</style>
