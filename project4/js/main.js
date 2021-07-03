// main.js
$(function(){

    // 윈도우 시작하면 화면 맨위로 스크롤 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    // 브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container>div").height(ht);
    });

    var gnb = $("#gnb"),
        list = gnb.find("a");
        section = $("#container").find("section");
    // console.log(list)

    // 임시
    /*
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if(scroll >= 0 && scroll < 100){
            gnb.fadeOut();
        }
    });
    */

    /*
     $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        console.log(scroll);
        if(scroll>=0 && scroll<200){
            $(".scroll_top").fadeOut();
            $("#header").show();
        }else if(scroll>=70){
            $(".scroll_top").fadeIn();
            $("#header").hide(); // 이부분은 어떻게하는지 몰라성,,
            }
    });
    */

    list.eq(0).on("click focus",function(){
        gnb.find("a").removeClass("on");
        gnb.find("a").eq(0).addClass("on");
        section.css({"display":"none"});
        section.eq(0).css({"display":"block"});
    });
    list.eq(1).on("click focus",function(){
        gnb.find("a").removeClass("on");
        gnb.find("a").eq(1).addClass("on");
        section.css({"display":"none"});
        section.eq(1).css({"display":"block"});
    });
    list.eq(2).on("click focus",function(){
        gnb.find("a").removeClass("on");
        gnb.find("a").eq(2).addClass("on");
        section.css({"display":"none"});
        section.eq(2).css({"display":"block"});
    });
    list.eq(3).on("click focus",function(){
        gnb.find("a").removeClass("on");
        gnb.find("a").eq(3).addClass("on");
        section.css({"display":"none"});
        section.eq(3).css({"display":"block"});
    });
        




});