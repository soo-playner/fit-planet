import { ref } from "vue";

/******************************************
탭 애니메이션
-> 사용 페이지 faq / Event-news / searchResult / wishlist

사용 시 아래와 같은 구조로 감싸주기 -> css는 commonLayout.scss(탭 애니메이션 레이아웃) 참조
<div class="slide-wrap">
    <div class="slide-wrap-inner">
        // 탭할 태그
        <ul class="slide-ul">
            <li ref="li" class="slide-li"></li>
            <span ref="nav" class="nav-indicator"></span>
        </ul>
        // 탭에 맞는 컨텐츠 노출 시 감싸는 태그
        <div ref="tabContentWrap" class="tabContentWrap">
            // 탭에 맞는 컨텐츠 태그 , ul 또는 div 사용
            <ul></ul>
            <ul></ul>
        </div>
    </div>
</div>
******************************************/
export default function useTabAnimation(faqList) {
    const li = ref(null);
    const nav = ref(null);
    const tabContentWrap = ref(null);
    let curPos = 0;
    let position = 0;
    // let start_x, end_x;
    const start_x = ref(null);
    const end_x = ref(null);
    //let contentWidth = tabContentWrap.value.clientWidth;

    function clickLiFnc() {
        function navFnc(el) {
            // 클릭 시 각 li 태그의 active 클래스 제거
            li.value.forEach((items, index) => {
                items.classList.remove("active");
                // (컨텐츠의 width 값 * 클릭한 li 태그의 index)로 슬라이드 되도록
                items.onclick = () => {
                    tabContentWrap.value.style.transform = `translate3d(${-tabContentWrap.value.clientWidth * index}px, 0, 0)`;
                };
            });

            // active 클래스를 가진 li 태그의 값 가져오도록
            nav.value.style.width = `${el.clientWidth}px`;
            nav.value.style.left = `${el.offsetLeft}px`;
            nav.value.style.bottom = "0";

            // li 태그 active 클래스 추가
            el.classList.add("active");
            curPos = li.value.indexOf(el);
        }

        li.value.forEach((items) => {
            items.addEventListener("click", (e) => {
                navFnc(e.target);
            });
            items.classList.contains("active") && navFnc(items);
        });
    }

    function navFnc() {
        // 클릭 시 각 li 태그의 active 클래스 제거
        li.value.forEach((items) => {
            items.classList.remove("active");
            // (컨텐츠의 width 값 * 클릭한 li 태그의 index)로 슬라이드 되도록
            items.onclick = () => {
                tabContentWrap.value.style.transform = `translate3d(${-tabContentWrap.value.clientWidth * curPos}px, 0, 0)`;
            };
        });

        // active 클래스를 가진 li 태그의 값 가져오도록
        nav.value.style.width = `${li.value[curPos].clientWidth}px`;
        nav.value.style.left = `${li.value[curPos].offsetLeft}px`;
        nav.value.style.bottom = "0";

        // li 태그 active 클래스 추가
        li.value[curPos].classList.add("active");
    }

    function prev() {
        if (curPos > 0) {
            curPos = curPos - 1;
            position = tabContentWrap.value.clientWidth * curPos;
            tabContentWrap.value.style.transform = `translateX(${-position}px)`;

            li.value.forEach((items) => {
                items.addEventListener("click", () => {
                    navFnc();
                });
                items.classList.contains("active") && navFnc(items);
            });
        }
    }
    function next() {
        if (curPos < faqList.length - 1) {
            position = tabContentWrap.value.clientWidth * (curPos + 1);
            tabContentWrap.value.style.transform = `translateX(${-position}px)`;
            curPos = curPos + 1;

            li.value.forEach((items) => {
                items.addEventListener("click", () => {
                    navFnc(li.value[curPos]);
                });
                items.classList.contains("active") && navFnc(items);
            });
        }
    }
    function touchStart(e) {
        start_x.value = e.touches[0].pageX;
    }
    function touchEnd(e) {
        end_x.value = e.changedTouches[0].pageX;
        if (start_x.value > end_x.value) {
            next();
        } else if (start_x.value < end_x.value) {
            prev();
        }
    }

    // 컴포넌트에서 애니메이션 적용할 요소에다가 return한 변수를 ref값으로 부여
    return { li, nav, tabContentWrap, clickLiFnc, touchStart, touchEnd };
}

/******************************************
모바일 100vh 스크롤 이슈 
******************************************/
// css는 height:calc(var(--vh, 1vh) * 100); 작성해주면 됨
let vh = 0;
vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
