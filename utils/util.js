//"GET" ,"POST"
function SEND(url, method, data, success, fail) {
	wx.request({
		url: url,
		header: {
			'content-type': 'application/json',
		},
		method: method,
		data: data,
		success(res) {
			success(res);
		},
		fail(res) {
			fail(res);
		}
	});
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


//上传方法
function upload_file_server(url, that, upload_picture_list, j) {
	//上传返回值
	const upload_task = wx.uploadFile({
		// 模拟https
		url: url, //需要用HTTPS，同时在微信公众平台后台添加服务器地址  
		filePath: upload_picture_list[j]['path'], //上传的文件本地地址    
		name: 'file',
		formData: {
			'num': j
		},
		//附近数据，这里为路径     
		success: function (res) {

			var data = JSON.parse(res.data);
			// //字符串转化为JSON  
			if (data.Success == true) {

				var filename = data.file //存储地址 显示

				upload_picture_list[j]['path_server'] = filename
			} else {
				upload_picture_list[j]['path_server'] = filename
			}
			that.setData({
				upload_picture_list: upload_picture_list
			});

			wx.setStorageSync('imgs', upload_picture_list);
		}
	})
	//上传 进度方法
	upload_task.onProgressUpdate((res) => {
		upload_picture_list[j]['upload_percent'] = res.progress
		that.setData({
			upload_picture_list: upload_picture_list
		});
	});
}



module.exports = {
  formatTime: formatTime,
	SEND : SEND,
	upload_file_server: upload_file_server
}
//module.exports.SEND = SEND;
