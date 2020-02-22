// pages/zanui-test/zanui-test.js

// 微信小程序前端UI - zanUI的使用总结
// https://blog.csdn.net/sinat_30690685/article/details/88391952?depth_1.utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task




const {
  Field,
  Switch,
  extend
} = require('../../zanui/dist/index');

Page(extend({}, Field, Switch, {
  data: {
    name: {
      componentId: 'name',
      type: 'input',
      placeholder: '姓名'
    },
    mobile: {
      componentId: 'mobile',
      type: 'input',
      inputType: 'number',
      placeholder: '手机号码'
    },
    
    userName: '',
    tel: '',
    checked: true,

    icons: [
      'close',
      'location',
      'clock',
      'gold-coin',
      'chat',
      'exchange',
      'upgrade',
      'edit',
      'contact',
      'passed',
      'points',
      'delete',
      'records',
      'logistics',
      'check',
      'checked',
      'gift',
      'like-o',
      'like',
      'qr',
      'qr-invalid',
      'shop',
      'photograph',
      'add',
      'add2',
      'add-o',
      'photo',
      'cart',
      'arrow',
      'search',
      'clear',
      'success',
      'fail',
      'wechat',
      'alipay',
      'password-view',
      'wap-nav',
      'password-not-view',
      'wap-home',
      'ecard-pay',
      'balance-pay',
      'peer-pay',
      'credit-pay',
      'debit-pay',
      'other-pay',
      'shopping-cart',
      'browsing-history',
      'goods-collect',
      'shop-collect',
      'receive-gift',
      'send-gift',
      'setting',
      'coupon',
      'free-postage',
      'discount',
      'birthday-privilege',
      'member-day-privilege',
      'balance-details',
      'cash-back-record',
      'points-mall',
      'exchange-record',
      'pending-payment',
      'pending-orders',
      'pending-deliver',
      'pending-evaluate',
      'cash-on-deliver',
      'gift-card-pay',
      'underway',
      'point-gift',
      'after-sale',
      'edit-data',
      'question',
      'description',
      'card',
      'gift-card',
      'completed',
      'value-card',
      'certificate',
      'tosend',
      'sign',
      'home',
      'phone',
      'play',
      'pause',
      'stop',
      'hot',
      'new',
      'new-arrival',
      'hot-sale'
    ]
  },
  handleZanFieldChange(e) {
    if (e.componentId == 'name') {
      this.setData({
        userName: e.detail.value
      })
    }
    if (e.componentId == 'mobile') {
      this.setData({
        tel: e.detail.value
      })
    }
    // if (e.componentId == 'address') {
    //   this.setData({
    //     streetName: e.detail.value
    //   })
    // }
  },
  handleZanSwitchChange(e) {
    this.setData({
      checked: e.checked
    });
  },


  
}))