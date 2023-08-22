import { ref } from 'vue'

/******************************************
탭 애니메이션
-> 사용 페이지 faq / Event-news

사용 시 아래와 같이 tabContentWrap 로 감싸주고,
<div class="tabContentWrap">
    <ul></ul>
    <ul></ul>
</div>
상위 _inner 클래스에 가상요소 css 적용해주기 -> commnuity.scss FAQ_container 참조
******************************************/
export default function useTabAnimation() {
    const li = ref(null)
    const nav = ref(null)

    function clickLiFnc() {
        function navFnc(el){
            // 클릭 시 각 li 태그의 active 클래스 제거
            li.value.forEach((items, index) => {
                items.classList.remove('active');
                // (컨텐츠의 width 값 * 클릭한 li 태그의 index)로 슬라이드 되도록
                items.onclick = () => {
                    const tabContentWrap = document.querySelector('.tabContentWrap');
                    tabContentWrap.style.transform = `translate3d(${-tabContentWrap.clientWidth * index}px, 0, 0)`;
                }
            });
            
            // active 클래스를 가진 li 태그의 값 가져오도록
            nav.value.style.width = `${el.clientWidth}px`;
            nav.value.style.left = `${el.offsetLeft}px`;
            nav.value.style.bottom = '0';

            // li 태그 active 클래스 추가
            el.classList.add('active');
        }

        li.value.forEach((items) => {
            items.addEventListener('click', (e) => { navFnc(e.target) });
            items.classList.contains('active') && navFnc(items);
        });
    }

    // 컴포넌트에서 애니메이션 적용할 요소에다가 return한 변수를 ref값으로 부여
    return {li, nav, clickLiFnc}
}