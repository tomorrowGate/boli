/**
 * 打开加载层
 */
function showLoading(msg) {
	return layer.open({
	    type: 2,
	    shadeClose: false,
	    content: msg
	  });
}

/**
 * 关闭加载层
 */
function closeLoading(index) {
	try {
		setTimeout(function(){
			layer.close(index);
		},600);
	} catch (e) {
		return false;
	}
	return true;
}

/**
 * 消息提示框
 */
function MyAlert(msg) {
	layer.open({
		  content: msg,
		  btn: '确定',
		  shadeClose: false,
		  yes: function(index) {
			  layer.close(index);
		  }
	});
}

/**
 * Toast提示
 */
function MyToast(msg) {
	//提示
	layer.open({
		content: msg,
		skin: 'msg',
		time: 2 //2秒后自动关闭
	});
	  
}


/**
 * confrim提示框
 * @param msg
 * @param callback	回调函数
 */
function MyConfirm(msg, okCallback) {
	layer.open({
		content: msg,			//内容
		btn: ['确定','取消'],		//按钮
		shadeClose: false,		//点击遮罩层不关闭层
		yes: function(index) {	//点击确定按钮的回调
			if(typeof okCallback === "function") {
				okCallback();
				layer.close(index);
			}
		}
	});
}

function AskDialog(msg,okCallback,noCallback) {
	 //询问框
	  layer.open({
	    content: msg
	    ,btn: ['确定', '取消'],
	    shadeClose: false		//点击遮罩层不关闭层
	    ,yes: function(index){
	    	if(typeof okCallback === "function") {
	    		okCallback();
	    		layer.close(index);
			}
	    }
	    ,no: function(index){
	    	if(typeof noCallback === "function") {
	    		noCallback();
	    		layer.close(index);
			}
	    }
	  });
	  
}