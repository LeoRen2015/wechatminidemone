// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "this is test1 page",
    number1: 2,
    text2: "text6",
    array:[1,2,3,4,5,6],
    listData:[
      {
        
        aa: "aa1",
        bb:"bb1",
        url: "../../images/驯龙1.jpg"},
      {
        aa:"aa2",
         bb:"bb2",
        url: "../../images/驯龙2.jpg"
      },
      {
        aa:"aa3",
        bb: "bb3",
        url: "../../images/驯龙3.jpg"
      }

    ],
    count: 0

  },

 f0:function(){
   this.setData({
     currentIndex: 1})
 },

  fcount: function(){
    this.setData({
     count:  this.data.count+1
    })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.listData.length -1
    }),
     
    setTimeout(function aa(){ 
      console.log('2秒后调用')
      wx.navigateTo({
        url: '/pages/test2/test2',
      })
    }
       ,2000),
    wx.redirectTo({
      url: '',
    });
    wx.reLaunch({
      url: '',
    }),
    wx.navigateTo({
      url: '',
    }),
    wx.navigateBack({
      
    })
       
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // setTimeout(function aa() {
    //   console.log('2秒后调用')
    //   wx.navigateTo({
    //     url: '/pages/test2/test2',
    //   })
    // }
    //   , 2000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("this is onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("this is onUnload")

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: "这就是标题啊",        // 默认是小程序的名称(可以写slogan等)
      path: '/pages/test1/test1',

    }

    return shareObj
  },
  tapName: function(event){
    console.log(event);

  },
  fchangemoveiename: function(){
    this.setData({
      "listData[0].aa": "000",
      "listData[1].aa": "111",
      "listData[2].aa" :"222"

    })
  },
  fViewBindTap:function(event){
    console.log(event)
    console.log("fViewBindTap")
  },
  fTextBindTap: function (event){
     console.log(event)
     console.log("fTextBindTap")

   },
  fSwiperImage: function(event){
    wx.navigateTo({
      url: '/pages/detail/detail?aa='+event.currentTarget.dataset.aa,
    })
    console.log(event)
  },
  saas: function(e){
    console.log(e.detail)
    this.setData({
      "listData[0].aa": e.detail.bb
    })
  }
})