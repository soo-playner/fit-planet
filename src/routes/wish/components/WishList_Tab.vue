<script setup>
    import { ref, defineProps } from "vue";

    const tabs = ["플레이스", "트레이너"];
    const num = ref(1);

    const tab = (idx) => {
        num.value = idx;
    };

    const props = defineProps({
        tabs : Array,
        targetTab : String,
    });
    
</script>

<template>
    <div class="WishListTab_container">
        <div class="WishListTab_container_inner mob-inner">
            <ul class="tab-list">
                <li v-for="(tabItem, idx) in props.tabs" :key="idx" :class="{ active: tabItem == props.targetTab }" @click="$emit('tabChange', tabItem)">
                    <button>{{ tabItem }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>
