<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>

<template>
    <li><img :src="data.image" :alt="data.image" /></li>
</template>
