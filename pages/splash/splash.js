// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示   
   */
  // 	wx.navigateTo : 打开新页面(保留当前页面) 。只能打开非 tabBar 页面
  // wx.redirectTo ：页面重定向(关闭当前页面) 。 只能打开非 tabBar 页面
  // wx.navigateBack ：页面返回
  // wx.switchTab ：Tab切换，只能打开 tabBar 页面
  // wx.reLaunch ：重启动，可以打开任意页面。

  onShow: function() {

    setTimeout(function() {
      // wx.reLaunch({
      //   url: '../tab-bar/tab-bar'
      // })

			wx.reLaunch({
			 	//url: '../swiper/swiper'
				 url: '../index/index'
			 })
			
			// wx.redirectTo({//目标页面不包含 返回键
      //  url: '../swiper/swiper',
      //  })

			// wx.navigateTo({//目标页面包含 返回键
			// 	url: '../swiper/swiper',
			// })
    }, 1000)

  },

  goNextPage(event) {
    wx.redirectTo({
      url: '../swiper/swiper',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
		console.log("splash onUnload")

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})