<script setup>
//import faqTab from './components/FAQ_Tab';
import { ref, onMounted } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];
const { li, nav, tabContentWrap, clickLiFnc, touchStart, touchEnd } = useTabAnimation(faqList);
const slideTab = {
    회원정보: ref(true),
    결제: ref(true),
    환불: ref(true),
    후기: ref(true),
    오류: ref(true),
    기타: ref(true),
};

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <div class="FAQ_container main-layout slide-wrap">
        <div class="FAQ_container_inner mob-inner slide-wrap-inner">
            <!-- <faqTab /> -->
            <ul class="faq-tab-list slide-ul">
                <li ref="li" class="faq-li slide-li active" v-for="faqItem in faqList" :key="faqItem" @click="clickLiFnc" :data-menu="faqItem">
                    {{ faqItem }}
                </li>
                <span ref="nav" class="nav-indicator"></span>
            </ul>
            <div ref="tabContentWrap" class="tabContentWrap" @touchstart="touchStart" @touchend="touchEnd">
                <ul ref="tabContent" v-for="faqItem in faqList" :key="faqItem" :id="faqItem" class="con active" :data-menu="faqItem">
                    <li class="q-box">
                        <div class="f-14-400">{{ faqItem }}</div>
                        <span class="arrow" @click="slideTab[faqItem].value = !slideTab[faqItem].value" :class="{ active: slideTab[faqItem].value }"></span>
                    </li>
                    <li class="a-box f-12-400" v-show="slideTab[faqItem].value">
                        <p>sdfsdfsdfsfsff</p>
                        <p>sdfsdfsdfsfsff</p>
                        <p>sdfsdfsdfsfsff</p>
                        <p>sdfsdfsdfsfsff</p>
                        <p>sdfsdfsdfsfsff</p>
                        <p>sdfsdfsdfsfsff</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
