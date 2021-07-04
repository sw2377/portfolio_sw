// main.js

$(function(){

    function imagesProgress(){

        var $container = $('#progress'), 
            $progressBar = $container.find('.progress-bar'), 
            $progressText = $container.find('.progress-text'), 

            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length, 

            imgLoaded = 0, 
            current = 0, 

            progressTimer = setInterval(updateProgress, 1000 / 60);

            

            imgLoad.on('progress',function(){
                imgLoaded++;
            }); 

            function updateProgress(){ 
                var target = (imgLoaded / imgTotal) * 100;
                    current += (target - current) * 0.1;

                $progressBar.css({width:current + '%'});
                $progressText.text(Math.floor(current) + '%');

                if(current>=100){
                    clearInterval(progressTimer);
                    $container.addClass('progress-complete');

                    $progressBar.add($progressText).delay(500).animate({opacity:0},250,function(){
                        $container.animate({top:'-100%'},1000);
                    });
                }

                if(current > 99.9){
                    current = 100;
                } 
            } 
    } 

    imagesProgress();
    if($(".progress").is(':visible')){ 
        $("body").css({overflow:"hidden"});
    }

    var width = $(window).width();
    if(width <= 1024){
        $("body").css({overflow:"visible"});
    }

    // document의 높이값을 section의 높이값으로
    var ht = $(window).height();
    $("div>section").height(ht);

    // window의 크기가 바뀌더라도 높이가 100%가 되도록
    $(window).resize(function(){
        var ht = $(window).height();
        $("div>section").height(ht);
        // console.log(ht);
    });


    $(".rolling").css({"display":"none"}); // 첫 화면에서는 안보이게.
  
    // nav
    $(".menubar").click(function(e){
        e.preventDefault();

        var nav = $("nav");

        nav.toggleClass("close");
        nav.toggleClass("open");

        if(nav.hasClass("open")){

            $(this).children().attr("src","images/close.svg");
            $("body").css({overflow:"hidden"});
            
            // nav menu click
            $("#header").find("li").each(function(idx){
                // console.log(idx); 0~10

                $(this).click(function(){
                   
                    nav.removeClass("open");
                    nav.addClass("close");
                    $(".menubar").children().attr("src","images/menubar.svg");
                    $("body").css({overflow:"visible"}); 
        
                    if(idx<3){
                        var content = $("#container>div").eq(idx).offset().top;
                        $("html,body").animate({"scrollTop":content},1000); 
                    }else if(idx>=4 && idx<10){
                        var content = $(".content4").find("section").eq(idx - 3).offset().top;
                        $("html,body").animate({"scrollTop":content},1000);
                    }else{
                        var content = $("#container>div").eq(idx - 6).offset().top;
                        $("html,body").animate({"scrollTop":content},1000);
                    }      
                }); //each_li click event
            }); //each_li
        }else{
            $(this).children().attr("src","images/menubar.svg");
            $("body").css({overflow:"visible"});     
        }
    });

    // content1
    var start = setTimeout(function(){
        $(".content1>section").addClass("on");
    },500);

    $(".polaroid_pic4").click(function(){
        var content2 = $(".content2").find("section").offset().top;
        $("body,html").stop().animate({"scrollTop":content2},1000);
        $("body").css({overflow:"visible"})
    });
 
    // content2 menu hover
    var menu = $(".content2>section>.menu"),
        menuAbout = menu.find("li.about_me"),
        menuWorks = menu.find("li.works"),
        menuContact = menu.find("li.contact");

   
    // content2 menu click
    menuAbout.click(function(){

        var i = $(this).index() + 2;
        var content = $("#container>div").eq(i).offset().top;
        console.log(content);
        

        $("body,html").stop().animate({"scrollTop":content},1000);
    });

    menuWorks.click(function(){
        var i = $(this).index() + 2;
        var content = $("#container>div").eq(i).offset().top;
        console.log(content);
        
        
        $("body,html").stop().animate({"scrollTop":content},1000);
    });

    menuContact.click(function(){
        var i = $(this).index() + 2;
        var content = $("#container>div").eq(i).offset().top;
        console.log(content);
        
        $("body,html").stop().animate({"scrollTop":content},1000);
    });


    $(menuAbout)
        .mouseover(function(){
        $(this).addClass("on");
        menuWorks.addClass("move1");
        menuContact.addClass("move1");
    })
        .mouseleave(function(){
        $(this).removeClass("on");
        menuWorks.removeClass("move1");
        menuContact.removeClass("move1");
    });

    $(menuWorks)
        .mouseover(function(){
        $(this).addClass("on");
        menuAbout.addClass("move2");
        menuContact.addClass("move2");
    })
        .mouseleave(function(){
        $(this).removeClass("on");
        menuAbout.removeClass("move2");
        menuContact.removeClass("move2");
    });

    $(menuContact).mouseover(function(){
        $(this).addClass("on");
        menuAbout.addClass("move3");
        menuWorks.addClass("move3");
    })
        .mouseleave(function(){
        $(this).removeClass("on");
        menuAbout.removeClass("move3");
        menuWorks.removeClass("move3");
    });

    // content3 skills counting up

    var executed = false;

    $(window).scroll(function(){

        if(!executed){

            var count = $(".content3").find("section").eq(1).offset().top - 300,
                counterData = $(".skills").find(".num");
            // console.log(counterData);
            
            if($(window).scrollTop() >= count){
                
                counterData.each(function(){
                    var counter = $(this),
                        progressRate  = counter.attr("data-rate");
                    // console.log(counter);
                    // console.log(progressRate);
                    
                    $({percent:0}).animate({percent:progressRate},{
                        duration:1500,
                        progress:function(){
                            var now = this.percent;
                            counter.text(Math.ceil(now));
                        }
                    });
                    executed = true;
                });

            } // if

        } // executed

    });

    // content3 mouse here
    $(".skills").find(".mouse_here").click(function(e){
        e.preventDefault();
    });
    
    $(".skills").find(".mouse_here").mouseover(function(){
        var counterData = $(".skills").find(".num");

        var html = counterData.eq(0);
        htmlGoal = html.attr("data-rate","98");
        var htmlsGoal = htmlGoal.attr("data-rate");
        html.text(Number(htmlsGoal));

        var css = counterData.eq(1);
        cssGoal = css.attr("data-rate","98");
        var csssGoal = cssGoal.attr("data-rate");
        css.text(Number(csssGoal));

        var javascript = counterData.eq(2);
        javascriptGoal = javascript.attr("data-rate","90");
        var jsGoal = javascriptGoal.attr("data-rate");
        javascript.text(Number(jsGoal));

        var jquery = counterData.eq(3);
        jqueryGoal = jquery.attr("data-rate","98");
        var jqueryGoal = jqueryGoal.attr("data-rate");
        jquery.text(Number(jqueryGoal));

        var react = counterData.eq(4);
        reactGoal = react.attr("data-rate","90");
        var reactGoal = reactGoal.attr("data-rate");
        react.text(Number(reactGoal));

        var figma = counterData.eq(5);
        figmaGoal = figma.attr("data-rate","98");
        var figmaGoal = figmaGoal.attr("data-rate");
        figma.text(Number(figmaGoal));




        counterData.each(function(){
            var counter = $(this);
            var counterRate  = counter.attr("data-rate");

        });

    });

    $(".skills").find(".mouse_here").mouseleave(function(){
        var counterData = $(".skills").find(".num");


        var html = counterData.eq(0);
        htmlGoal = html.attr("data-rate","85");
        var htmlsGoal = htmlGoal.attr("data-rate");
        html.text(Number(htmlsGoal));

        var css = counterData.eq(1);
        cssGoal = css.attr("data-rate","85");
        var csssGoal = cssGoal.attr("data-rate");
        css.text(Number(csssGoal));

        var javascript = counterData.eq(2);
        javascriptGoal = javascript.attr("data-rate","60");
        var jsGoal = javascriptGoal.attr("data-rate");
        javascript.text(Number(jsGoal));

        var jquery = counterData.eq(3);
        jqueryGoal = jquery.attr("data-rate","80");
        var jqueryGoal = jqueryGoal.attr("data-rate");
        jquery.text(Number(jqueryGoal));

        var react = counterData.eq(4);
        reactGoal = react.attr("data-rate","10");
        var reactGoal = reactGoal.attr("data-rate");
        react.text(Number(reactGoal));

        var figma = counterData.eq(5);
        figmaGoal = figma.attr("data-rate","85");
        var figmaGoal = figmaGoal.attr("data-rate");
        figma.text(Number(figmaGoal));


        counterData.each(function(){
            var counter = $(this);
            var counterRate  = counter.attr("data-rate");

        });

    });



    // content3 skills2_box click
    $(".skills2_box").click(function(){
        $(".skills2").toggleClass("on");
    });

    // content4 scroll 
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(),
            content4 = $("#container>.content4")
            content4Section = content4.find("section"),
            content4OffsetTop = content4Section.eq(0).offset().top,
            content4LastSection = content4Section.eq(6);
        var mockup = content4Section.find("div.mockup");
        var rolling = $(".rolling");
        // console.log(mockup);

        // yellow bg
        if(scroll >= content4OffsetTop){
            content4.addClass("on");
            if(scroll >= content4LastSection.offset().top){
                content4LastSection.addClass("on");
                content4.removeClass("on");
            }else{
                content4LastSection.removeClass("on");
            }
        }else{
            content4.removeClass("on");
        }

        // mockup, rolling
        if(scroll >= content4Section.eq(1).offset().top && scroll < content4Section.eq(6).offset().top + 300){
            rolling.fadeIn();
        }else{
            rolling.fadeOut();
        } 

        if(scroll >= content4Section.eq(1).offset().top && scroll < content4Section.eq(2).offset().top){
            mockup.eq(0).addClass("on");
            rolling.find("a").eq(0).addClass("on");
        }else{
            mockup.eq(0).removeClass("on");
            rolling.find("a").eq(0).removeClass("on");
        } 

        if(scroll >= content4Section.eq(2).offset().top && scroll < content4Section.eq(3).offset().top){
            mockup.eq(1).addClass("on");
            rolling.find("a").eq(1).addClass("on");
        }else{
            mockup.eq(1).removeClass("on");
            rolling.find("a").eq(1).removeClass("on");
        } 

        if(scroll >= content4Section.eq(3).offset().top && scroll < content4Section.eq(4).offset().top){
            rolling.find("a").eq(2).addClass("on");
        }else{
            rolling.find("a").eq(2).removeClass("on");
        } 

        if(scroll >= content4Section.eq(4).offset().top && scroll < content4Section.eq(5).offset().top){
            mockup.eq(3).addClass("on");
            rolling.find("a").eq(3).addClass("on");
        }else{
            mockup.eq(3).removeClass("on");
            rolling.find("a").eq(3).removeClass("on");
        } 

        if(scroll >= content4Section.eq(5).offset().top && scroll < content4Section.eq(6).offset().top){
            rolling.find("a").eq(4).addClass("on");
        }else{
            rolling.find("a").eq(4).removeClass("on");
        } 

        if(scroll >= content4Section.eq(6).offset().top){
            rolling.find("a").eq(5).addClass("on");
        }else{
            rolling.find("a").eq(5).removeClass("on");
        } 

        // rolling click
        rolling.find("a").click(function(e){
            e.preventDefault();

            var rollingNum = $(this).index() + 1;
            var sectionNum = content4Section.eq(rollingNum);
            
            $("body,html").stop().animate({"scrollTop":sectionNum.offset().top},1000);
        });

    });

    // 스크롤시 bg color 변경

    $(window).scroll(function(){

        var content4Sec0 = $(".content4").find("section").eq(0);
        var content4Sec1 = $(".content4").find("section").eq(1);
        var content4Sec2 = $(".content4").find("section").eq(2);
        var content4Sec3 = $(".content4").find("section").eq(3);
        var content4Sec4 = $(".content4").find("section").eq(4);
        var content4Sec5 = $(".content4").find("section").eq(5);
        var content4Sec6 = $(".content4").find("section").eq(6);
        var sec0top = content4Sec0.offset().top;
        var sec1top = content4Sec1.offset().top;
        var sec2top = content4Sec2.offset().top;
        var sec3top = content4Sec3.offset().top;
        var sec4top = content4Sec4.offset().top;
        var sec5top = content4Sec5.offset().top;
        var sec6top = content4Sec6.offset().top;
        var scroll = $(this).scrollTop();
        

        if(scroll >= sec0top - 100 && scroll < sec1top){
            content4Sec0.find("p").addClass("on");
        }else{
            content4Sec0.find("p").removeClass("on");
        }

        if(scroll >= sec1top - 300 && scroll < sec2top){
            $(".bg_top").addClass("first");
            $(".bg_bottom").addClass("first");
            
        }else{
            $(".bg_top").removeClass("first");
            $(".bg_bottom").removeClass("first");
           
        }

        if(scroll >= sec2top - 300){
            $(".bg_top").addClass("second");
            $(".bg_bottom").addClass("second");
           
        }else{
            $(".bg_top").removeClass("second");
            $(".bg_bottom").removeClass("second");
           
        }

        
        if(scroll >= sec3top - 300){
            $(".bg_top").addClass("third");
            $(".bg_bottom").addClass("third");
        }else{
            $(".bg_top").removeClass("third");
            $(".bg_bottom").removeClass("third");
        }

        
        if(scroll >= sec4top - 300){
            $(".bg_top").addClass("fourth");
            $(".bg_bottom").addClass("fourth");
        }else{
            $(".bg_top").removeClass("fourth");
            $(".bg_bottom").removeClass("fourth");
        }

        if(scroll >= sec5top - 300){
            $(".bg_top").addClass("fifth");
            $(".bg_bottom").addClass("fifth");
        }else{
            $(".bg_top").removeClass("fifth");
            $(".bg_bottom").removeClass("fifth");
        }

        if(scroll >= sec6top - 300){
            $(".bg_top").addClass("sixth");
            $(".bg_bottom").addClass("sixth");
        }else{
            $(".bg_top").removeClass("sixth");
            $(".bg_bottom").removeClass("sixth");
        }
        
    });

    // content4 삼성전기 W3C 유효성, 웹접근성, 크로스브라우징
    var standardWeb = $(".standard_web_inner"),
        checkSection = $(".section_inner2"),
        checkPage = checkSection.find(".check"),
        checkList = checkPage.children();

        // view detail check, back
    standardWeb.find(".click").click(function(e){
    e.preventDefault();
    
    var PositionTop = standardWeb.offset().top;
    $("html,body").stop().animate({"scrollTop":PositionTop},800,"linear");
    $(".rolling").fadeOut(1000);

    // bg change
    $(".content4").addClass("change");
    $(".bg_top.first").addClass("change");
    $(".bg_bottom.first").addClass("change");

    standardWeb.eq(0).animate({"left":"-100%"},1000,"easeInQuad");
    checkSection.animate({"left":"0"},1000,"easeInQuad");
    $("body").css({overflow:"hidden"});

    $(".menubar").css("display","none");
    });

    checkSection.find(".back").click(function(e){
    e.preventDefault();

    $(".rolling").fadeIn(1000);

    // bg change
    $(".content4").removeClass("change");
    $(".bg_top.first").removeClass("change");
    $(".bg_bottom.first").removeClass("change");

    checkSection.animate({"left":"100%"},1000,"easeOutQuad");
    standardWeb.eq(0).animate({"left":"0"},1000,"easeOutQuad");
    $("body").css({overflow:"visible"});

    $(".menubar").css("display","block");
    });

        // 각 메뉴 open
    checkList.eq(0).find("h4").click(function(){
        
        checkPage.toggleClass("valid_on");
        checkPage.removeClass("access_on");
        checkPage.removeClass("cross_on");
    });

    checkList.eq(1).find("h4").click(function(){
        
        checkPage.toggleClass("access_on");
        checkPage.toggleClass("valid_on");
        
        if(checkPage.hasClass("cross_on")){
            checkPage.removeClass("cross_on");
          }

    });

    checkList.eq(2).find("h4").click(function(){
        checkPage.toggleClass("cross_on");
        checkPage.addClass("access_on");
    });

    // content 4 앱디자인 웰빙볼 click arrow
    var appDesign = $(".app_design");

    appDesign.find(".click").click(function(e){
        e.preventDefault();

        $(this).find("span").toggleClass("view");
        if($(this).find("span").hasClass("view")){
            $(this).find("span").text("View Well-Being Bowl App");
        }else{
            $(this).find("span").text("View Landing page, Design");
        }

        appDesign.find(".mockup").toggleClass("on");
        appDesign.find(".mockup_change").toggleClass("on");
        appDesign.find(".view_btn").toggleClass("on");
    });
 
    // 팝업창 오픈
    $(".samsung_elect").click(function(e){
        e.preventDefault();
        window.open("https://sw2377.github.io/portfolio_sw/project1/","samsung electro-mechanics");
    });

    $(".cjone").click(function(e){
        e.preventDefault();
        window.open("http://sowon2021y.dothome.co.kr/web2/","cjone");
    });

    $(".wellbeingbowl_app").click(function(e){
        e.preventDefault();
        alert("앱화면 코딩은 제작중에 있습니다. 조금만 기다려 주세요!");
      
    });

    $(".wellbeingbowl_landing").click(function(e){
        e.preventDefault();
        window.open("https://sw2377.github.io/portfolio_sw/project3/","well-being bowl");
    });

    $(".Marriott_Bonvoy").click(function(e){
        e.preventDefault();
        window.open("https://sw2377.github.io/portfolio_sw/project4/","Marriott Bonvoy");
    });

    $(".ryan_code").click(function(e){
        e.preventDefault();

        var modal = $(".modal1"),
            modalContent = modal.find(".modal_content");

        modal.addClass("open");
        modalContent.addClass("open");
        $(".rolling").css({"opacity":"0"});
        $("body").css({overflow:"hidden"}); 

        modal.find(".close").click(function(){
            modal.removeClass("open");
            modalContent.removeClass("open");
            $(".rolling").css({"opacity":"1"});
            $("body").css({overflow:"visible"}); 
        });
    });

    $(".emoji_code").click(function(e){
        e.preventDefault();

        var modal = $(".modal2"),
            modalContent = modal.find(".modal_content");

        modal.addClass("open");
        modalContent.addClass("open");
        $(".rolling").css({"opacity":"0"});
        $("body").css({overflow:"hidden"}); 

        modal.find(".close").click(function(){
            modal.removeClass("open");
            modalContent.removeClass("open");
            $(".rolling").css({"opacity":"1"});
            $("body").css({overflow:"visible"}); 
        });
    });

    $(".kakaotalk").click(function(e){
        e.preventDefault();
        window.open("https://sw2377.github.io/portfolio_sw/project6/","kakaotalk","width=450px,height=850px,left=200px,top=20px");
    });

    //content5
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(),
            content5 = $("#container>.content5"),
            textEffect = $(".thankyou");

        if(scroll >= content5.offset().top){
            textEffect.fadeIn("1000")
            textEffect.textillate('start')
        }else{
            textEffect.fadeOut("1000")
        }

    });
 
    
    //반응형 웹
    var width = $(window).width(),
        mockupimg = $(".content4 .pc").find("img");
    if(width<=600){
        mockupimg.eq(0).attr("src","images/mockup1.png");
        mockupimg.eq(1).attr("src","images/mockup2.png");
        mockupimg.eq(2).attr("src","images/mockup3.png");
    }
    $(window).resize(function(){
        var width = $(window).width(),
            mockupimg = $(".content4 .pc").find("img");
        if(width<=600){
            mockupimg.eq(0).attr("src","images/mockup1.png");
            mockupimg.eq(1).attr("src","images/mockup2.png");
            mockupimg.eq(2).attr("src","images/mockup3.png");
        }else{
            mockupimg.attr("src","images/mockup_pc.png");
        }
    })


});