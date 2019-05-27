Vue.component("v-btn",{
  template: "<div style='display:inline-block'>\
    <button class='btn' :class='bindClass' @click='onClick' @mouseenter='showBg1' @mouseleave='showBg2'>{{title}}</button>\
  </div>",
  data: function() {
    return{
      backColor: ''
    }
  },
  props: {
    title: {
      type: String,
      default: '提交'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    bindClass: function(){
      return {
        'btn-success': this.type === 'success'? true : false,
        'btn-default': this.type === 'default'? true : false,
        'btn-warning': this.type === 'warning'? true : false,
        'btn-danger': this.type === 'danger'? true : false,
        'btn-xs': this.size === 'xs'? true : false,
        'btn-sm': this.size === 'sm'? true : false,
        'btn-lg': this.size === 'lg'? true : false,
      }
    }
  },
    methods: {
      onClick: function() {
        this.$emit('btn-click', 'test')
      },
      showBg1: function() {
        this.backColor = this.type
        this.type = 'danger'
      },
      showBg2: function() {
        this.type = this.backColor
      },
  }
})
