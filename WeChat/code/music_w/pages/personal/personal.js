import request from '../../utils/request'

// pages/personal/personal.js
let startY = 0;
let moveY = 0;
let moveDistance = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransfrom:'translateY(0)',
    coverTransion:'',
    userInfo:{
      nickname:'游客',
      avatarUrl:'/static/images/personal/missing-face.png',
      backgroundUrl:'/static/images/personal/bgImg2.jpg',
    },
    recentListData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo')
    if(userInfo){
      this.setData({
        userInfo:JSON.parse(userInfo)
      })
      this.getRecentPlayList(this.data.userInfo.userId)
    }
  },
  //获取最近的播放记录
  async getRecentPlayList(userId){
    let recentList = await request('/user/record',{uid:userId,type:0})
    let index = 0
    let recentListData = recentList.allData.splice(0,10).map(item=>{
      item.id = index++;
      return item
    }) 
    this.setData({
      recentListData
    })
  },
  handleTouchStart(event){
    this.setData({
      coverTransion:''
    })
    startY = event.touches[0].clientY;
  },  
  handleTouchmove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    if(moveDistance<=0){
      return
    }
    if(moveDistance>=80){
      moveDistance = 80
    }
    // console.log(moveDistance)
    this.setData({
      coverTransfrom:`translateY(${moveDistance}rpx)`
    })
  },
  handleTouchEnd(){
    this.setData({
      coverTransfrom:'translateY(0)',
      coverTransion:"transform 1s linear "
    })
  },
  login(){
    if(this.data.nickname === '游客'){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }else{
      wx.showToast({
        title: '已登录，无需登录！',
      })
    }
    
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

  }
})