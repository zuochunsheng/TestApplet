// pages/tab-bar2/tab-bar2.js

var P = require("../../lib/wxpage.js");

//监听页面
P("tab-bar2",{
	data:{
		 value :'abc',
		 munub : 123
	},
	onLoad:function(event){
		console.log("bar-bars onLoad")
	
	},

	onPreload:function(event){
			this.$preLoad("../index/index")
	}

})