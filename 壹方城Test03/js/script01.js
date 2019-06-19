$(function () {
    //json
    $.ajax({
        type:"get",
        url:"Home.json",
        cache:true,
        success:function (data) {
            var $floor_img = data.Children_img01;
            var $froll_content01 = data.Froll_content01;
            var $froll_content02 = data.Froll_content02;
            var $froll_content03 = data.Froll_content03;
            $.each(data.Nav_img.img,function (i3,t3) {
                var $li= $("<li></li>").appendTo(".Foot ul");
                console.log(t3);
                var $a = $("<a href="+data.Nav_img.href[i3]+"></a>").appendTo($li);
                $("<img/>").attr("src",t3).appendTo($a)
            });
                $("<div class='clear'></div>").appendTo(".Foot ul");
            $.each($floor_img,function (i,t) {
                var img = $("<img>").attr("src",t);
                var $li = $("<li></li>");
                $(".floor_img ul").append($li.append(img))
            });
            $.each($froll_content01,function (i,t) {
                var $a = $("<a href='#'>"+t+"</a>");
                var $li = $("<li></li>");
                $(".cent01 ul").append($li.append($a))
            })
            $.each($froll_content02,function (i,t) {
                var $a = $("<a href='#'>"+t+"</a>");
                var $li = $("<li></li>");
                $(".cent02 ul").append($li.append($a))
            })
            $.each($froll_content03,function (i,t) {
                var $a = $("<a href='#'>"+t+"</a>");
                var $li = $("<li></li>");
                $(".cent03 ul").append($li.append($a))
            })
        }
    });
    //    nav导航栏底部隔墙
    var $div = $("<div></div>");
    $(".Foot ul").after($div.addClass("clear"));
    //主体移动轮
    $(".floor_left ul li").on("mouseenter",function () {
        var index_Img=$(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".floor_img ul").stop().animate({left:index_Img*-860},)
    })
});





