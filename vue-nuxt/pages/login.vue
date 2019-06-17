<template>
  <div id="login" style="height:800px;background-color:#ccc">
    <div style="width:30%;margin: 0px auto;padding:200px 0">
      <form class="form-horizontal" @submit="submit" action="index.html" method="post">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
          <div class="col-sm-10">
            <input type="text" v-model="ruleForm.user" class="form-control" id="inputEmail3" placeholder="请输入账号">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" v-model="ruleForm.password" class="form-control" id="inputPassword3" placeholder="请输入密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-success">登录</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "login",
  layout: "default",
  data(){
    return {
      ruleForm: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function(event) {
      event.preventDefault()
      this.$store.commit('SET_INFO', this.ruleForm.user, this.ruleForm.password)
      // var isAuth = this.$store.getters.isAuth
      if (this.isAuth) {
        this.$router.push('/')
      }
    }
  },
  computed:{
    ...mapGetters(['isAuth'])
  }
}
</script>
<style lang="scss" scoped>
</style>
