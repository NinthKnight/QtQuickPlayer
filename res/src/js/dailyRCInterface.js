function dailyRCInterface(){
	//获取今日推荐歌曲信息
	this.getdrInfo = function(options){	
		var data = $.extend({
                "page_no":"",
                "page_num":""
			},options);
		var params = {
			"url":this.api + 'method=baidu.ting.song.userRecSongList',
			"data":data,
			"isNeedPassEncode":false
		};		
		return this.ajaxFun(params);
	}
}

dailyRCInterface.prototype = new UGC();