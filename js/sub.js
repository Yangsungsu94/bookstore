//슬라이더구좌
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

// api구좌
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "부" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('api_box');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".api_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + str3 + "</h6>");
        }
    });

//book_long_text 불러오기
    $(function () {
        $.get("./text/text.txt", function (data) {
            $(".long_text").html(data);
        })
    });

//end    

//top swiper

$(function () {
    $.get("./text/profile.txt", function (data) {
        $(".profile_text").html(data);
    })
});
//end





