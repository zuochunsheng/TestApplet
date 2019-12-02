/**
 * 数据名必须为:lazyData或其它名(与数据以及页面相同)
 *
 * 模拟数据：lazyData
 * 传输数据：_that,data(this,lazyData,lazy_name,loading_icon)
 */
const lazyImg = (_that, data, lazy_name, loading_icon) => {
  for (let i = 0, len = data.length; i < len; i++) {
    wx.createIntersectionObserver().relativeToViewport({
      bottom: 20
    }).observe('.item-' + i, (ret) => {
      ret.intersectionRatio > 0 ? data[i].show = true : '';
      _that.setData({
        [lazy_name]: data,
        loadIcon: loading_icon
      })
    })
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lazyData: [{
        src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1wnBTKFXXXXcQXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg",

      },
      {
        src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg",

      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     * this - 当前对象
     * this.data.lazyData - 数据源
     * lazy_name - 数据名
     * 加载图标 - https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif
     */
    lazyImg(this, this.data.lazyData, 'lazyData', 'https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif')


  },




})