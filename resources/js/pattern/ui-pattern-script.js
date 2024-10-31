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

// about페이지 section1 관련
gsap.from('.sec-1__letter1', { opacity: 0, duration: 2 });
gsap.from('.sec-1__letter3', { opacity: 0, duration: 2, delay: 1 });
gsap.from('.sec-1__letter2', { opacity: 0, x: -200, duration: 1, delay: 2 });
gsap.from('.sec-1__letter4', { opacity: 0, x: -200, duration: 1, delay: 3 });
