<script setup>
import { onMounted } from 'vue';
import useTabAnimation from '@/assets/js/common';

const {li, nav, clickLiFnc} = useTabAnimation();
const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <ul class="faq-tab-list">
        <li 
        ref="li" 
        class="faq-li active"
        v-for="faqItem in faqList" 
        :key="faqItem" 
        @click="clickLiFnc"
        data-menu="faqItem in faqList">
            {{ faqItem }}
        </li> 
        <span ref="nav" class="nav-indicator"></span>
    </ul>
</template>