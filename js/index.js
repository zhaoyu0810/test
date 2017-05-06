$(function () {
    $(".header").children("ul").eq(0).removeAttr("id");
    $(window).scroll(function () {
        var scr = $(window).scrollTop();
        console.log(scr);
        if (scr>120) {
            $(".header").children("ul").eq(0).attr('id', "header-top");
        }
        if (scr<120) {
            $(".header").children("ul").eq(0).removeAttr("id");
        }
    });
    /*轮播图*/
    var x=0;
    var n=1;
    var time=null;
    var t=true;
    $(".con").scrollLeft($(".con img").width());
    /*自动走*/
    function auto(){
        clearInterval(time);
        time=setInterval(function (){
            x++;
            if (x>=$(".list li").length){
                x=0;
            }
            n++;
            if (n>=$(".con img").length){
                n=2;
                $(".con").scrollLeft($(".con img").width())
            }
            move();
        },3000)
    }
    function move(){
        $(".con").stop().animate({scrollLeft:$(".con img").width()*n},1200,function (){
            t=true;
        });
        $(".list li").eq(x).addClass("select").siblings().removeClass("select");
    }
    auto();
    /*左点击切换*/
    $(".left").click(function (){
        if (t){
            t=false;
            clearInterval(time);
            x--;
            if (x<0){
                x=$(".list li").length-1;
            }
            n--;
            if (n<0){
                n=$(".con img").length-3;
                $(".con").scrollLeft($(".con img").width()*(n+1));
            }
            move();
            auto();
        }
    });
    /*右点击切换*/
    $(".right").click(function (){
        if (t){
            t=false;
            clearInterval(time);
            x++;
            if (x>=$(".list li").length){
                x=0;
            }
            n++;
            if (n>=$(".con img").length){
                n=2;
                $(".con").scrollLeft($(".con img").width())
            }
            move();
            auto();
        }
    });
    $(".list li").click(function (){
        if (t){
            t=false;
            clearInterval(time);
            var i=$(this).index(".list li");
            x=i;
            n=i+1;
            move();
            auto();
        }
    })
});
