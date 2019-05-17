$(function(){
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	function resize(){
		wWidth = $(window).width();
		wHeight = $(window).height();
		$(".common_content").css({"width":wWidth-170});
	}

	function showNav(){
		$(".nav_content").stop().animate({left:0},"easeOutBounce");
		$(".nav_imgBlock").stop().animate({left:0},"easeOutBounce");
		$(".common_content").stop().animate({paddingLeft:0},"easeOutBounce");
		$(".nav_icon").stop(true,true).fadeOut();
	}
	function hideNav(){
		$(".nav_content").stop().animate({left:-130},"easeOutBounce");
		$(".nav_imgBlock").stop().animate({left:-40},"easeOutBounce");
		$(".common_content").stop().animate({paddingLeft:40},"easeOutBounce");
		$(".nav_icon").stop(true,true).fadeOut();
	}
	// $(".nav_content").on("mouseenter",function(){
	// 	showNav();
	// })
	// $(".nav_content").on("mouseleave",function(){
	// 	hideNav();
	// })
	resize();
	$(window).resize(function(){
		resize();
	})

})