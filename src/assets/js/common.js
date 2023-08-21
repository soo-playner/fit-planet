import { ref } from 'vue'

// 탭 애니메이션 -> 참고 페이지 faq
export default function useTabAnimation() {
    const li = ref(null)
    const nav = ref(null)
    const tabContent = ref(null)

    function clickLiFnc() {
        function navFnc(el){
            // 클릭 시 갖고 있던 active 삭제
            li.value.forEach((items) => {
                items.classList.remove('active');
            });
            
            // active 클래스를 가진 li 태그의 값 가져오도록
            nav.value.style.width = `${el.clientWidth}px`;
            nav.value.style.left = `${el.offsetLeft}px`;
            nav.value.style.bottom = '0';

            // active 추가
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