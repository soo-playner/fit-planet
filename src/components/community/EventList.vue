<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>

<template>
    <li><img :src="props.data.image" :alt="props.data.image" /></li>
</template>
