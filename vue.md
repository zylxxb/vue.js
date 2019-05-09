## vue.js框架书写格式
~~~
new Vue({
  el: '#app',
  data: {    // 局部属性
    // 六种数据类型
    name: 'test',
    age: 18,
    birthday: new Date('1988-12-13'),
    isShow: true,
    content: null,
    person: {   

    }
  },
  computed: {    // 计算属性
    info: function(){
      return '姓名：' + this.name + ' , 年龄： ' + ‘this.age’
    }
  },
  //生命周期函数
  beforeCreate:function(){

  },
  created:function(){

  },
  beforeMount:function(){

  },
  mounted:function(){

  },
  beforeDestroy:function(){

  },
  destroyed:function(){

  },
  // 数据交互方法
  methods: {

  }
  )}
  ~~~
