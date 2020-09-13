$(function () {
    $(window).scroll(function () {
        var num = $(document).scrollTop();
        console.log(num);

        if (num >= 1 && num < 5999) {
            $(".header").css({ background: "#212121" });
        } else {
            $(".header").css({ background: "transparent" });
        }
        // ----------------
        // ----------------
        if (num >= 0 && num < 1000) {
            $(".gnb .list1 a").css({ color: "#eab23a" });
            $(".gnb .list1").siblings().find("a").css({ color: "#fefefe" });
        } else if (num >= 1000 && num < 3000) {
            $(".gnb .list2").siblings().find("a").css({ color: "#fefefe" });
            $(".gnb .list2 a").css({ color: "#eab23a" });
        } else if (num >= 3000 && num < 6000) {
            $(".gnb .list3").siblings().find("a").css({ color: "#fefefe" });
            $(".gnb .list3 a").css({ color: "#eab23a" });
        } else {
            $(".gnb .list4").siblings().find("a").css({ color: "#fefefe" });
            $(".gnb .list4 a").css({ color: "#eab23a" });
        }

        if (num >= 500) {
            $(".picture_wrap").animate({ opacity: "1" }, 2000);
            $(".infor_box").animate({ opacity: "1" }, 2000);
        }

        if (num >= 1729) {
            $(".skill_box .box .graph").addClass("on");
            $(".skill_box .box1 span").animate({ width: "95%" }, 2000);
            $(".skill_box .box2 span").animate({ width: "75%" }, 2000);
            $(".skill_box .box3 span").animate({ width: "85%" }, 2000);
            $(".skill_box .box4 span").animate({ width: "90%" }, 2000);
            $(".skill_box .box5 span").animate({ width: "80%" }, 2000);
            $(".skill_box .box6 span").animate({ width: "85%" }, 2000);
        }

        if (num >= 1902) {
            $(".percent").addClass("on");
        }

        if (num >= 2300) {
            $(".r_mockup_wrap").addClass("on");
            $(".r_infor_wrap").addClass("on");
            $(".r_mockup_wrap").animate({ left: "50px" }, 2000);
            $(".r_infor_wrap").animate({ right: "50px" }, 2000);
        }
        if (num >= 3500) {
            $(".web_slide_box").animate({ top: "247.5px" }, 2000);
            $(".web_slide_box").addClass("on");
        }

        if (num >= 4500) {
            $(".mobile_mockup_wrap").addClass("on");
            $(".mobile_infor_wrap").addClass("on");
            $(".mobile_btn_wrap").addClass("on");
            $(".mobile_infor_wrap").animate({ left: "50px" }, 2000);
            $(".mobile_mockup_wrap").animate({ right: "50px" }, 2000);
            $(".mobile_btn_wrap").animate({ bottom: "50px" }, 2000);
        }
        if (num >= 5400) {
            $(".contact_frame").addClass("on");
        }
        // ----------------
        // ----------------
    });
    $(".scroll_btn_wrap").click(function () {
        $("body,html").animate({ scrollTop: "1000" }, 1000);
    });
    $(".header .list1").click(function () {
        $("body,html").animate({ scrollTop: "0" }, 1000);
    });
    $(".header .list2").click(function () {
        $("body,html").animate({ scrollTop: "1000" }, 1000);
    });
    $(".header .list3").click(function () {
        $("body,html").animate({ scrollTop: "3000" }, 1000);
    });
    $(".header .list4").click(function () {
        $("body,html").animate({ scrollTop: "6000" }, 1000);
    });
    // ----------------
    // ----------------
    $(".tab_menu li").click(function () {
        var num = $(this).index();
        console.log(num);
        $(".tab_menu li").removeClass("on");
        $(this).addClass("on");
        $(".infor_box .infor_box_content").hide();
        $(".infor_box ul")
            .eq(num + 1)
            .show();
    });

    $(".mobile_btn_wrap li").click(function () {
        var num = $(this).index();
        console.log(num);
        $(".section5_inner").find(".mobile_infor_wrap").hide();
        $(".section5_inner").find(".mobile_infor_wrap").eq(num).show();
        $(".section5_inner").find(".mobile_mockup_wrap").hide();
        $(".section5_inner").find(".mobile_mockup_wrap").eq(num).show();
        var num = $(this).siblings().removeClass("on");
        var num = $(this).addClass("on");
    });

    // ----------------
    // ----------------
    $(".web_slide_box").slick({
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        dots: true,
    });
    // $(".slick-center").mouseenter(function () {
    //     $(this).find(".cover").fadeIn();
    // });
    // $(".slick-center").mouseleave(function () {
    //     $(this).find(".cover").fadeOut();
    // });
});
