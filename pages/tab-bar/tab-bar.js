// var util = require("../../utils/util.js")
// var api = require("../../utils/api.js")
// 图片上传
var app = getApp().globalData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: '',
    upload_picture_list: []

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    app.util.SEND(app.api.url_getName, "GET", {

    }, res => {

    }, res => {

    })

  },

  //选择图片
  uploadpic(e) {
    var that = this //获取上下文
    var upload_picture_list = that.data.upload_picture_list
    //选择图片
    wx.chooseImage({
      count: 8,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempFiles = res.tempFiles
        //把选择的图片 添加到集合里
        for (var i in tempFiles) {
          tempFiles[i]['upload_percent'] = 0
          tempFiles[i]['path_server'] = ''
          upload_picture_list.push(tempFiles[i])
        }
        //显示
        that.setData({
          upload_picture_list: upload_picture_list,
        });
				console.log(upload_picture_list)
      }
    })

  },
	//点击上传事件
  uploadimage(e) {
    var page = this
    var upload_picture_list = page.data.upload_picture_list
    //循环把图片上传到服务器 并显示进度       
    for (var j in upload_picture_list) {
      if (upload_picture_list[j]['upload_percent'] == 0) {//调用函数
				app.util.upload_file_server(app.api.up_pic, page, upload_picture_list, j)
      }
    }

  },
	// 删除图片
  deleteImg: function (e) {
		let upload_picture_list = this.data.upload_picture_list;
		let index = e.currentTarget.dataset.index;
		upload_picture_list.splice(index, 1);
		this.setData({
			upload_picture_list: upload_picture_list
		});
	}

})