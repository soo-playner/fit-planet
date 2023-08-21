<script setup>
// import { ref, defineProps } from "vue";

// const tabs = ["플레이스", "트레이너"];
// const num = ref(1);

// const tab = (idx) => {
//     num.value = idx;
// };

// const props = defineProps({
//     tabs : Array,
//     targetTab : String,
// });
import { onMounted } from 'vue';
import useTabAnimation from '@/assets/js/common';

const {li, nav, clickLiFnc} = useTabAnimation();
const wishList = ["플레이스", "트레이너"];

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <ul class="tab-list">
        <!-- <li 
            v-for="(tabItem, idx) in props.tabs" 
            :key="idx" 
            :class="{ active: tabItem == props.targetTab }" 
            @click="$emit('tabChange', tabItem)">
                {{ tabItem }}
        </li> -->
        <li 
        ref="li" 
        class="faq-li active"
        v-for="wishItem in wishList" 
        :key="wishItem" 
        @click="clickLiFnc">
            {{ wishItem }}
        </li> 
        <span ref="nav" class="nav-indicator"></span>
    </ul>
</template>
