// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.linkSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 廣告輪播
    $('.eventSlider').slick({
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    //右側按鈕
    if ($('.quickDot').length > 0) {
        $('.gotoAbout').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.about').offset().top }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoNews').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.news').offset().top - 40 }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoEvent').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.event').offset().top }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoBook').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.book').offset().top - 20 }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoNet').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.net').offset().top - 20 }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoLink').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.link').offset().top }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoContact').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.contact').offset().top }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoHappy').off().click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.happy').offset().top }, 300, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    }
});
