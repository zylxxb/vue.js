<template>
  <div id="user">
    <div class="counter">
        <b-alert variant="success" show><h3><i class="fa fa-address-book"></i>计数器:{{counter}}</h3></b-alert>
        <b-alert variant="success" show><h3><i class="fa fa-address-book"></i>计时器:{{seconds}}</h3></b-alert>
    </div>
    <template>
      <el-table :data="tableData" style="width: 901px" stripe border>
        <el-table-column prop="id" label="身份证" width="300"></el-table-column>
        <el-table-column prop="date" label="生日" width="300"></el-table-column>
        <el-table-column prop="city" label="籍贯" width="300"></el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'user',
  layout: 'blog',
  middleware: ['counter','str'], // 单独引入特定页面使用
  head(){
    return {
      title: '会员信息',
      meta: [
        { hid: 'user-manager', name: 'description', content: '自定义用户信息' }
      ]
    }
  },
  data(){
    return {
      tableData: []
    }
  },
  created() {
    axios({
      method: 'Get',
      baseURL: 'https://www.easy-mock.com/mock/5cede2f74f44830b96f13a09/example/',
      url: '/student'
    }).then( res => {
      for(var i = 0; i < res.data.data.length; i++){
        let result = res.data.data
        let obj ={
          id: result[i].id,
          date: result[i].date,
          city: result[i].city
        }
        this.tableData.push(obj)
      }
    })
  },
  // async mounted() {
  //   let res = await axios({
  //     method: 'Get',
  //     baseURL: 'https://www.easy-mock.com/mock/5cede2f74f44830b96f13a09/example/',
  //     url: '/student'
  //   })
  //   for(var i = 0; i < res.data.data.length; i++){
  //     let result = res.data.data
  //     let obj ={
  //       id: result[i].id,
  //       date: result[i].date,
  //       city: result[i].city
  //     }
  //     this.tableData.push(obj)
  //   }
  // },
  computed: {
    ...mapState(['counter','seconds']),
    ...mapGetters(['isAuth'])
  }
}
</script>
<style lang="css" scoped>
#user{
  padding: 30px 90px;
}
.counter{
  width: 300px;
  height: 60px;
  margin: 20px auto 150px
}
</style>
