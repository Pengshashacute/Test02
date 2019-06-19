$(function () {
//     初始动画(ok)
     setTimeout(function () {
         $(".index_nullBlock").stop().animate({width:0},1000,function () {
             $(this).css({display:"none"})
         });
         $(".index_nullBlockB").stop().animate({width:0},1000,function () {
             $(this).css({display:"none"})
         })
     },500);
//主页面轮播
    var mySwiper = new Swiper('.swiper-container',{
        mousewheel:true,
        autoplay:{
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets:true,
        },
    });
//    nav导航栏点击事件
    $(".nav_center ul li:not(:eq(0))").on("click",function () {
       $(this).addClass("current").siblings().removeClass("current");
    });
//    json
    $.ajax({
        type:"get",
        url:"Home.json",
        cache:true,
        success:function (data) {
            var $sidebar_img = data.sidebar_img;
            $.each(data.Nav_img.img,function (i3,t3) {
                var $li= $("<li></li>").appendTo(".Foot ul");
                console.log(t3);
                var $a = $("<a href="+data.Nav_img.href[i3]+"></a>").appendTo($li);
                $("<img/>").attr("src",t3).appendTo($a)
            });
            $.each($sidebar_img,function (i,t) {
                var $a = $("<a href='#'></a>");
                var img = $("<img>").attr("src",t);
                var $li = $("<li></li>");
                $(".Brand_store ul").append($li.append($a.append(img)));
            });

        }
    });
    //    nav导航栏底部隔墙
    var $div = $("<div></div>");
    $(".Foot ul").after($div.addClass("clear"));
//        侧边栏底部背景
    var $list = $(".ablock_list");
        $list.eq(0).css({background:"#7dc9eb",width:"100%"});
        $list.eq(1).css({background:"#f59565",width:"100%"});
        $list.eq(2).css({background:"#878ad1",width:"100%"});
        $list.eq(3).css({background:"#84cbc5",width:"100%"});
        $list.eq(4).css({background:"#975a7b",width:"100%"});
//      侧边栏动画
    setTimeout(function () {
        intoAnim();
    },1500);
    function intoAnim(){
                $(".index_rightContent").stop().animate({right:-332},1000,);
                $(".index_content").stop().animate({left:0},1000,);
                $(".index_bgColor").stop(true,true).fadeOut(1000);
            }
            function showRight(){
                $(".index_rightContent").stop(true).animate({right:0},"easeOutBounce");
                $(".index_content").stop().animate({left:-332},"easeOutBounce");
                $(".index_bgColor").stop(true,true).fadeIn();
            }
            function hideRight(){
                $(".index_rightContent").stop(true).animate({right:-332},"easeOutBounce");
                $(".index_content").stop().animate({left:0},"easeOutBounce");
                $(".index_bgColor").stop(true,true).fadeOut();
            }
            $(".index_rightButton").on("mouseenter",function(){
                showRight();
            });
            $(".index_rightContent").on("mouseleave",function(){
                hideRight();
            });
            var WinH = $(window).height();
            if(WinH > 1080){
                $(".nav_LiteImg").css({"display":"block"})
            }else{
                $(".nav_LiteImg").css({"display":"none"})
            }

});