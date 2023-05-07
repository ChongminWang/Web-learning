import config from './config'
export default (url, data = {}, method = 'GET') => {
  let cookie = wx.getStorageSync('cookie');

  if (cookie) {
    cookie = cookie.substring(cookie.indexOf('MUSIC_U'), cookie.length);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      header:{
        cookie
      },
      url: config.host + url,
      data,
      method,
      success: (res) => {
        // console.log('请求成功：',res)
        resolve(res.data)
      },
      fail: (err) => {
        // console.log("请求失败：",err)
        reject(err)
      }
    })
  })
}