// pages/recommendSong/reconmmendSong.js
import request from '../../utils/request'
import PubSub from 'pubsub-js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    month:'',
    recommendSongList:[],
    index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo')
    if(!userInfo){
      wx.showToast({
        title: '请先登录',
        success:()=>{
          wx.reLaunch({
            url: '/pages/login/login',
          })
        }
      })
    }
    this.setData({
      day:new Date().getDate(),
      month:new Date().getMonth() + 1
    })

    //获取推荐歌曲数据
    this.getRecommendSongListData()

    //订阅消息
    PubSub.subscribe('switchType',(msg,type)=>{
      let {recommendSongList, index} = this.data
      console.log(msg,type)
      if(type === 'pre'){
        (index ===0) && (index = recommendSongList.length)
        index -=1
      }else{
        (index === recommendSongList.length -1) && (index =-1) 
        index +=1
      }
      this.setData({
        index
      })
      let musicId = recommendSongList[index].id
      PubSub.publish('musicId',musicId)
    })
  },
  async getRecommendSongListData() {
    let recommendSongListData = await request('/recommend/songs');
    let recommendSongList = recommendSongListData.data.dailySongs.map(item => {
        item.artistStr = '';
        for (let i = 0; i < item.ar.length; i++) {
            if (i > 0) {
                item.artistStr += '/';
            }
            item.artistStr += item.ar[i].name;
        }
        return item;
    });
    this.setData({
        recommendSongList
    });
},

  //跳转至歌曲详情页
  toSongDetail(event){
    let {song, index} = event.currentTarget.dataset;
    this.setData({
      index
    })
    wx.navigateTo({
      //注意此处musicId前不能写+号，前后不能出现空格！！！！！
      url: '/pages/songDetail/songDetail?musicId='+song.id,
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

  }
})