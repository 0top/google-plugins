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

});
