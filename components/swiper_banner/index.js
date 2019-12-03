Component({
	properties: {
		imgList: {
			type: Array,
			value: [],
			observer: function (newVal, oldVal) {
				this.setData({
					imgList: newVal
				})
			}
		},
		url: {
			type: String,
			value: ''
		},
		Height: {
			type: String,
			value: ''
		},
		Width: {
			type: String,
			value: ''
		}
	}
})