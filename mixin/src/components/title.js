export default {
  created(){
    window.document.title = this.$route.meta.title
    console.log('我是混入信息');
  },
  methods:{
    info(){
      console.log('我是混入的提示信息');  
    }
  }
}
