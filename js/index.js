// api
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "셀러" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
            $(".box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "new" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('boxs');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
            $(".boxs").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오디오" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxx = document.getElementsByClassName('boxx');
        for (var i = 0; i < boxx.length; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
            $(".boxx").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "로맨스" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('boxl');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
            $(".boxl").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });
// end

$(function () {
    $(".look").click(function () {
        $(".display").slideToggle();
    });
});

$(function () {
    $(".question").click(function () {
        $(this).siblings(".answer").slideToggle();
        $(this).toggleClass("user");
    });
});

// tap_menu

$(function () {
    $(".tap_menu li").click(function () {
        $(this).css("backgroundColor", "#f7f7f7").siblings().css("backgroundColor", "#fff");

        if ($(this).find("img").attr("alt") === "headset") {

            $(".swp_swoper_11").show();
            $(".intro_text_wrap").show();
            $(".main_button_text").show();
            $(".swp_swoper_22").hide();
            $(".sub_button_area").hide();
            $(".sub_button_area2").hide();
            $(".sub_img").hide();
            $(".swiper-pagination2").hide();
            $(".swiper-pagination").show();
        } else {
            $(".intro_text_wrap").hide();
            $(".main_button_text").hide();
            $(".swp_swoper_11").hide();
            $(".swp_swoper_22").show();
            $(".sub_button_area").show();
            $(".sub_button_area2").show();
            $(".sub_img").show();
            $(".swiper-pagination2").show();
            $(".swiper-pagination").hide();
        }
    });
});

// tap_menu_end

// height

$(function () {
    $('.benner_text').css("transform", "translateY(0px)").css("opacity", "1");
    // $('.slide_text_area').css("transform","translateY(0px)").css("opacity","1");
    $(window).scroll(function () {

        var ws = $(this).scrollTop();

        if (ws > $("#ani_slide").offset().top - 700) {
            $('.slide_text_area').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > $("#video_book").offset().top - 700) {
            $('.text_wrap').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > $("#api").offset().top - 700) {
            $('.api_text').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > $("#avg").offset().top - 700) {
            $('.avg_text').css("transform", "translateY(0px)").css("opacity", "1");
            $(".cord1 img").addClass("phoneUp_on1").css({ "opacity": "1" });
            $(".cord2 img").addClass("phoneUp_on2").css({ "opacity": "1" });
            $(".cord3 img").addClass("phoneUp_on3").css({ "opacity": "1" });
            $(".cord4 img").addClass("phoneUp_on4").css({ "opacity": "1" });
        }

        if (ws > $("#price").offset().top - 700) {
            $('.price_text_wrap').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > $("#audio").offset().top - 700) {
            $('.audio_inner').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws > $("#info").offset().top - 700) {
            $('.info_head').css("transform", "translateY(0px)").css("opacity", "1");
        }
    });
});

// end





