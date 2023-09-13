<script setup>
import { onMounted } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const { li, nav, clickLiFnc } = useTabAnimation();
const wishList = ["플레이스", "트레이너"];

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <ul class="tab-list">
        <li ref="li" class="faq-li active" v-for="wishItem in wishList" :key="wishItem" @click="clickLiFnc">
            {{ wishItem }}
        </li>
        <span ref="nav" class="nav-indicator"></span>
    </ul>
</template>
