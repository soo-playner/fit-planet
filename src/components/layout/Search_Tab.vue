<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    tabs: Array,
    targetTab: String,
});

const emit = defineEmits();

const num = ref(1);

const tab = (idx) => {
    num.value = idx;
};

const changeTab = (tabItem) => {
    tab(tabItem);
    emit("tabChange", tabItem);
};
</script>

<template>
    <li v-for="(tabItem, idx) in tabs" :key="idx" :class="{ active: tabItem === targetTab }" @click="changeTab(tabItem)">
        <button>{{ tabItem }}</button>
    </li>
</template>
