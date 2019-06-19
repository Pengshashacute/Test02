$(function () {
    $.ajax({
      type:"get",
      url:"Home.json",
      cache:true,
      success:function (data) {
          $.each(data.Hot_activity,function (i1,t1) {
               var $div01 = $("<div class='Hot_active'></div>").appendTo(".web_active");
               var $div02 = $("<div class='Hot_block'></div>").appendTo($div01);
               var $ul = $("<ul></ul>").appendTo($div02);
              $.each(t1,function (i2,t2){
                  var $li = $("<li></li>").appendTo($ul);
                  var $a = $("<a href="+ t2.href +"></a>").appendTo($li);
                  var Hot_img = $("<div class='Hot_img'></div>").appendTo($a);
                  var Hot_text = $("<div class='Hot_text'></div>").appendTo($a);
                  $("<img/>").attr("src",t2.images).appendTo(Hot_img);
                  var hot_name = $("<div class='hot_name'></div>").appendTo(Hot_text);
                  $("<p></p>").html(t2.p).appendTo(hot_name);
                  var date_day = $("<div class='date_day'></div>").appendTo(Hot_text);
                  var $a2 = $("<a href="+t2.href+"></a>").appendTo(date_day);
                  $("<span></span>").html(t2.span).appendTo(date_day);
                  $("<em></em>").html(t2.emTT).appendTo($a2);
                  $("<div class='clear'></div>").appendTo(date_day);
              })
          });
          $.each(data.Nav_img.img,function (i3,t3) {
              var $li= $("<li></li>").appendTo(".Foot ul");
              var $a = $("<a href="+data.Nav_img.href[i3]+"></a>").appendTo($li);
                  $("<img/>").attr("src",t3).appendTo($a);
          });
                  $("<div class='clear'></div>").appendTo(".Foot ul")
      }
    });
    var index = 0;
    $(".Arrow_1").on("click",function () {
        index++;
        if(index>7){
            index=1;
            $(".web_active").css({left:0})
        }
        $(".web_active").stop().animate({left:-(1132+90)*index})
    });
    $(".Arrow_2").on("click",function () {
        index--;
        if(index<0){
            index=0
        }
        $(".web_active").stop().animate({left:-(1132+90)*index})
    })
});


