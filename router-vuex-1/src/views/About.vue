<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>我的信息:{{name}}</h2>
    <h2>我的拼接:{{splitName}}</h2>
    <h2>信息反写:{{reverseName}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: 'about',
  computed:{
      ...mapState(['name']),
      ...mapGetters(['reverseName'])
  },
  data(){
    return {
    splitName: this.$store.state.name + 'abc'
    }
  }
}
</script>
