// main.js
$(function(){

    $("html,body").stop().animate({"scrollTop":0},1500,"swing");

    // 윈도우의 가로값을 컨텐트의 가로값으로 
    var wt = $(window).width();
    $("#container>div").width(wt);

    // 창의 크기가 바뀌어도 높이가 100%가 되도록
    $(window).resize(function(){
        var wt = $(window).width();
        $("#container>div").width(wt);
    });

    var start = setTimeout(function(){
        $(".content1>section").addClass("on");
    },500);

    // menu click
    $(".gnb>li").click(function(){

        var i = $(this).index();
        var ht = $(window).height();
        var nowTop = i*ht;

    });

    // section on
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        var content = $("#container>div");

        // content1
        if(scroll>=0 && scroll<=1000){
            $(".content1>section").addClass("on");
        }else{
            $(".content1>section").removeClass("on");
        }
        // content2
        if(scroll>=500 && scroll<=2100){
            $(".content2>section").addClass("on");
        }else{
            $(".content2>section").removeClass("on");
        }
        // content3
        if(scroll>=1500 && scroll<=3100){
            $(".content3>section").addClass("on");
        }else{
            $(".content3>section").removeClass("on");
        }
        // content4
        if(scroll>=2600 && scroll<=4100){
            $(".content4>section").addClass("on");
        }else{
            $(".content4>section").removeClass("on");
        }
        // content5
        if(scroll>=3600 && scroll<=5200){
            $(".content5>section").addClass("on");
        }else{
            $(".content5>section").removeClass("on");
        }
        // content6
        if(scroll>=4700 && scroll<=6300){
            $(".content6>section").addClass("on");
        }else{
            $(".content6>section").removeClass("on");
        }
        // content7
        if(scroll>=5900 && scroll<=7300){
            $(".content7>section").addClass("on");
        }else{
            $(".content7>section").removeClass("on");
        }
        // content8
        if(scroll>=6900 && scroll<=8900){
            $(".content8>section").addClass("on");
        }else{
            $(".content8>section").removeClass("on");
        }
        // content9
        if(scroll>=7900 && scroll<=9400){
            $(".content9>section").addClass("on");
        }else{
            $(".content9>section").removeClass("on");
        }
        // content10
         if(scroll>=8900 && scroll<=10500){
            $(".content10>section").addClass("on");
        }else{
            $(".content10>section").removeClass("on");
        }
        // content11
         if(scroll>=10000 && scroll<=11500){
            $(".content11>section").addClass("on");
        }else{
            $(".content11>section").removeClass("on");
        }
        // content12
         if(scroll>=11100 && scroll<=12600){
            $(".content12>section").addClass("on");
        }else{
            $(".content12>section").removeClass("on");
        }
        // content13
         if(scroll>=12100){
            $(".content13>section").addClass("on");
        }else{
            $(".content13>section").removeClass("on");
        }
        // footer
        if(scroll>=12500){
            $("footer").addClass("on");
        }else{
            $("footer").removeClass("on");
        }

        console.log(scroll);

    });


});