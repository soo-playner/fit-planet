<script setup>
import { ref } from "vue";

const active = ref("회원정보");
const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];

const changeActive = (faqItem) => {
    active.value = faqItem;
};
</script>

<template>
    <div class="FAQ_container main-layout">
        <div class="FAQ_container_inner mob-inner">
            <ul class="faq-tab-list">
                <li v-for="faqItem in faqList" :key="faqItem" @click="changeActive(faqItem)" :class="{ active: active === faqItem }">
                    <button>{{ faqItem }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>
