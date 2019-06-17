<template>
  <div id="">
    <el-container>
      <el-header id="header">
        <span>管理系统</span>
        <a href="#" style="float:right;margin-right:35px">设置</a>
        <a href="#" style="float:right">操作</a>
      </el-header>
      <el-container id="container">
        <el-aside id="sidebar">
          <ul>
            <li><nuxt-link to="/">首页</nuxt-link></li>
            <li><nuxt-link to="/user">用户信息</nuxt-link></li>
            <li><nuxt-link to="/about">关于</nuxt-link></li>
          </ul>
        </el-aside>
        <el-main id="content">
          <div id="text">
            <nuxt/>
          </div>
        </el-main>
      </el-container>
   </el-container>
  </div>
</template>
<script>
export default {
  name: "blog",
  data(){
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0
  }
  body{
    font-size:16px
  }
  #header{
    position: fixed;
    background-color: rgb(51, 51, 51);
    width:100%;
    color: #fff;
    z-index: 100
  }
  #header a{
    display: inline-block;
    text-decoration:none;
    padding: 0 18px;
    line-height: 60px;
    color: #fff
  }
  #header a:hover{
    background-color:#ccc;
    color: #000
  }
  #header span{
    font-size: 20px;
    line-height: 60px;
    margin: 0 20px
  }
  #container{
      position: relative;
      top: 60px;
      width: 100%
  }
  #sidebar{
    position: absolute;
    width: 15% !important;
    height: 1200px;
    background-color: rgba(158, 158, 158, 0.4);
    text-align: center
  }
  #sidebar ul li a{
    text-decoration: none;
    color: #000
  }
  #sidebar ul li {
    list-style-type: none;
    padding: 20px 0;
    margin-left: 0;
    margin-top: 0
  }
  #sidebar ul li:hover a{
    text-decoration: none;
    color: #fff
  }
  #sidebar ul li:hover{
    background-color: pink;
  }
  #content{
    position: absolute;
    left: 15%;
    width: 85%;
    height: 1200px;
    background-color: rgba(168, 168, 168,0.2);
  }
  #text{
    margin: 20px;
    height: 1160px;
    background-color: #fff;
  }
</style>
