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

gsap.to('#header', {
    backgroundColor: '#ffffff', // 원하는 배경색으로 변경
    duration: 1, // 애니메이션 지속 시간
    scrollTrigger: {
        trigger: '.fade', // 애니메이션을 시작할 요소
        start: 'top 100%', // 화면의 80% 지점에 도달했을 때 시작
        end: 'bottom 20%',
        toggleActions: 'reverse play reverse play', // 스크롤 방향에 따라 동작 설정
        markers: true, // 스크롤 지점을 시각적으로 표시 (개발용)
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

// loading 관련 js by gpt
// 페이지가 모두 로드된 후 로딩 화면을 제거
// window.addEventListener('load', function () {
//     document.getElementById('loading').style.display = 'none';
//     document.querySelector('.content').style.display = 'block';
// });

// 플로그인 설치
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// 스크롤 트리거 변수 설정
var tlS1Mt = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-1 .main-tit',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=10', // end after scrolling 500px beyond the start
        once: true, // 애니메이션을 한 번만 실행
        toggleActions: 'play none none none', // 도착 지점에서 유지
        scrub: 6, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
    },
});
var tlSt = gsap.timeline({
    scrollTrigger: {
        trigger: '.subtit',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=10', // end after scrolling 500px beyond the start
        once: true, // 애니메이션을 한 번만 실행
        toggleActions: 'play none none none', // 도착 지점에서 유지
        scrub: 6, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
    },
});
var tlS2Mt = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-2 .main-tit',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=10', // end after scrolling 500px beyond the start
        once: true, // 애니메이션을 한 번만 실행
        toggleActions: 'play none none none', // 도착 지점에서 유지
        scrub: 6, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
    },
});
var tlS3Mt = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-3 .main-tit',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=10', // end after scrolling 500px beyond the start
        once: true, // 애니메이션을 한 번만 실행
        toggleActions: 'play none none none', // 도착 지점에서 유지
        scrub: 6, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
    },
});

// about페이지 section1 관련
// title
tlS1Mt
    .from('.sec-1__letter1', { opacity: 0, duration: 1 })
    .from('.sec-1__letter3', { opacity: 0, duration: 1 })
    .from('.sec-1__letter2', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-1__letter4', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-1 .subtit', { opacity: -4, y: -100, duration: 1 });

// main01-list
// tlSt.from('.num1, .title1', { opacity: -2, duration: 1 })
//     .from('.bike-oj-1', { opacity: 0, y: 200, duration: 1 });

tlS2Mt
    .from('.sec-2__letter1', { opacity: 0, duration: 1 })
    .from('.sec-2__letter3', { opacity: 0, duration: 1 })
    .from('.sec-2__letter2', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-2__letter4', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-2 .subtit', { opacity: -4, y: -100, duration: 1 });

tlS3Mt
    .from('.sec-3__letter1', { opacity: 0, duration: 1 })
    .from('.sec-3__letter3', { opacity: 0, duration: 1 })
    .from('.sec-3__letter2', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-3__letter4', { opacity: -4, x: -200, duration: 1 })
    .from('.sec-3 .subtit', { opacity: -4, y: -100, duration: 1 });
