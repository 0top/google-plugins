$(document).ready(function (){
	console.log("我是一个没有感情的杀手");
	var addr = window.location.href;
	
	if(addr.indexOf("blog.csdn.net") > 0){
		
		//delete element
		$("aside").remove();

		//delete by id
		$("#adAways").remove();
		$("#_360_interactive").remove();

		// $("body").removeClass("box-box-large");
		// $("body").removeClass("box-box-aways");
		// $("body").removeClass("box-box-default");
		// $("body").removeClass("#pulllog-box");

		//delete class
		$(".recommend-right").hide();
		$(".box-box-large").hide();
		$(".box-box-aways").remove();
		$(".box-box-default").empty();
		$(".pulllog-box").remove();
		
	}

	if(addr.indexOf("bbs.csdn.net") > 0) {

		$("#ad_pop").remove();
		$(".pulllog-box").remove();
		$(".mediav_ad").remove();
	}

	if (addr.indexOf("www.dytt8.net") > 0) {
		$("#cs_ap_8040").remove();                         // 页面刷新广告

		$("#headerright").remove();
		$(".bd4l").contents().remove();
		$("#cs_DIV_cscpvrich5041B").remove();
	}

});
