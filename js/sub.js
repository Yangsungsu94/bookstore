//슬라이더구좌
$(function () {
    $(".prev").click(function () {
        $(".book_info_slide_inner li:last").prependTo('.book_info_slide_inner ul');
        $(".book_info_slide_inner ul").css('margin-left', "-50%");
        $(".book_info_slide_inner ul").stop().animate({ marginLeft: 0 }, 800);
    });

    $(".next").click(function () {
        $(".book_info_slide_inner ul").stop().animate({ marginLeft: "-50%" }, 800, function () {
            $(".book_info_slide_inner li:first").appendTo('.book_info_slide_inner ul');
            $(".book_info_slide_inner ul").css({ marginLeft: 0 });
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

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김미경" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('swiper-slide');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".api_h").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>")
                .append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
        }
    });


//right_inner_api
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김미경의 마흔" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('column_api_inner_api_area');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".column_api_inner_api_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".column_api_inner_api_text").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "1퍼센트의 부자 법칙" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('column_api_inner_api_area1');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".column_api_inner_api_img1").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".column_api_inner_api_text1").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('column_api_inner_api_area2');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".column_api_inner_api_img2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".column_api_inner_api_text2").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원씽" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('column_api_inner_api_area3');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".column_api_inner_api_img3").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".column_api_inner_api_text3").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자" },
    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
})

    .done(function (msg) {
        var boxs = document.getElementsByClassName('column_api_inner_api_area4');
        for (var i = 0; i < boxs.length; i++) {
            var str = msg.documents[i].title;
            var str3 = msg.documents[i].price;

            var str2 = str.substring(0, 20);
            $(".column_api_inner_api_img4").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".column_api_inner_api_text4").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                .append("<h5>" + msg.documents[i].authors + "</h5>")
                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
        }
    });


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "부의" },
        headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
    })
    
        .done(function (msg) {
            var boxs = document.getElementsByClassName('column_api_inner_api_area4_zone');
            for (var i = 0; i < boxs.length; i++) {
                var str = msg.documents[i].title;
                var str3 = msg.documents[i].price;
    
                var str2 = str.substring(0, 20);
                $(".column_api_inner_api_img4_zone").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".column_api_inner_api_text4_zone").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                    .append("<h5>" + msg.documents[i].authors + "</h5>")
                    .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
            }
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "부를 움켜쥐는 17가지 법칙" },
            headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
        })
        
            .done(function (msg) {
                var boxs = document.getElementsByClassName('column_api_inner_api_area3_zone');
                for (var i = 0; i < boxs.length; i++) {
                    var str = msg.documents[i].title;
                    var str3 = msg.documents[i].price;
        
                    var str2 = str.substring(0, 20);
                    $(".column_api_inner_api_img3_zone").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                    $(".column_api_inner_api_text3_zone").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                        .append("<h5>" + msg.documents[i].authors + "</h5>")
                        .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
                }
            });

            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "생각 레가토(큰글자도서)" },
                headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
            })
            
                .done(function (msg) {
                    var boxs = document.getElementsByClassName('column_api_inner_api_area3_zone');
                    for (var i = 0; i < boxs.length; i++) {
                        var str = msg.documents[i].title;
                        var str3 = msg.documents[i].price;
            
                        var str2 = str.substring(0, 20);
                        $(".column_api_inner_api_img2_zone").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                        $(".column_api_inner_api_text2_zone").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                            .append("<h5>" + msg.documents[i].authors + "</h5>")
                            .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
                    }
                });

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "이제 막 출근했는데, 뭘 하라고요?" },
                    headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
                })
                
                    .done(function (msg) {
                        var boxs = document.getElementsByClassName('column_api_inner_api_area3_zone');
                        for (var i = 0; i < boxs.length; i++) {
                            var str = msg.documents[i].title;
                            var str3 = msg.documents[i].price;
                
                            var str2 = str.substring(0, 20);
                            $(".column_api_inner_api_img1_zone").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                            $(".column_api_inner_api_text1_zone").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                                .append("<h5>" + msg.documents[i].authors + "</h5>")
                                .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
                        }
                    });

                    $.ajax({
                        method: "GET",
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        data: { query: "영어 잘하는 사람보다 매일 하는 사람" },
                        headers: { Authorization: "KakaoAK d37f4a4b153563c9647a2d78226dac2a" }
                    })
                    
                        .done(function (msg) {
                            var boxs = document.getElementsByClassName('column_api_inner_api_area3_zone');
                            for (var i = 0; i < boxs.length; i++) {
                                var str = msg.documents[i].title;
                                var str3 = msg.documents[i].price;
                    
                                var str2 = str.substring(0, 20);
                                $(".column_api_inner_api_img_zone").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                                $(".column_api_inner_api_text_zone").append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>")
                                    .append("<h5>" + msg.documents[i].authors + "</h5>")
                                    .append("<h6>" + "<b>" + "10%" + "</b>" + str3 + "원</h6>");
                            }
                        });

//right_inner_api_end

//book_long_text 불러오기
$(function () {
    $.get("./text/text.txt", function (data) {
        $(".long_text").html(data);
    })
});

$(function () {
    $.get("./text/booklist.txt", function (data) {
        $(".over_flow_wrap_content").html(data);
    })
});

$(function () {
    $.get("./text/bookgoing.txt", function (data) {
        $(".over_flow_wrap_content2").html(data);
    })
});

$(function () {
    $.get("./text/bookwork.txt", function (data) {
        $(".over_flow_wrap_content3").html(data);
    })
});

$(function () {
    $.get("./text/change.txt", function (data) {
        $(".as_change").html(data);
    })
});

$(function () {
    $.get("./text/changetime.txt", function (data) {
        $(".as_change_time").html(data);
    })
});

$(function () {
    $.get("./text/changeprice.txt", function (data) {
        $(".as_change_price").html(data);
    })
});

$(function () {
    $.get("./text/changereason.txt", function (data) {
        $(".as_change_reason").html(data);
    })
});

$(function () {
    $.get("./text/changesoldout.txt", function (data) {
        $(".as_change_soldout").html(data);
    })
});

$(function () {
    $.get("./text/changecompensation.txt", function (data) {
        $(".as_change_reason_compensation").html(data);
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

// 메뉴접고펼치기
$(function () {
    $('.profile_text_button').click(function () {
        console.log($(this).find('.b_text').text() === '펼치기')
        if ($(this).find('.b_text').text() === '펼치기') {
            $(this).siblings().find('p').css({ 'overflow': 'visible','white-space': 'normal' });
            $(this).find('.b_text').text('접기').siblings().find('img').css({ 'transform': 'rotate(180deg)' });
        } else if ($(this).find('.b_text').text() == '접기') {
            $(this).siblings().find('p').css({ 'overflow': 'hidden','white-space': 'nowrap' });
            $(this).find('.b_text').text('펼치기').siblings().find('img').css({ 'transform': 'rotate(0deg)' });
        }
    });
});

$(function () {
    $('.over_flow_button').click(function () {
        console.log($(this).find('.c_text').text() === '펼치기')
        if ($(this).find('.c_text').text() === '펼치기') {
            $(this).siblings().find('p').css({ 'overflow': 'visible','white-space': 'normal' });
            $(this).find('.c_text').text('접기').siblings().find('img').css({ 'transform': 'rotate(180deg)' });
        } else if ($(this).find('.c_text').text() == '접기') {
            $(this).siblings().find('p').css({ 'overflow': 'hidden','white-space': 'nowrap' });
            $(this).find('.c_text').text('펼치기').siblings().find('img').css({ 'transform': 'rotate(0deg)' });
        }
    });
})




// 자동계산






