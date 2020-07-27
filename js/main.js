$(document).ready(function(){
    $(".lnbWrap").hide();
    $(".gnb li").hover(function(){
        $(".lnbWrap").slideDown();
    },function(){
        $(".lnbWrap").slideUp();
    });
    
    $(".panel_bg").hide();
    $(".mPanel").click(function(){
        $(".panel_bg").fadeIn();
        $(".panel_menu").css("width","70%");
    });
    $(".x_btn").click(function(){
        $(".panel_bg").fadeOut();
        $(".panel_menu").css("width","0%");
    })
})