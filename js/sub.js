$(function(){
    $(".prev").click(function(){
        $(".book_info_slide_inner li:last").prependTo('.book_info_slide_inner ul');
        $(".book_info_slide_inner ul").css('margin-left',-348);
        $(".book_info_slide_inner ul").stop().animate({marginLeft:0},800);
    });

    $(".next").click(function(){
       $(".book_info_slide_inner ul").stop().animate({marginLeft:-348},800,function(){
        $(".book_info_slide_inner li:first").appendTo('.book_info_slide_inner ul');
        $(".book_info_slide_inner ul").css({marginLeft:0});
       })
    });
})