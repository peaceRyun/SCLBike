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
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
