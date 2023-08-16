<script setup>
import { ref, defineProps } from "vue";

const tabs = ["공지", "이벤트"];
const num = ref(1);

const tab = (idx) => {
    num.value = idx;
};

// props
const props = defineProps({
    tabs: Array,
    targetTab: String,
});
</script>

<template>
    <div class="EventNewsTab_container">
        <div class="EventNewsTab_container_inner mob-inner">
            <ul class="tab-list">
                <li v-for="(tabItem, idx) in tabs" :key="idx" :class="{ active: tabItem == targetTab }" @click="$emit('tabChange', tabItem)">
                    <button>{{ tabItem }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>
