// pages/zanui-test/zanui-test.js

// 微信小程序前端UI - zanUI的使用总结
// https://blog.csdn.net/sinat_30690685/article/details/88391952?depth_1.utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task




const { Field,Switch,extend } = require('../../zanui/dist/index');
var Taost = require("../../zanui/dist/toast/index")

Page(extend({}, Field, Switch, Taost,
 {
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
    ],
    capsuleData:{
      type:"danger",
      color:"#38f" ,
      leftText:"1折扣" ,
      rightText:"限购一份"
    },

    steps: [
      {
        // 此步骤是否当前完成状态
        current: false,
        // 此步骤是否已经完成
        done: true,
        // 此步骤显示文案
        text: '步骤一',
        // 此步骤描述语
        desc: '10.01'
      },
      {
        done: true,
        current: false,
        text: '步骤二',
        desc: '10.02'
      },
      {
        done: true,
        current: true,
        text: '步骤三',
        desc: '10.03'
      }
    ],
    stepperData:{
      type:"horizon",//vertical
      hasDesc:true,
      stepper:2,
      min:1,
      max:10,
      
      
    }
   
  },
   _handleZanStepperMinus(){
      var that = this;
      this.setData({
        stepperData: {
       
          stepper: that.data.stepperData.stepper,
        
        }
      })
   },
   _handleZanStepperPlus (){
     var that = this;
     this.setData({
       stepperData: {

         stepper: ++that.data.stepperData.stepper,

       }
     })
   },
   
  onLoad: function () {
    //his.data.stepperData.steps = this.data.steps;

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
   showToast() {
     this.showZanToast('toast的内容');
   }

  
}))