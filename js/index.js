$(".nav-link").on("mouseenter",function(){
    $(this).addClass("hovered");
});
$(".nav-link").on("mouseleave",function(){
    $(this).removeClass("hovered");
});


$(window).on("load",function(){
    $(".description").children().hide();
    $(".f-home").hide();
    $(".description").children().eq(0).show().delay(2000).hide(3000);
    $(".description").children().eq(1).delay(3000).show(2000).delay(3000).hide(2000);
    $(".description").children().eq(2).delay(5000).show(2000).delay(3000).hide(2000);
    $(".description").children().eq(3).delay(7000).show(2000).delay(3000).hide(2000);
    $(".description").children().eq(4).delay(9000).show(2000).delay(3000).hide(2000);
    $(".description").children().eq(5).delay(13000).show(2000).delay(4000).hide(2000);
    $(".description").children().eq(6).delay(15000).show(2000).delay(3000).hide(2000);
    $(".description").children().eq(7).delay(18000).show(2000);
    $(".description").children().eq(8).delay(18000).show(2000);
    $(".description").children().eq(9).delay(18000).show(2000);
    $(".f-home").delay(18000).show(2000);
    
})
       

    
    
