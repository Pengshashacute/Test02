$(function () {
    //json
    $.ajax({
        type:"get",
        url:"Home.json",
        cache:true,
        success:function (data) {
            var $Nav_Img = data.Nav_img;
            var $floor_img = data.Children_img01;
            var $froll_content01 = data.Froll_content01;
            var $froll_content02 = data.Froll_content02;
            var $froll_content03 = data.Froll_content03;
            $.each($Nav_Img,function (i,t) {
                var $a = $("<a href='#'></a>");
                var img = $("<img>").attr("src",t);
                var $li = $("<li></li>");
                $(".Foot ul").append($li.append($a.append(img)))
            });
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








// $(function() {
//     $.ajax({
//         url: "../Ajax/AjaxCommon.aspx?action=LcList",
//         type: "GET",
//         async: true,
//         data: {},
//         dataType: "text",
//         // contentType: "charset=utf-8",
//         cache: false,
//         success: function(data, textStatus) {
//             var obj = eval("(" + data + ")");
//             $(".floor_left ul").html(obj.Msg);
//             $(".floor_img ul").html(obj.Url);
//
//             var dataX = 0,
//                 dataY = 0,
//                 dataW = 0,
//                 dataH = 0,
//                 dataImg = "",
//                 dataName = "",
//                 lisStyle = '',
//                 dataLocation = "";
//             var floorId = getQueryString("floorId");
//             floorId = floorId == null ? "0" : floorId;
//             $(".floor_left ul li").eq(floorId).addClass("current");
//             var thisFloor = function() {
//                 var maxSize = $(".floor_img ul li").length;
//                 var marginValue = -860 * floorId;
//                 $(".floor_img ul").stop().animate({ marginLeft: marginValue });
//                 $(".floor_left ul li").eq(floorId).addClass("current").siblings().removeClass("current");
//             }
//             // 楼层点击
//             $(".floor_left ul li").bind("mouseover", function() {
//                 $(".plot_bg").css({ "display": "none" });
//                 floorId = $(this).index();
//                 thisFloor();
//             });
//
//             var showFloor = function(_node) {
//                 floorId = _node.attr("data-floor");
//                 dataX = parseInt(_node.attr("data-x"));
//                 dataY = parseInt(_node.attr("data-y"));
//                 dataW = parseInt(_node.attr("data-w"));
//                 dataH = parseInt(_node.attr("data-h"));
//                 dataImg = _node.attr("data-img");
//                 dataName = _node.attr("data-name");
//                 lisStyle = _node.attr("data-Style"),
//                     dataLocation = _node.attr("data-location");
//                 dataId = _node.attr("data-id");
//                 $(".plot_bg").stop(true, true).fadeIn();
//                 thisFloor();
//                 $(".log_plot").css({ "top": dataY, "left": dataX });
//                 $(".plot_img img").attr({ "src": dataImg });
//                 $(".plot_bg h4").text(dataName);
//                 $(".Liststyle").text(lisStyle);
//                 $(".plot_load .location").text(dataLocation);
//                 $(".plot_bg").attr({ "href": "BrandLine/inner.aspx?id=" + dataId + "&floorid=" + floorId + "&flag=A" });
//             }
//             $(".froll_cent a,.floorImg_block").bind("mouseover", function() {
//                 showFloor($(this));
//             })
//             $(".floor_right,.plot_bg").bind("mouseleave", function() {
//                 $(".plot_bg").stop(true, true).fadeOut();
//             })
//             $(".floor_clabrand").mCustomScrollbar();
//             $(".froll_title a").toggle(function() {
//                 $(this).text("返回");
//                 $(this).parents(".floor_btop").siblings().css({ "display": "none" });
//                 var blockHeight = $(this).parents(".floor_btop").find("a").length / 2 * 28;
//                 $(this).parents(".floor_btop").find(".froll_cent").stop().animate({ height: blockHeight }, function() {
//                     $(".floor_clabrand").mCustomScrollbar();
//                 });
//             }, function() {
//                 $(this).text("更多");
//                 $(".floor_btop").siblings().css({ "display": "block" });
//                 $(".froll_cent").stop().animate({ height: 112 }, function() {
//                     $(".floor_clabrand").mCustomScrollbar();
//                 });
//             })
//         }
//     });




