$(function () {
    $.ajax({
        type:"get",
        url:"Home.json",
        cache:true,
        success:function (data) {
            $.each(data.Nav_img.img,function (i3,t3) {
                var $li= $("<li></li>").appendTo(".Foot ul");
                var $a = $("<a href="+data.Nav_img.href[i3]+"></a>").appendTo($li);
                $("<img/>").attr("src",t3).appendTo($a)
            });
            $("<div class='clear'></div>").appendTo(".Foot ul");
        }
    });
    $(".nav_left ul li").on("click",function () {
        $(this).addClass("current").siblings().removeClass("current");
        var $index = $(this).index();
        $(".card_ablock").eq($index).show().siblings().hide();


    });
    $(window).on("load",function(){
        $(".card_ablock").mCustomScrollbar({
            axis:"yx",
            scrollButtons:{enable:true},
            theme: "minimal-dark",
            scrollbarPosition:"outside",
            setWidth:false,
            setHeight:false,
        });
    });
});

