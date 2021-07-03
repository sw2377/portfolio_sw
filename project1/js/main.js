$(document).ready(function(){

  $("html,body").stop().animate({"scrollTop":0},1400,"swing");

 // scroll

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


// gnb


$(".gnb>ul>li>a").bind("mouseover focus",function(){

    // $(".gnb>ul>li>.gnb_inner").css("display","none");
    // $(this).next().css("display","block");

    var ht = $(this).next().height();

    $(".header_wrap").stop().animate({"height":ht+70},300,"linear");

    $(".gnb_inner").css("display","none");
    $(this).next().css("display","block");

    $(".gnb>ul>li").removeClass("on");
    $(this).parent().addClass("on");

    });

$(".gnb").bind("mouseleave blur",function(){
    $(".header_wrap").stop().css("height","70px");
    $(".gnb_inner").css({"display":"none"});

    });

$(".gnb>ul>li").bind("mouseleave blur",function(){   
    $(this).removeClass("on"); 
    });


// search 버튼 

        // $(".utill_area>ul>li>button").click(function(){
        //     $(".srch_area").css("display","block");
        //     $(this).css("display","none");
        //     $(".btn_close").css("display","block"); 

        // });


        // $(".btn_close").click(function(){
        //     $(".srch_area").css("display","none");
        //     $(this).css("display","none");
        //     $(".utill_area>ul>li>button").css("display","block");
        // });


//(돋보기랑 닫기버튼 hide랑 show로 한거)

$(".utill_area>ul>li>button").click(function(){
    $(".srch_area").show();
    $(".btn_close").show();   
    $("body").css("position","fixed");    
    });

$(".btn_close").click(function(){
    $(".srch_area").hide();
    $(".btn_close").hide();
    $(".utill_area>ul>li>button").show(); 
    $("body").css("position","relative"); 
});



// main_visual 배너

var $bnnNum=0;
var lastNum=$(".slide_wrap>section").size()-1;


    // 오토배너  
    function autoBanner(){

        $bnnNum++;
        if($bnnNum>lastNum){$bnnNum=0;}
        
        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".roll>li>a").css("background","#aaa");
        $(".roll>li>a").eq($bnnNum).css("background","#fff");
    };


    var $autoBnn = setInterval(autoBanner,5000); 

    // next, prev 버튼

    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum>lastNum){$bnnNum=0;}
        
        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".roll>li>a").css("background","#aaa");
        $(".roll>li>a").eq($bnnNum).css("background","#fff");
    });

    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum<0){$bnnNum=lastNum;}
        

        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".roll>li>a").css("background","#aaa");
        $(".roll>li>a").eq($bnnNum).css("background","#fff");
    });

    // roll 버튼
    $(".roll>li>a").click(function(){
        $bnnNum = $(this).parent().index();
        // console.log($bnnNum);
        $(".slide").removeClass("active");
        $(".slide").eq($bnnNum).addClass("active");

        $(".roll>li>a").css("background","#aaa");
        $(".roll>li>a").eq($bnnNum).css("background","#fff");
    });

    // 비디오 재생, 멈춤
    var play=true;
    $("p.control").click(function(){
        if(play){
            clearInterval($autoBnn);
            $(this).css("background","url(images/slide_btn1.png) no-repeat -11px 1px");
            play=false;
        }else{
            $autoBnn = setInterval(autoBanner,5000);
            $(this).css("background","url(images/slide_btn1.png) no-repeat 0 1px");
            play=true;
        };
    });

   
    // scroll 버튼
    $(".scroll_top a").click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1400,"swing");
    });





});