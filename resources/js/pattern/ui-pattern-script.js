// 플로그인 설치
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

console.log(window.location.pathname);

// 로딩 진행률을 관리하는 클래스
class LoadingScreen {
    constructor() {
        this.progressBar = document.querySelector('.loading-progress');
        this.progressText = document.querySelector('.progressText');
        this.loadingScreen = document.querySelector('.loadingScreen');
        this.progress = 0;
        this.initialize();
    }

    // 초기화 및 이벤트 리스너 설정
    initialize() {
        this.trackLoadingProgress();

        // 페이지가 완전히 로드되었을 때
        window.addEventListener('load', () => {
            this.setProgress(100);
            this.hideLoadingScreen();
        });
    }

    // 로딩 진행률 추적
    trackLoadingProgress() {
        const resources = document.querySelectorAll('img, video, script, link[rel="stylesheet"]');
        let loadedResources = 0;
        const totalResources = resources.length;

        // 이미 로드된 리소스 확인
        resources.forEach((resource) => {
            if (resource.complete || resource.readyState === 4) {
                loadedResources++;
                this.updateProgress(loadedResources, totalResources);
            }

            // 리소스 로드 완료 이벤트
            resource.addEventListener('load', () => {
                loadedResources++;
                this.updateProgress(loadedResources, totalResources);
            });

            // 리소스 로드 실패 이벤트
            resource.addEventListener('error', () => {
                loadedResources++;
                this.updateProgress(loadedResources, totalResources);
            });
        });
    }

    // 진행률 업데이트
    updateProgress(loaded, total) {
        const progress = Math.round((loaded / total) * 100);
        this.setProgress(progress);

        if (progress === 100) {
            this.hideLoadingScreen();
        }
    }

    // 진행률 표시 업데이트
    setProgress(progress) {
        this.progress = progress;
        this.progressBar.style.width = `${progress}%`;
        this.progressText.textContent = `${progress}%`;
    }

    // 로딩 화면 숨기기
    hideLoadingScreen() {
        setTimeout(() => {
            this.loadingScreen.style.opacity = '0';
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 500); // 페이드 아웃 애니메이션 후 제거
        }, 500); // 잠시 대기 후 페이드 아웃 시작
    }
}

// 페이지 로드 시 로딩 스크린 초기화
document.addEventListener('DOMContentLoaded', () => {
    new LoadingScreen();
});
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
        const currentScrollY = window.scrollY;

        const isWideScreen = window.innerWidth >= 1024;

        if (isWideScreen) {
            if (currentScrollY > lastScrollY) {
                // 스크롤 다운
                gsap.to(headerEl, {
                    opacity: 0,
                    display: 'none',
                    duration: 0.5,
                });
                // '상단으로 스크롤' 버튼 보이기
                gsap.to(toTopE1, {
                    right: '30px',
                    duration: 0.2,
                });
            } else {
                // 스크롤 업
                gsap.to(headerEl, {
                    opacity: 1,
                    display: 'block',
                    duration: 0.3,
                });
                // '상단으로 스크롤' 버튼 숨기기
                gsap.to(toTopE1, {
                    right: '-50px',
                    duration: 0.2,
                });
            }
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

const langBtn = document.querySelector('.lang__btn');
const langList = document.querySelector('.lang__list');

langList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const selectedLang = event.target.textContent;
        langBtn.textContent = selectedLang;
    }
});

// ============================================================
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
    const targ = document.querySelector('.quick-menu');

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
// 영역별로 글씨 하얗게 켰다 끄기
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

//buying - clicked
const btns = document.querySelectorAll('.buy-btn-size'); // 모든 버튼 선택

btns.forEach((button) => {
    button.addEventListener('click', () => {
        // 모든 버튼의 활성화 클래스 제거
        btns.forEach((btn) => btn.classList.remove('selected'));
        // 클릭된 버튼에만 활성화 클래스 추가
        button.classList.add('selected');
    });
});

// buying- color-clicked
const btns1 = document.querySelectorAll('.btn-circle'); // 모든 버튼 선택

btns1.forEach((button) => {
    button.addEventListener('click', () => {
        // 모든 버튼의 활성화 클래스 제거
        btns1.forEach((btn) => btn.classList.remove('color-clicked'));
        // 클릭된 버튼에만 활성화 클래스 추가
        button.classList.add('color-clicked');
    });
});

//buying- more-clicked
document.querySelectorAll('.buy-more-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const targetClass = button.dataset.target; // data-target 값 가져오기
        const content = document.querySelector(`.${targetClass}`); // 관련 콘텐츠 찾기
        const plusIcon = button.querySelector('.la-plus-circle');
        const minusIcon = button.querySelector('.la-minus-circle');

        // 콘텐츠 상태 토글
        const isContentVisible = content.classList.toggle('more-clicked');

        // 아이콘 상태 업데이트
        plusIcon.style.display = isContentVisible ? 'none' : 'inline';
        minusIcon.style.display = isContentVisible ? 'inline' : 'none';

        // 콘텐츠 보이기/숨기기
        content.style.display = isContentVisible ? 'block' : 'none';
    });
});
