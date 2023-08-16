<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>

<template>
    <li>
        <div class="txt-box">
            <p class="f-14-400">{{ props.data.title }}</p>
            <span class="f-12-400">{{ props.data.date }}</span>
        </div>
        <div class="arrow"></div>
    </li>
</template>
