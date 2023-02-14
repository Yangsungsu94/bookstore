$(function(){
    $(".look").click(function(){
        $(".display").slideToggle();
    });
});

$(function(){
    $(".question").click(function(){
        $(this).siblings(".answer").slideToggle();
        $(this).toggleClass("user");
    });
});








