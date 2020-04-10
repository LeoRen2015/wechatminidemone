// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      console.log("detail page"+ options.aa),
      this.setData({
        mid: options.aa

      })
      wx.request({
        url: 'http://localhost:8080/YanXuanController/getString',
        method:'GET',
        data:{
          
        },
        header:{

        },
        success:function(res){
          console.log(res)
          that.setData({
            movie: res.data
          }),
          wx.hideNavigationBarLoading(),
          wx.setNavigationBarTitle({
            title: res.data.data.localstr+"分好评"
          })
       
    
        },
        complete:function(){

        },
        fail:function(){

        }
      }),
      wx.showNavigationBarLoading()

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
  }
})