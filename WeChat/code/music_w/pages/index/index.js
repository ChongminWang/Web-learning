// pages/index/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baner: [],
    gedan: [],
    List:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // wx.request({
    //   url: 'http://localhost:3000/banner',
    //   data:{type:2},
    //   success: (res)=>{
    //     this.setData({
    //       baner:res.data.banners
    //     })
    //     console.log('请求成功：',res)
    //   },
    //   fail: (err)=>{
    //     console.log("请求失败：",err)
    //   }
    // })
    let bannerdata = await request('/banner', { type: 2 });
    let gedandata = await request('/personalized', { limit: 15 });
    let topListData = await request('/toplist/detail')
    // topListItem = { name: topListData.list.name, tracks: topListData.list.tracks }
    let index = 0;
    let resultArr = [];
    while(index<5){
      let topListItem = topListData.list[index++]
      resultArr.push(topListItem)
      this.setData({
        List:resultArr
      })
    }
    // console.log(resultArr)  
    this.setData({
      baner: bannerdata.banners,
      gedan: gedandata.result,

    })

  },
  toRecommendSong(){
    wx.navigateTo({
      url: '/pages/recommendSong/reconmmendSong',
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

  },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})