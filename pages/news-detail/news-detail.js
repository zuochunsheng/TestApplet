// 引用js 
var newsData = require("../data/newsdata.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

    newsId: "",
		userData: {},
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取传入的值
    //console.log(options);
    //console.log(options.newsId);
    //该对象的值
    //console.log(newsData.initData[options.newsId]);
    //this.setData(newsData.initData[options.newsId]);
    this.setData({
      newsId: options.newsId,
      userData: newsData.initData[options.newsId]
    })

    // 第一次进入时 判断是否存在本地存储以及是否收藏
    var newsCollect = wx.getStorageSync('newsCollect');
    console.log("第一次进入时判断是否存在本地存储");
    console.log(newCollect);
    // 如果newsCollect存在,则代表以前收藏过或者是以前取消过收藏
    if (newsCollect) {
      var newCollect = newsCollect[options.newsId];
      console.log("如果newsCollect存在,则代表以前收藏过或者是以前取消过收藏");
      console.log(newCollect);
      //注意这里
      if (!newCollect) {
        // 更新ui
        this.setData({
          collected: false
        })
      } else {
        // 更新ui
        this.setData({
          collected: newCollect
        })
      }

    } else {
      // 第一次进入，根本不存在数据
      var newsCollect = {};
      // 我把当前唯一id扔到newsCollect对象中，然后默认指定false
      newsCollect[options.newsId] = false;
      // 扔到本地存储中
      wx.setStorageSync('newsCollect', newsCollect);

    }

  },

  collectTap(event) {
    // 获取所有(注意，这是所有数据的集合)
    var newsCollect = wx.getStorageSync('newsCollect');
    console.log("获取所有值");
    console.log(newCollect);
    //console.log(this.data.newsId);
    // 获取单个(请求到onLoad里面不同生命周期的options.newsId)
    var newCollect = newsCollect[this.data.newsId];
    console.log("值:" + newCollect);
    // 点击时收藏则为不收藏，不收藏则为收藏
    newCollect = !newCollect;

    // 更新到本地存储中
    newsCollect[this.data.newsId] = newCollect;
    wx.setStorageSync('newsCollect', newsCollect);

    // 改变视图
    this.setData({
      collected: newsCollect[this.data.newsId]
    });

    //icon: 'success', 'loading', 'none'
    var isStar = '../../images/star_s.png';
    var noStar = '../../images/star.png';
    wx.showToast({
      title: newsCollect[this.data.newsId] ? "取消收藏" : "收藏成功！",
      icon: 'success',
      image: newsCollect[this.data.newsId] ? noStar : isStar,
      duration: 800,
      mask: true
    });
  },

  showModal: function(event) {
    //  wx.showToast({
    // 	 title: 'wo toast a missitos',
    //  })

    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  showActionSheet(event) {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  showLoading(event) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function() {
      wx.hideLoading()
    }, 2000)


  },
  hideLoading(event) {
    wx.hideLoading();
  },

  startPay: function() {
    //_this = this;
    // 1.2版本以后推荐的
    //const backgroundAudioManager = wx.getBackgroundAudioManager()

    // if (backgroundAudioManager.paused == false) {
    //   wx.pauseBackgroundAudio();
    // } else {
    //   backgroundAudioManager.title = newsData.initData[_this.data.newsId].title
    // 	backgroundAudioManager.epname = newsData.initData[_this.data.newsId].articleText
    //   backgroundAudioManager.singer = '林俊杰'
    //   backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    //   backgroundAudioManager.src = newsData.initData[_this.data.newsid].music.url // 设置了 src 之后会自动播放
    // }

  },
  onShareAppMessage() {
    return {
			title: this.data.userData.title,
      path: 'pages/news-detail/news-detail'
    }
  }

})