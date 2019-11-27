
// 引用js 
var newsData = require("../data/newsdata.js");


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		indiatorDots :true,
		userData :""

	},



	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			useData: newsData.initData
		})
	},

	goNewsDetail: function (event) {
		console.log(event)
	
		//var newsId = event.target.dataset.newsid;
		var newsId = event.currentTarget.dataset.newsid;
		console.log(newsId)
		wx.navigateTo({
			//每一个页面都会有自己单独的详情页，通过绑定循环，来获取newsid 
			url: '../news-detail/news-detail?newsid=' + newsId,
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