Component({
	options: {
		multipleSlots: true  // 在组件定义时的选项中启用多slot支持
	},
  /**
   * 组件的属性列表
   */
	properties: {

		// 弹窗内容
		content: {
			type: String,
			value: '内容'
		},


	},

  /**
   * 组件的初始数据
   */
	data: {
		flag: true,
		time: '获取验证码', //倒计时 
		currentTime: 60, //60秒
		interval: null //倒计时函数//

	},

  /**
   * 组件的方法列表
   */
	methods: {
		//隐藏弹框
		hidePopup: function () {
			this.setData({
				flag: !this.data.flag
			})
		},
		//展示弹框
		showPopup:function() {
			this.setData({
				flag: !this.data.flag
			})
		},
		// 启动发送验证码倒计时的计时器
		getCode: function (options) {
			var that = this;
			var currentTime = that.data.currentTime
			this.data.interval = setInterval(function () {
				currentTime--;
				that.setData({
					time: currentTime + '秒'
				})
				if (currentTime <= 0) {
					clearInterval(that.data.interval)
					that.setData({
						time: '重新发送',
						currentTime: 60,
						disabled: false
					})
				}
			}, 1000)
		},
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
		_error() {
			//触发取消回调
			this.triggerEvent("error")
		},
		_success(e) {

			var code = e.detail.value.code;
			if (code.length == 0) {
				wx.showToast({
					title: '请先填写验证码！',
					icon: 'none',
					duration: 2000
				})
				return;
			}
			let detail = {
				code,

			};
			let option = {};
			//触发成功回调
			this.triggerEvent("success", detail, option);


		},

		_bindGetCode: function () {

			this.getCode();
			this.setData({
				disabled: true
			})
			this.triggerEvent("sendcode");

		}
	}
})