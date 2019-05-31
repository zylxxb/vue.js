<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="info">点击</button>
  </div>
</template>

<script>
import Title from '@/components/title.js'

export default {
  name: 'about',
  mixins: [Title],
  created(){
    console.log('我是组件类的信息')
  },
  methods: {   
    info(){
    console.log('我是组件内的提示信息')
    }
  }
}
</script>

<style>

</style>
