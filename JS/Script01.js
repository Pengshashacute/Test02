$(function () {
  //  动画开始
  setTimeout(function () {
     $(".open_L").stop().animate({width:0},1000,function () {
        $(this).css({display:"none"})
    });
     $(".open_R").stop().animate({width:0},1000,function () {
         $(this).css({display:"none"})
     })
},500);
    //content_Nav 主体轮播
    $.ajax({
        type:"get",
        url:"Home_page.json",
        async:false,
        success:function (data) {
            $.each(data.subject_img,function (i,t) {
                var new_Img = $("<img>").attr("src",t);
                var new_div = $("<div class='swiper-slide'></div>");
                $(".swiper-wrapper").append(new_div.append(new_Img))
             })
        }
    });
    //swiper—框架
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:{
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },// 是否循环
        speed:3000,//speed 切换速度
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },
    });
    //Footer 侧边栏动画
   setTimeout(function () {
       $(".C_show").stop().animate({width:0},1000,function () {
           $(this).css({display:"none"})
       })
   },3000);
       $(".C_sidebar_trigger").on("mouseenter",function () {
            $(".C_show").stop();
            $(".C_show").show().animate({width:20+"%"},1000,function () {
            $(this).css({display:"block"})
        })
   }).on("mouseleave",function () {
           $(".C_show").stop().animate({width:0},1000,function () {
               $(this).css({display:"none"})
           })
       })

    
    
    
    
    
    
    
    
    
    
    
});