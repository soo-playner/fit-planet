<script setup>
//import faqTab from './components/FAQ_Tab';
import { onMounted } from 'vue';
import useTabAnimation from '@/assets/js/common';

const {li, nav, tabContent, clickLiFnc} = useTabAnimation();
const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];

onMounted(() => {
    clickLiFnc();
});

</script>

<template>
    <div class="FAQ_container main-layout">
        <div class="FAQ_container_inner mob-inner">
            <!-- <faqTab /> -->
            <ul class="faq-tab-list">
                <li 
                ref="li" 
                class="faq-li active"
                v-for="faqItem in faqList" 
                :key="faqItem" 
                @click="clickLiFnc"
                :data-menu="faqItem">
                    {{ faqItem }}
                </li> 
                <span ref="nav" class="nav-indicator"></span>
            </ul>
            <div class="tabContentWrap">
                <ul 
                    v-for="faqItem in faqList"
                    :id="faqItem"
                    class="con"
                    ref="tabContent">
                    <li class="q-box">
                        <div class="f-14-400">{{ faqItem }}</div> <span class="arrow"></span>
                    </li>
                    <li class="a-box f-12-400">
                        <p>sdfsdfsdfsfsff</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
