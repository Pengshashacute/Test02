$(function () {
//     初始动画(ok)
//      setTimeout(function () {
//          $(".index_nullBlock").stop().animate({width:0},1000,function () {
//              $(this).css({display:"none"})
//          });
//          $(".index_nullBlockB").stop().animate({width:0},1000,function () {
//              $(this).css({display:"none"})
//          })
//      },500);

//主页面轮播
    var mySwiper = new Swiper('.swiper-container',{
        mousewheel:true,
        autoplay:true,
        disableOnInteraction: false,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets:true,
        },
    });

//    json
    $.ajax({
        type:"get",
        url:"Home.json",
        cache:true,
        success:function (data) {
            var $data01 =  data.Nav_img;
            console.log($data01)
        }
    })



});