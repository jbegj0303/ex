$(document).ready(function(){
   
    $("header nav ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $('ul.sub').stop().slideUp();
    });


    $("slide ul.slide_all>li").eq(0).siblings().css("top","-300px");
    // $("slide ul.slide_all>li").eq(0).siblings().css({"top":"-300px"});

    var slidel=0;

    setInterval(function(){
        if(slidel<2){
            slidel++;
        }else{
            slidel=0;
        }
        console.log(slidel);
    },3000);




});