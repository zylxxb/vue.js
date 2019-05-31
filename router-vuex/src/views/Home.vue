<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" v-model="name" placeholder="请输入姓名">
    <button @click="save">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
     name: null
    }
  },
  methods: {
    save(){
       console.log('保存数据')
       this.$store.commit('setName',this.name)
    }
  }
}
</script>
