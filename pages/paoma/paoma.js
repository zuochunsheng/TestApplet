
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

		callGetPhone: '13761654037',
		banners: [
			{ "picUrl": "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" }, { "picUrl": "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg" }, { "picUrl": "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg" }
		],
		isPickerRender: false,
		isPickerShow: false,
		startTime: "2019-01-01 12:32:44",
		endTime: "2019-12-01 12:32:44",
		pickerConfig: {
			endDate: true, // 是否需要结束时间，为true时显示开始时间和结束时间两个picker
			column: "second",//可选的最小时间范围hour、minute、secend
			dateLimit: true, //是否现在时间可选范围，false时可选任意时间；未数字n时，范围是当前时间的最近n天
			initStartTime: "2019-01-01 12:32:44",//picker初始时间，默认当前时间
			initEndTime: "2019-12-01 12:32:44",//picker初始结束时间，默认当前时间
			limitStartTime: "2015-05-06 12:32:44",//最小可选时间
			limitEndTime: "2055-05-06 12:32:44"//最大可选时间 
		}
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
	},
	pickerShow: function () {
		this.setData({
			isPickerShow: true,
			isPickerRender: true,
			chartHide: true
		});
	},
	pickerHide: function () {
		this.setData({
			isPickerShow: false,
			chartHide: false
		});
	},

	bindPickerChange: function (e) {
		console.log("picker发送选择改变，携带值为", e.detail.value);
		console.log(this.data.sensorList);

		this.getData(this.data.sensorList[e.detail.value].id);
		// let startDate = util.formatTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 7));
		// let endDate = util.formatTime(new Date());
		this.setData({
			index: e.detail.value,
			sensorId: this.data.sensorList[e.detail.value].id
			// startDate,
			// endDate
		});
	},
	setPickerTime: function (val) {
		console.log(val);
		let data = val.detail;
		this.setData({
			startTime: data.startTime,
			endTime: data.endTime
		});
	}

})