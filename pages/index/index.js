//index.js
//获取应用实例
const app = getApp()
var common = require('../../utils/common.js')
Page({
  data: {
    motto: 'Hello World From Leo',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 测试全局变量 和 模块函数
    common.sayHello("HELLO");
    common.sayGoodbye("sayGOODBAY")
    common.sayGoodbye(app.AA)
    console.log(app.globalData.globalInfoString);
    console.log(getApp().globalData.globalInfoInt);

    console.log(this.data.canIUse);
    try{
      wx.setStorageSync("aaa", "aaasyc");
      console.log(wx.getStorageSync("aaa"))
    }catch(e){
    console.log('assdfasdf')
    }

    try{
    wx.request({
      url: '',
    })}catch(e){
      console.log("wx.request e")
    }
    wx.login({
      success(){

      }
      
    })
    wx.getStorage({
      key: 'aaa',
      success: res => {console.log(res.data),console.log(res.code)},
      success: function(res) {
        console.log(res.data)
        console.log(res.errMsg)
      },
      fail: function(){
        console.log("fail")

      },
      complete: function(){
        console.log("complete")
      }
    })

    console.log("++++++++++++++++++++++" + getApp().globalData.userInfo)
    console.log("++++++++++++++++++++++" + this.data.canIUse)

    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("++++++++++++++++++++++" + res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log("++++++++++++++++++++++"+res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
