Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: 'http://www.runoob.com/try/demo_source/paris.jpg',
    progress: '',
    auth: false

  },

  downloadImage(event) {
    var _this = this
    // wx.authorize({
    //   scope: "scope.camera",
    //   success: function(e) {
    //     console.log("授权成功")
    // 		_this.downloadImg(event.currentTarget.dataset.src)
    //   },
    //   fail: function(e) {
    //     console.log("授权失败")
    //   }
    // })

		if (_this.data.auth) {
      _this.downloadImg(event.currentTarget.dataset.src)
    } else {
      wx.openSetting({
        success(res) {
          console.log(res.authSetting)
          //res.authSetting = {
          // "scope.userInfo": true,
          // "scope.userLocation": true,
          //	"scope.camera": true,
          //}
          if (res.authSetting['scope.camera']) { //已经授权
            console.log("设置授权成功")
            _this.setData({
              auth: true
            })
            _this.downloadImg(event.currentTarget.dataset.src)
          } else {
            console.log("设置授权失败")
            _this.setData({
              auth: false
            })
          }
        }
      })
    }
  },
  // 下载图片
  downloadImg: function(imagegUrl) {

    var _this = this;

    // 获取图片地址(http://www....)
    //var imagegUrl = e.currentTarget.dataset.src;

    // 下载监听进度
    const downloadTask = wx.downloadFile({
      url: imagegUrl,
      success: function(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res)
        if (res.statusCode === 200) {
          //保存相册
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function(res) {
              wx.showToast({
                title: '保存图片成功!~',
              });
            },
            fail: function(res) {
              wx.showToast({
                title: '保存图片失败!~',
              });
            }
          })
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '下载图片失败!~',
        });
      }
    });

    downloadTask.onProgressUpdate((res) => {
      if (res.progress === 100) {
        this.setData({
          progress: ''
        });
      } else {
        this.setData({
          progress: res.progress + '%'
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)

  },


})