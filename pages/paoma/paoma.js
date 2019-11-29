
Page({
	data: {

    /**
     * 走马灯
     */
		text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
		marqueePace: .5, //滚动速度
		marqueeDistance: 0, //初始滚动距离
		marqueeDistance2: 0,
		marquee2copy_status: false,
		marquee2_margin: 60,
		size: 14,
		orientation: 'left', //滚动方向
		interval: 20, // 时间间隔

		callGetPhone: '13761654037'
	},
	onShow: function () {
		// 页面显示
		let _this = this;
		let length = _this.data.text.length * _this.data.size; //文字长度
		let windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
		_this.setData({
			length: length,
			windowWidth: windowWidth,
			marquee2_margin: length < windowWidth ? windowWidth - length :       _this.data.marquee2_margin //当文字长度小于屏幕长度时，需要增加补白
		});
		_this.run(); // 水平一行字滚动完了再按照原来的方向滚动
	},
	run: function () {
		let _this = this;
		let interval = setInterval(function () {
			if (-_this.data.marqueeDistance < _this.data.length) {
				_this.setData({
					marqueeDistance: _this.data.marqueeDistance - _this.data.marqueePace,
				});
			} else {
				clearInterval(interval);
				_this.setData({
					marqueeDistance: _this.data.windowWidth
				});
				_this.run();
			}
		}, _this.data.interval);
	},

	// 拨打电话给收件人
	callGetPhone(e) {
		// 号码
		let telPhone = e.currentTarget.dataset.getphone;
		this.callPhone(telPhone);
	},

  /**
   * 拨打电话 - 可简单封装工具集
   */
	callPhone(phoneNumber) {
		wx.makePhoneCall({
			phoneNumber: phoneNumber,
			success: function () {
				console.log("拨打电话成功！")
			},
			fail: function () {
				console.log("拨打电话失败！")
			}
		})
	}

})