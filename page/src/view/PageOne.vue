<template>
  <div>
  <ul id="navbar" class="list-group col-md-2">
    <li @click="tran('BookOne')" class="list-group-item"><a>博文</a></li>
    <li @click="tran('BookTwo')" class="list-group-item"><a>笔记</a></li>
    <li @click="tran('BookThree')" class="list-group-item"><a>收藏</a></li>
  </ul>
  <div id="content" class="col-md-10">
    <component :is="com" style="width:100%;height:600px"></component>
  </div>
  </div>
</template>

<script>
import BookOne from './BookOne.vue'
import BookTwo from './BookTwo.vue'
import BookThree from './BookThree.vue'

export default {
  name: 'PageOne',
  components: {
  BookOne,
  BookTwo,
  BookThree,
  },
  data: function() {
  return{
  com: ''
  }
  },
  methods: {
  tran: function(params){
  this.com = params
  }
  }
}
</script>

<style scoped>
ul{
   height: 600px;
   padding-right: -15px;
   background-color: #fee;
}
li{
   background-color: #fee;
   padding-right: -15px;
   margin-right: -15px;
   text-align:center
}
a{
   text-decoration: none;
   display: block;
   color:#000;
   font-size:16px
}
li:hover{
   color:#fff;
   background-color:#caf
}
div{
  background-color: #fcc;
}
</style>
