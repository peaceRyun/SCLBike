// header 관련 js

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
// gsap.registerPlugin(CSSRulePlugin);

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
// var tlSt = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.subtit',
//         pin: true, // pin the trigger element while active
//         start: 'top 0', // when the top of the trigger hits the top of the viewport
//         end: '+=10', // end after scrolling 500px beyond the start
//         once: true, // 애니메이션을 한 번만 실행
//         toggleActions: 'play none none none', // 도착 지점에서 유지
//         scrub: 6, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         markers: true,
//     },
// });
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
//     .from(cssRulePlugin.getRule('.img-wrap::after'), { opacity: -2, x: -200, duration: 1 })
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
