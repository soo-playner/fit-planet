<script setup>
// import { ref, defineProps } from "vue";

// const tabs = ["공지", "이벤트"];
// const num = ref(1);

// const tab = (idx) => {
//     num.value = idx;
// };

// // props
// const props = defineProps({
//     tabs: Array,
//     targetTab: String,
// });
import { onMounted } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const { li, nav, clickLiFnc } = useTabAnimation();
const eventNewsList = ["공지", "이벤트"];

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <ul class="tab-list">
        <li ref="li" class="tab-li active" v-for="eventNewsItem in eventNewsList" :key="eventNewsItem" @click="clickLiFnc">
            {{ eventNewsItem }}
        </li>
        <span ref="nav" class="nav-indicator"></span>
    </ul>
</template>
