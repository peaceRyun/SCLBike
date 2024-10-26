$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
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
