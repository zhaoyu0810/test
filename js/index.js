/**
 * Created by FENG on 2017/4/30.
 */
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
    })
});
