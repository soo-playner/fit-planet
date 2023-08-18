<script setup>
import { EffectCoverflow } from "swiper";
import { ref, onMounted } from "vue";

//const active = ref("회원정보");
const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];

// const changeActive = (faqItem) => {
//     active.value = faqItem;
// };

onMounted(() => {
    const faqLi = document.querySelectorAll('.faq-li');
    const nav = document.querySelector('.nav-indicator');

    function navFnc(el){
        // 클릭 시 갖고 있던 active 삭제
        faqLi.forEach((items) => {
            items.classList.remove('active');
        });
        
        // active 클래스를 가진 li 태그의 값 가져오도록
        nav.style.width = `${el.clientWidth}px`;
        nav.style.left = `${el.offsetLeft}px`;
        nav.style.bottom = '0';

        // active 추가
        el.classList.add('active');
    }

    faqLi.forEach((items) => {
        items.addEventListener('click', (e) => { navFnc(e.target) });
        items.classList.contains('active') && navFnc(items);
    });
});
</script>

<template>
    <div class="FAQ_container main-layout">
        <div class="FAQ_container_inner mob-inner">
            <ul class="faq-tab-list">
                <li class="faq-li active" v-for="faqItem in faqList" :key="faqItem">{{ faqItem }}</li> 
                <span class="nav-indicator"></span>
            </ul>
        </div>
    </div>
</template>
