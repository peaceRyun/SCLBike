// 플로그인 설치
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// 개발자를 위한 스크롤 값 표시
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY; // 현재 스크롤 위치
    console.log('Current scroll position:', scrollTop);
});

// header 관련 js
const headerEl = document.querySelector('#header');
const toTopEl = document.querySelector('.home-key');

let lastScrollY = window.scrollY;

window.addEventListener(
    'scroll',
    _.throttle(function () {
        // 현재 스크롤 위치
        const currentScrollY = window.scrollY;

        // 스크롤 다운
        if (currentScrollY > lastScrollY) {
            // Badge 요소 숨기기!
            // gsap.to(요소, 시간, 옵션);
            gsap.to(headerEl, {
                opacity: 0,
                display: 'none',
                duration: 0.8,
            });
            // 상단으로 스크롤 버튼 보이기!
            gsap.to(toTopEl, {
                right: '30px',
                // x: 0,
                duration: 0.2,
            });

            // 스크롤 업
        } else {
            // Badge 요소 보이기!
            gsap.to(headerEl, {
                opacity: 1,
                display: 'block',
                duration: 0.8,
            });
            // 상단으로 스크롤 버튼 숨기기!
            gsap.to(toTopEl, {
                right: '-50px',
                // x: 100,
                duration: 0.2,
            });
        }

        // 이전 스크롤 위치 업데이트
        lastScrollY = currentScrollY;
    }, 300)
);
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(1초 동안) 이동.
    gsap.to(window, {
        scrollTo: 0,
    });
});

// intro 페이지를 지난 상태에서 스크롤을 올리면 배경색이 하얀색으로 바뀌게 설정
gsap.to('#header', {
    backgroundColor: '#ffffff', // 원하는 배경색으로 변경
    duration: 1, // 애니메이션 지속 시간
    scrollTrigger: {
        trigger: '.fade', // 애니메이션을 시작할 요소
        start: 'top 100%', // 화면의 80% 지점에 도달했을 때 시작
        end: 'bottom 20%',
        toggleActions: 'reverse play reverse play', // 스크롤 방향에 따라 동작 설정
        markers: false, // 스크롤 지점을 시각적으로 표시 (개발용)
    },
});

// .all-menu 를 클릭했을 때
$('.all-menu').click(function () {
    $('#nav-all').addClass('active');
});

// #nav-all .close를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$('#nav-all .close').click(function () {
    $('#nav-all').removeClass('active');
});

//depth 1 에 마우스를 올려놨을 떄
// id값이 header인 아이에게 active 추가해라
$('.gnb__depth1').mouseenter(function () {
    $('#header').addClass('active');
});

//depth 1 에 마우스를 안 올려놨을때
// id값이 header인 아이에게 active 제거해라
$('.gnb__depth1').mouseleave(function () {
    $('#header').removeClass('active');
});

// .lang__btn 을 클릭했을 때
// .lang에 .active 추가한다
$('.lang__btn').click(function () {
    $('.lang__list').show();
});

$('.lang__list li').click(function () {
    $('.lang__list').hide();
});

// ---------------------------------------------------------------------
// ani 관련
document.querySelectorAll('.ani').forEach(function (item) {
    ScrollTrigger.create({
        trigger: item,
        start: 'top 65%',
        end: '+=9999',
        once: true,
        toggleClass: {
            targets: item,
            className: 'on',
        },
        markers: false,
    });
});

// snb 관련
document.querySelectorAll('.ani-snb').forEach(function (item) {
    const targ = document.querySelector('.qm-list');

    ScrollTrigger.create({
        trigger: item,
        start: 'bottom 35%',
        end: '+=9999',
        toggleClass: {
            targets: targ,
            className: 'on',
        },
        markers: false,
    });
});
document.querySelectorAll('.ani-snb1').forEach(function (item) {
    const targ = document.querySelector('.qm-list__1');

    ScrollTrigger.create({
        trigger: item,
        start: 'top bottom',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'on',
        },
        markers: false,
    });
});
document.querySelectorAll('.ani-snb2').forEach(function (item) {
    const targ = document.querySelector('.qm-list__2');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'on',
        },
        markers: false,
    });
});
document.querySelectorAll('.ani-snb3').forEach(function (item) {
    const targ = document.querySelector('.qm-list__3');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'on',
        },
        markers: false,
    });
});
document.querySelectorAll('.ani-snb4').forEach(function (item) {
    const targ = document.querySelector('.qm-list__4');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'on',
        },
        markers: false,
    });
});
document.querySelectorAll('.intro-slide-cont.ani-snb1').forEach(function (item) {
    const targ = document.querySelector('.qm-list');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 20%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'white',
        },
        markers: false,
    });
});
document.querySelectorAll('.banner1.ani-snb2').forEach(function (item) {
    const targ = document.querySelector('.qm-list');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'white',
        },
        markers: false,
    });
});
document.querySelectorAll('.banner2.ani-snb3').forEach(function (item) {
    const targ = document.querySelector('.qm-list');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: {
            targets: targ,
            className: 'white',
        },
        markers: false,
    });
});
