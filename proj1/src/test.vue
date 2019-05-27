 一个vue文件示例
<template>
  <div class='alert' :class='bindClass' v-if='isShow'>
     <h2><slot name='title'>标题</slot></h2>
     <button class='close' v-if='close' @click='onClose'>x</button>
     <p><slot name='text'></slot></p>
  <footer class='footer'><slot name='footer'></slot></footer>
</div>
</template>

<script>

export default {
data: function() {
  return{
    isShow: true
  }
},
props: {
  type: {
    type: String,
    default: 'danger'
  },
  close: {
    type: Boolean,
  }
},
computed: {
  bindClass: function(){
    return{
      'alert-danger': this.type === 'danger'? true : false,
      'alert-warning': this.type === 'warning'? true : false,
      'alert-info': this.type === 'info'? true : false,
      'alert-success': this.type === 'success'? true : false,
    }
  }
},
methods: {
  onClose: function(){
    this.isShow = false
    this.$emit('closeAlert')
  }
}
</script>

<style>
.alert{
  position: relative;
  height: 200px;
  width: 400px;
  border:1px solid #000;
  margin: 50px auto;
}
.close{
  position: absolute;
  right:20px;
  top:20px
}
.footer{
  position: absolute;;
  bottom: 20px;
  right: 40px
}
.footer button{
  margin-left: 30px
}
</style>
