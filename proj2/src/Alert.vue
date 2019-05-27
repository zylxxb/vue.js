<template>
  <div id="app">
  <VueAlert type='info' close @closeAlert='clearData' v-if='isShow'>
    <template v-slot:title>PROGRAM ERR！！！</template>
    <template v-slot:text>程序运行报错,是否继续运行程序</template>
    <template v-slot:footer>
      <VueBtn type="success" @btn-click="save">确定</VueBtn>
      <VueBtn type="danger" @btn-click="cancle">取消</VueBtn>
    </template>
  </VueAlert>
  <VueAlert type='danger'>
    <template v-slot:title>PROGRAM DAGER！！！</template>
    <template v-slot:text>程序终止运行</template>
  </VueAlert>
  <VueAlert type='warning' close @closeAlert='clearData'>
    <template v-slot:title>WARNING :888011！！！</template>
    <template v-slot:text>点击右上角立即停止运行</template>
  </VueAlert>
  <VueAlert type='success' close @closeAlert='clearData' v-if="isShow">
    <template v-slot:title>PRAGRAM SUCCESS！！！</template>
    <template v-slot:text>程序运行成功,点击下一步完成启动</template>
    <template v-slot:footer>
      <VueBtn type="info" @btn-click="next">下一步</VueBtn>
      <VueBtn type="danger" @btn-click="cancle">取消</VueBtn>
    </template>
  </VueAlert>
  </div>
</template>

<script>
import VueAlert from './components/VueAlert.vue'
import VueBtn from './components/VueBtn.vue'

export default {
  name: 'app',
  components: {
    VueAlert,
    VueBtn
  },
  data: function() {
    return{
      isShow: true
    }
  },
  methods: {
    clearData: function() {
      console.log('程序停止，清除数据');
    },
    save: function() {
      alert('保存成功');
      this.isShow = false
    },
    cancle: function() {
      alert('取消');
      this.isShow = false
    },
    next: function() {
      alert('下一步')
      this.isShow = false
    }
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
