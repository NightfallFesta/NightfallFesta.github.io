$(document).ready(function () {


    /* 헤더 햄버거 클릭 메소드 start */
    var b = 0;
    $("header>div#berger>a").click(function () {
        if (b == 0) {
            $("header>div#berger>a").addClass("is-open");
            b = 1;
        } else {
            $("header>div#berger>a").removeClass("is-open");
            b = 0;
        }
    })
    /* 헤더 햄버거 클릭 메소드 end */

    /* 헤더 네비 슬라이드 업다운 start */
    $("header>nav>ul").slideUp();
    var c = 0;
    $("header>div#berger>a").click(function () {
        if (c == 0) {
            $("header>nav>ul").slideDown();
            c = 1;
        } else {
            $("header>nav>ul").slideUp();
            c = 0;
        }
    })
    /* 헤더 네비 슬라이드 업다운 end*/

    /* 헤더 네비 클릭시 섹션이동 스크롤 start*/
    $("header>nav>ul>li:first-child").click(function () {
        $("html, body").animate({
            scrollTop: 980
        }, 1000)
    });
    
    $("header>nav>ul>li:nth-child(2)").click(function () {
        $("html, body").animate({
            scrollTop: 1868
        }, 1000)
    });
    
    $("header>nav>ul>li:nth-child(3)").click(function () {
        $("html, body").animate({
            scrollTop: 2685
        }, 1000)
    });
    
    $("header>nav>ul>li:last-child").click(function () {
        $("html, body").animate({
            scrollTop: 2957
        }, 1000)
    });
    
    /* 헤더 네비 클릭시 섹션이동 스크롤 end*/

})
