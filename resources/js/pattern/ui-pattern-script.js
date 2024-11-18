// 플로그인 설치
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// 개발자를 위한 스크롤 값 표시
// window.addEventListener('scroll', function () {
//     const scrollTop = window.scrollY; // 현재 스크롤 위치
//     console.log('Current scroll position:', scrollTop);
// });

// header 관련 js
const headerEl = document.querySelector('#header');
const toTopE1 = document.querySelector('.home-key');
// shop-aside-fixed-icons
const toTopE2 = document.querySelector('.shop-totop');
const fixedIcons = document.querySelector('.shop-aside-fixed-icons');

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
            gsap.to(toTopE1, {
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
            gsap.to(toTopE1, {
                right: '-50px',
                // x: 100,
                duration: 0.2,
            });
        }
        if (toTopE2 && fixedIcons) {
            if (window.scrollY === 0) {
                gsap.to(toTopE2, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        toTopE2.style.display = 'none';
                    },
                });
                gsap.to(fixedIcons, {
                    height: '90px',
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
            } else {
                toTopE2.style.display = 'block';
                gsap.to(toTopE2, {
                    opacity: 1,
                    duration: 0.3,
                });
                gsap.to(fixedIcons, {
                    height: '140px',
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
            }
        }
        // 이전 스크롤 위치 업데이트
        lastScrollY = currentScrollY;
    }, 300)
);
// 상단으로 스크롤 버튼을 클릭하면,
if (toTopE1) {
    toTopE1.addEventListener('click', function () {
        gsap.to(window, {
            scrollTo: 0,
        });
    });
}

// 상단으로 스크롤 버튼을 클릭하면,
if (toTopE2) {
    toTopE2.addEventListener('click', function () {
        gsap.to(window, {
            scrollTo: 0,
        });
    });
}

const fadeElement = document.querySelector('.fade');
// intro 페이지를 지난 상태에서 스크롤을 올리면 배경색이 하얀색으로 바뀌게 설정
if (fadeElement) {
    gsap.to('#header', {
        backgroundColor: '#ffffff',
        duration: 1,
        scrollTrigger: {
            trigger: '.fade',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'reverse play reverse play',
            markers: false,
        },
    });
}

$('.all-menu').click(function () {
    $('#header').toggleClass('active');
    $('.gnb__depth1 > li > a > span').toggleClass('active');
});

// hamburger 메뉴 애니메이션
function myFunction(x) {
    x.classList.toggle('change');
}

// .lang__btn 을 클릭했을 때
// .lang에 .active 추가한다
$('.lang__btn').click(function () {
    $('.lang__list').show();
});

$('.lang__list li').click(function () {
    $('.lang__list').hide();
});

// ---------------------------------------------------------------------
// ani
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

// ani-buy
document.querySelectorAll('.ani-shop').forEach(function (item) {
    ScrollTrigger.create({
        trigger: item,
        start: 'top 65%',
        end: 'bottom 50%',
        once: false,
        toggleClass: {
            targets: item,
            className: 'on',
        },
        markers: false,
    });
});

// snb
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

// clicked
const buttons = document.querySelectorAll('.art2-btn'); // 모든 버튼 선택
const content = document.querySelector('.art2-detail-wrap');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // 모든 버튼의 활성화 클래스 제거
        buttons.forEach((btn) => btn.classList.remove('clicked'));
        // 클릭된 버튼에만 활성화 클래스 추가
        button.classList.add('clicked');

        // 클래스명을 기준으로 내용 변경
        if (button.classList.contains('art2-btn1')) {
            content.innerHTML = `
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img3-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Phantom FS<br />Shorts, Yellow</p></a>
            <a href="./buying.html"><p class="art2-price">1,950,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img3-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Phantom FS<br />Shorts, Yellow</p></a>
            <a href="./buying.html"><p class="art2-price">1,950,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img3-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Phantom FS<br />Shorts, Yellow</p></a>
            <a href="./buying.html"><p class="art2-price">1,950,000원</p></a>
        </div>
  `;
        } else if (button.classList.contains('art2-btn2')) {
            content.innerHTML = `
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img4-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Appalanchia M55<br />Shorts, Black</p></a>
            <a href="./buying.html"><p class="art2-price">630,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img4-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Appalanchia M55<br />Shorts, Black</p></a>
            <a href="./buying.html"><p class="art2-price">630,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img4-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Appalanchia M55<br />Shorts, Black</p></a>
            <a href="./buying.html"><p class="art2-price">630,000원</p></a>
        </div>
  `;
        } else if (button.classList.contains('art2-btn3')) {
            content.innerHTML = `
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img5-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Stinger 100<br />Shorts, White</p></a>
            <a href="./buying.html"><p class="art2-price">395,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img5-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Stinger 100<br />Shorts, White</p></a>
            <a href="./buying.html"><p class="art2-price">395,000원</p></a>
        </div>
        <div class="art2-detail-wrap__mc">
            <img src="../resources/img/pattern/shopping/shop-img5-1.jpg" alt="예시" />
            <a href="./buying.html"><p class="art2-mc-txt1">Stinger 100<br />Shorts, White</p></a>
            <a href="./buying.html"><p class="art2-price">395,000원</p></a>
        </div>
  `;
        } else {
            content.innerHTML = '<p>Choose a button to see the content!</p>';
        }
    });
});
