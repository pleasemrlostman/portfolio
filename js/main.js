$(function () {
    var main = $("#main").offset().top;
    console.log(main);
    var sec1 = $("#section1").offset().top;
    console.log(sec1);
    var sec2 = $("#section2").offset().top;
    console.log(sec2);
    var sec3 = $("#section3").offset().top;
    console.log(sec3);
    var sec4 = $("#section4").offset().top;
    console.log(sec4);
    var sec5 = $("#section5").offset().top;
    console.log(sec5);

    if (document.body.clientWidth > 639) {
        // --------------------------------------------------------------------------------
        $(".web_slide_box").slick({
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true,
            dots: true,
        });
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
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
        // -------------------------------------------------------------------------------
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
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------
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
            $("body,html").animate({ scrollTop: "7000" }, 1000);
        });
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        // 여기서부터 스크롤 / 여기서부터 스크롤 / 여기서부터 스크롤 / 여기서부터 스크롤 /
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        $(window).scroll(function () {
            var num = $(document).scrollTop();
            console.log(num);

            // -----------------------------------------
            if (num >= 1 && num < 5999) {
                $(".header").css({ background: "#212121" });
            } else {
                $(".header").css({ background: "transparent" });
            }
            // ---------------------------------------------
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
            // ---------------------------------------------------------------------------
            // ---------------------------------------------------------------------------
            // ---------------------------------------------------------------------------
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
                $(".web_slide_box1").animate({ top: "247.5px" }, 2000);
                $(".web_slide_box1").addClass("on");
            }
            if (num >= 4500) {
                $(".mobile_mockup_wrap").addClass("on");
                $(".mobile_infor_wrap").addClass("on");
                $(".mobile_btn_wrap").addClass("on");
                $(".mobile_infor_wrap").animate({ left: "50px" }, 2000);
                $(".mobile_mockup_wrap").animate({ right: "50px" }, 2000);
                $(".mobile_btn_wrap").animate({ bottom: "50px" }, 2000);
            }
            if (num >= 5200) {
                $(".web_slide_box2").animate({ top: "247.5px" }, 2000);
                $(".web_slide_box2").addClass("on");
            }
            if (num > 6300) {
                $(".contact_frame").addClass("on");
            }
        });
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        // 여기까지 스크롤 끝 / 여기까지 스크롤 끝 / 여기까지 스크롤 끝 / 여기까지 스크롤 끝 /
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        // 여기서 부터 모바일 / 여기서 부터 모바일 / 여기서 부터 모바일 / 여기서 부터 모바일 /
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
    } else {
        // -------------------------------------------------------------------------------
        $(".web_slide_box").slick({
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true,
            dots: true,
        });
        // -------------------------------------------------------------------------------
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
            $("body,html").animate({ scrollTop: "4700" }, 1000);
        });
        $(".header .list4").click(function () {
            $("body,html").animate({ scrollTop: "10200" }, 1000);
        });

        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
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
        // -------------------------------------------------------------------------------
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
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------
        $(window).scroll(function () {
            var num = $(document).scrollTop();
            console.log(num);
            if (num >= 1) {
                $(".header").css({ background: "#212121" });
            } else {
                $(".header").css({ background: "transparent" });
            }
            // ----------------
            // ----------------
            if (num >= 0 && num < 1000) {
                $(".gnb .list1 a").css({ color: "#eab23a" });
                $(".gnb .list1").siblings().find("a").css({ color: "#fefefe" });
            } else if (num >= 1000 && num < 4700) {
                $(".gnb .list2").siblings().find("a").css({ color: "#fefefe" });
                $(".gnb .list2 a").css({ color: "#eab23a" });
            } else if (num >= 4700 && num < 9050) {
                $(".gnb .list3").siblings().find("a").css({ color: "#fefefe" });
                $(".gnb .list3 a").css({ color: "#eab23a" });
            } else {
                $(".gnb .list4").siblings().find("a").css({ color: "#fefefe" });
                $(".gnb .list4 a").css({ color: "#eab23a" });
            }
            // ----------------
            // ----------------
            if (num >= 400) {
                $(".picture_wrap").animate({ opacity: "1" }, 2000);
            }
            if (num >= 1200) {
                $(".infor_box").animate({ opacity: "1" }, 2000);
            }
            if (num >= 2100) {
                $(".skill_box .box .graph").addClass("on");
                $(".skill_box .box1 span").animate({ width: "95%" }, 2000);
                $(".box1 .percent").addClass("on");
            }
            if (num >= 2400) {
                $(".skill_box .box2 span").animate({ width: "95%" }, 2000);
                $(".box2 .percent").addClass("on");
            }
            if (num >= 2700) {
                $(".skill_box .box3 span").animate({ width: "95%" }, 2000);
                $(".box3 .percent").addClass("on");
            }
            if (num >= 3000) {
                $(".skill_box .box4 span").animate({ width: "95%" }, 2000);
                $(".box4 .percent").addClass("on");
            }
            if (num >= 3300) {
                $(".skill_box .box5 span").animate({ width: "95%" }, 2000);
                $(".box5 .percent").addClass("on");
            }
            if (num >= 3600) {
                $(".skill_box .box6 span").animate({ width: "95%" }, 2000);
                $(".box6 .percent").addClass("on");
            }
            if (num >= 4200) {
                $(".r_infor_wrap").addClass("on");
                $(".r_infor_wrap").animate({ left: "50px" }, 2000);
            }
            if (num >= 4900) {
                $(".r_mockup_wrap").addClass("on");
                $(".r_mockup_wrap").animate({ left: "50px" }, 2000);
            }
            if (num >= 5700) {
                $(".web_slide_box1").animate({ top: "247.5px" }, 2000);
                $(".web_slide_box1").addClass("on");
                $(".web_slide_box1 .slick-arrow").addClass("on");
            }
            if (num >= 6900) {
                $(".mobile_infor_wrap").addClass("on");
                $(".mobile_infor_wrap").animate({ left: "50px" }, 2000);
            }
            if (num >= 7500) {
                $(".mobile_btn_wrap").addClass("on");
                $(".mobile_btn_wrap").animate({ bottom: "-70px" }, 2000);
            }
            if (num >= 7600) {
                $(".mobile_mockup_wrap").addClass("on");
                $(".mobile_mockup_wrap").animate({ left: "50px" }, 2000);
            }
            if (num >= 8500) {
                $(".web_slide_box2").animate({ top: "247.5px" }, 2000);
                $(".web_slide_box2").addClass("on");
                $(".web_slide_box2 .slick-arrow").addClass("on");
            }
            if (num > 9800) {
                $(".contact_frame").addClass("on");
            }
        });
    }
});
