// pages/songDetail/songDetail.js
import request from '../../utils/request'
import PubSub from 'pubsub-js'
import moment from 'moment'
const appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:false,//标识音乐是否播放
    song:{},//歌曲详情对象
    musicId:'',
    musicLink:'',
    currentTime:'00:00',
    durationTime:'00:00',
    currentWidth: 0,//代表进度条的移动
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let musicId = options.musicId
    this.setData({
      musicId
    })
    this.getMusicInfo(musicId)
    //判断当前音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){
      this.setData({
        isPlay:true
      })
    }

    //系统控制操作播放/暂停
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.onPlay(()=>{
      this.changePlayState(true)
      appInstance.globalData.musicId = musicId
    });
    this.backgroundAudioManager.onPause(()=>{
      this.changePlayState(false)
    });
    this.backgroundAudioManager.onStop(()=>{
      this.changePlayState(false)
    });
    //监听音乐播放自然结束
    this.backgroundAudioManager.onEnded(()=>{
      //自动播放下一首音乐
      PubSub.publish('switchType','next')
      //进度条改变
      this.setData({
        currentWidth:0,
        currentTime:'00:00'
      })
    })
    //监听音乐实时播放的进度
    this.backgroundAudioManager.onTimeUpdate(()=>{
      //格式化实时时间
      let currentTime = moment(this.backgroundAudioManager.currentTime * 1000).format('mm:ss')
      let currentWidth = this.backgroundAudioManager.currentTime/this.backgroundAudioManager.duration * 100;
      this.setData({
        currentTime,
        currentWidth
      })
    })
  },
  changePlayState(isPlay){
    this.setData({
      isPlay
    })
    appInstance.globalData.isMusicPlay = isPlay;
  },
  //获取音乐详情
  async getMusicInfo(musicId){
    let songData = await request('/song/detail',{ids:musicId})
    let durationTime = moment(songData.songs[0].dt).format('mm:ss')    
    this.setData({
      song:songData.songs[0],
      durationTime
    })

    //动态修改音乐标题
    wx.setNavigationBarTitle({
      title: this.data.song.name,
    })
  },
  //点击播放/暂停的回调
  handleMusicPlay(){
    let isPlay = !this.data.isPlay;
    let {musicId, musicLink} = this.data;
    // this.setData({
    //   isPlay
    // })
    this.musicControl(isPlay,musicId,musicLink)
  },
  //控制音乐播放/暂停的功能函数
  async musicControl(isplay,musicId,musicLink){   
    if(isplay){ 
      //获取音乐播放链接
      if(!musicLink){
        let musicLinkData = await request('/song/url',{id:musicId})
        musicLink = musicLinkData.data[0].url

        this.setData({
          musicLink
        })
      }
      
      this.backgroundAudioManager.src = musicLink
      this.backgroundAudioManager.title = this.data.song.name
    }else{
      this.backgroundAudioManager.pause()
    }
  },
  handleSwitch(event){
    let type = event.currentTarget.dataset.type;
    //关闭当前播放的音乐
    this.backgroundAudioManager.stop();
    //接收订阅消息
    PubSub.subscribe('musicId',(msg,musicId)=>{
      console.log(msg,musicId)
      //获取音乐详情
      this.getMusicInfo(musicId)
      //自动播放音乐
      this.musicControl(true,musicId)
      PubSub.unsubscribe('musicId')
    })
    //发布订阅
    PubSub.publish('switchType',type)
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