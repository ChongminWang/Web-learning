// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    cookie:'',
    qrimg:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleInput(event){
    // let type = event.currentTarget.id// id传值
    let type = event.currentTarget.dataset.type //data-key=value 传值
    // console.log(type,event.detail.value)
    this.setData({
      [type]:event.detail.value,

    })
  },
  async login(){
    let {phone,password} = this.data
    // 前端验证
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon:'error'
      })
      return
    }
    let phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/

    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式不正确',
        icon:'error'
      })
      return
    }
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon:'error'
      })
      return
    }
    // 后端验证
    let result = await request('/login/cellphone',{phone,password})
    if(result.code ===200){
      wx.showToast({
        title: '登录成功',
      })
    }else if(result.code === 400){
      wx.showToast({
        title: '手机号不存在，请注册',
        icon:'error'
      })
    }else if(result.code===502){
      wx.showToast({
        title: '密码错误',
        icon:'error'
      })
    }else{
      wx.showToast({
        title: '登录失败，请重新登录',
        icon:'error'
      })
    }
  },
  //检查状态码
  async checkStatus(key) {
    const res = await request(
       `/login/qr/check?key=${key}&timestamp=${Date.now()}`
    )
    console.log('checkStatus:',JSON.stringify(res,null,2))
    // this.setData({
    //   cookie:JSON.stringify(res,null,2)
    // })
    return JSON.stringify(res,null,2)
  },
  //获取登录状态
  // async getLoginStatus(cookie = '') {
  //   const res = await request(
  //      `/login/status?timestamp=${Date.now()}`,
  //      {cookie},'POST'
  //   )
  //   let cookieData = JSON.stringify(res.data,null,2)
  //   this.setData({
  //     cookie:cookieData
  //   })
  // },
  async login2(){
    //二维码登录
    let timer
    let timestamp = Date.now()
    let cookie = wx.getStorageSync('cookie')
    console.log('cookie:',cookie)
    // this.getLoginStatus(cookie)
    //获取key
    const res = await request(
      `/login/qr/key?timestamp=${Date.now()}`,
    )
    const key = res.data.unikey
    //获取二维码
    const res2 = await request(
      `/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`
    )
    this.setData({
      qrimg:res2.data.qrimg
    })
    timer = setInterval(async () => {
      const statusRes = await this.checkStatus(key)
      if (statusRes.code === 800) {
        wx.showToast({
          title: '二维码过期',
        }),
        clearInterval(timer)
      }
      if (statusRes.code === 803) {
        // 这一步会返回cookie  
        wx.showToast({
          title: '授权登录成功',
        }),
        clearInterval(timer)
        // await this.getLoginStatus(statusRes.cookie)
        wx.setStorage({
          key:'cookie',
          data:statusRes.cookie,
          success(){
            wx.getStorage({
              key:'cookie',
              success(res){
                console.log(res.data)
              }
            })
          }
        })
        wx.reLaunch({
          url: '/pages/personal/personal',
        })
      }
    }, 3000)
  },
  //二维码登录最终
  loginerweima(){
    this.login2()
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