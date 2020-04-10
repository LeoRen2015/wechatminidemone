// componets/item.js
Component({

  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pro1:{
      type: Number,
      value:3
    },
    pro2:{
    type: Array,
    value:[2,4,5,6]
    },
    pro3:{
      type: [String, Number],
      value: ["ss",222]
    },
    tabs:{
      type: Array,
      value: []
    },
    action:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

    aaaa:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onasdfas: function(e){
      console.log(e)
      var sa = {bb:"asdfas"}
      var ff = {bb:23}
      this.triggerEvent('itemBttonEvent', sa,sa)
    }
  },
  attached:function(){
    console.log("item is attached!!")
  },
  dettached:function(){
    console.log("item is dettached!!")

  }
})
