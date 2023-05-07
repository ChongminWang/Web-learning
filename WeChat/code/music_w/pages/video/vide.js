import request from '../../utils/request'

// pages/video/vide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [],
    navId: null,
    videoList: [],
    videoContext: {
      vid: '',
      context: null
    },
    isTriggered:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoListData()
  },
  //获取导航数据
  async getVideoListData() {
    let videoGroupListData = await request('/video/group/list')
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })

    this.getVideoList(this.data.navId)
  },
  //获取视频列表数据
  async getVideoList(navId) {
    let videoListData = await request('/video/group', { id: navId })
    let videoList = videoListData.datas;
    for (let i = 0; i < videoList.length; i++) {
      videoList[i].id = i
      let videoUrlData = await request('/video/url', { id: videoList[i].data.vid })
      videoList[i].urls = videoUrlData.urls
    }
    this.setData({
      videoList,
      isTriggered: false
    })
    // console.log(videoList)
    //关闭加载
    wx.hideLoading()
  },
  //点击切换导航
  changeNav(event) {
    let navId = event.currentTarget.id;
    this.setData({
      navId: navId >>> 0,
      videoList: []
    })
    wx.showLoading({
      title: '正在加载中。。。',
    })
    //动态获取当前导航对应的视频数据
    this.getVideoList(this.data.navId)
  },
  //点击播放的回调
  bindlePlay(event) {
    // console.log(event,'1111')
    //创建控制video标签的实例
    let vid = event.currentTarget.dataset.id
    // 如果videoContext不为当前视频
    if (this.data.videoContext.vid != vid) {

      // 且context不为空，则暂停
      if (this.data.videoContext.context) {
        this.data.videoContext.context.stop();
      }

      // 创建新的控制video标签的实例对象, 并播放（传入的参数相是video的id）
      let context = wx.createVideoContext(vid);
      // console.log(context,'22222')
      context.play();

      this.setData({
        videoContext: {
          vid,
          context
        }
      });
    } else {
      this.data.videoContext.context.play();
    }
  },
  handleRefresher() {
    this.getVideoList(this.data.navId);
  },
  handleToLower() {
    console.log("无可追加数据");
  },
  toSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
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