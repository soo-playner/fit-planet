<script setup>
//import faqTab from './components/FAQ_Tab';
import { onMounted } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const { li, nav, tabContentWrap, clickLiFnc, touchFnc } = useTabAnimation();
const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];

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
            <div class="tabContentWrap" ref="tabContentWrap" @click="touchFnc">
                <ul v-for="faqItem in faqList" :key="faqItem" :id="faqItem" class="con">
                    <li class="q-box">
                        <div class="f-14-400">{{ faqItem }}</div>
                        <span class="arrow"></span>
                    </li>
                    <li class="a-box f-12-400">
                        <p>sdfsdfsdfsfsff</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
