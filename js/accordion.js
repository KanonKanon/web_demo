;$(function(){
    $(".list_con").delegate("li .bar","click",function(){
        $(this).next().animate({
            width:950,
        },200);
        $(this).parent().siblings().children(".pic_con").animate({
            width:0,
        },200);

    });
});