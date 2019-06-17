<template>
  <div id="about">
    <div class="counter">
        <b-alert variant="success" show><h3><i class="fa fa-address-book"></i>计数器:{{counter}}</h3></b-alert>
        <b-alert variant="success" show><h3><i class="fa fa-address-book"></i>计时器:{{seconds}}</h3></b-alert>
    </div>
    <button type="button" class="btn btn-danger" @click="exit">退出</button>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>新增会员信息</h4>
            <p>编号：12021 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>新增会员信息</h4>
            <p>编号：12020 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>新增会员信息</h4>
            <p>编号：12019 提交于 2018/4/1 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>新增会员信息</h4>
            <p>编号：12018 提交于 2018/3/23 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>新增会员信息</h4>
            <p>编号：12017 提交于 2018/3/20 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'about',
  layout: 'blog',
  middleware: ['counter','str'],
  head(){
    return {
      title: '关于',
      meta: [
        { hid: 'user-manager', name: 'description', content: '自定义用户信息' }
      ]
    }
  },
  computed: {
    ...mapState(['counter','seconds']),
    ...mapGetters(['isAuth'])
  },
  methods: {
    exit(){
      this.$store.commit('REMOVE_INFO')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="css" scoped>
#about{
  padding: 20px 80px
}
.counter{
  width: 300px;
  height: 60px;
  margin: 30px auto 120px
}
</style>
