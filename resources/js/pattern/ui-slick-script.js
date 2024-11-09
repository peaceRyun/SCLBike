$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
});

$('.intro-slide').on('afterChange', function (event, slick, currentSlide) {
    const progress = ((currentSlide + 1) / slick.slideCount) * 100;
    $('.progress-bar').css('width', progress + '%');
});

// 초기 상태 설정
let isPlaying = true;

$('#play-pause-btn').on('click', function () {
    if (isPlaying) {
        $('.intro-slide').slick('slickPause');
        $(this).removeClass('pause').addClass('play');
    } else {
        $('.intro-slide').slick('slickPlay');
        $(this).removeClass('play').addClass('pause');
    }
    // 상태 토글
    isPlaying = !isPlaying;
});

$('.single').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
});

$('.multiple').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
});
