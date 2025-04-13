var introSwiper = new Swiper('.slide-intro', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var studioSwiper = new Swiper('.slide-studio', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var shopAsideSwiper = new Swiper('.shop-aside-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            updateFraction(this);
        },
        slideChange: function () {
            updateFraction(this);
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var playPauseBtn = document.querySelector('.slide-control-btn');
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
        if (shopAsideSwiper.autoplay.running) {
            shopAsideSwiper.autoplay.stop();
            this.classList.remove('slide-pause');
            this.classList.add('slide-play');
        } else {
            shopAsideSwiper.autoplay.start();
            this.classList.remove('slide-play');
            this.classList.add('slide-pause');
        }
    });
}

function updateFraction(swiper) {
    const fractionEl = swiper.el.querySelector('.swiper-fraction');
    if (fractionEl) {
        fractionEl.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
    }
}

var artGridSwiper = new Swiper('.art-0-grid-slide', {
    slidesPerView: 2,
    grid: {
        rows: 3,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 10,
});

var buyMainThumbSwiper = new Swiper('.buy-main-slide', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var buyMainSwiper = new Swiper('.buy-main-slide2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: buyMainThumbSwiper,
    },
});

var buyMainSwiper3 = new Swiper('.buy-main-slide3', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var buyReviewSwiper = new Swiper('.buy-review-slide', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
            slidesPerView: 2.3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3.3,
            spaceBetween: 50,
        },
    },
});
