$(function(){

    //header menu--------------------------------------------------------
    $('header nav ul.all > li').hover(function(){
        $('ul.sub').stop().slideDown();
    }, function(){
        $('ul.sub').stop().slideUp();
    });
    
    
    //slide---------------------------------------------------------------
    $(".slideimg ul.slide_all>li").eq(0).siblings().hide();

    var num=0;

    setInterval(function(){
        if(num<2){
            num++;
        }else {
            num=0;
        }
        $(".slideimg ul.slide_all>li").eq(num).siblings().fadeOut();
        $(".slideimg ul.slide_all>li").eq(num).fadeIn();
    },3000);
    
    //tab-----------------------------------------------------------------
    $(".contents .notice_gal h3").click(function(){
        $(".contents .notice_gal h3").removeClass("on");

        $(this).addClass("on");
        $(".contents .notice_gal ul").removeClass("on");
        $(this).next("ul").addClass("on");
    });
    
    //popUpBox---------------------------------------------------------

    $("button").click(function(){
        $(".popUpBox").fadeOut();
    })
    
    })