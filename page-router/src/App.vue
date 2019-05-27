<template>
  <div id="app">
  <nav class="navbar navbar-inverse">
    <a class="navbar-brand" href="#">Blog</a>
    <ul class="nav navbar-nav">
      <li><router-link to="/1">首页</router-link></li>
      <li><router-link to="/2">动态</router-link></li>
      <li><router-link to="/3">留言</router-link></li>
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
      <router-view style="height:600px"></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
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
