// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrBase64:'',
    timer:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoginQR()
  },
  handleInput(event){
    // let type = event.currentTarget.id// id传值
    let type = event.currentTarget.dataset.type //data-key=value 传值
    // console.log(type,event.detail.value)
    this.setData({
      [type]:event.detail.value,

    })
  },
  async getLoginQR() {
    if (this.data.timer != null) {
        clearInterval(this.data.timer);
    }

    // 获取生成二维码的Key
    let qrKey = await request(`/login/qr/key?timerstamp=${Date.now()}`);
    if (qrKey.code == 200) {
        // 获取二维码的Base64
        let qrData = await request(`/login/qr/create?timerstamp=${Date.now()}`, {
            key: qrKey.data.unikey,
            qrimg: true
        });
        if (qrData.code == 200) {
            this.setData({
                qrBase64: qrData.data.qrimg
            });

            this.checkLoginState(qrKey.data.unikey);
            return;
        }
    }

    wx.showToast({
        title: '获取二维码失败',
        icon: 'none'
    });
  },
  async checkLoginState(key) {

    let timer = setInterval(async () => {

        // 方便跟新二维码的时候关闭定时器
        this.setData({
            timer
        });
        //查询二维码是否过期
        let QrState = await request(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`);
        // 打印二维码状态
        console.log(QrState);
        // 二维码过期
        if (QrState.code === 800) {
            // 更新二维码（跟新时会关闭当前定时器）
            this.getLoginQR();
            // 结束此次调用
            return;
        } else if (QrState.code === 803) { // 登录成功
            clearInterval(timer);
            // 将cookie存储至本地（同步）
            wx.setStorageSync('cookie', QrState.cookie);
            let res = await request(`/login/status?timerstamp=${Date.now()}`, {
                cookie: QrState.cookie
            }, 'post');
            // 打印登录成功后的数据
            console.log(res);
            // 将用户的信息存储至本地（同步）
            wx.setStorageSync('userInfo', JSON.stringify(res.data.profile));
            // 跳转至个人中心
            wx.reLaunch({
              url: '/pages/personal/personal',
            });
        }
    }, 3000);
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