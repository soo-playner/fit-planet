<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>

<template>
    <li>
        <div class="top-column">
            <div class="coupon-due-date">
                <span>{{ props.data.dueDate }}</span> 남음
            </div>
            <p class="f-16-700">{{ props.data.couponName }}</p>
        </div>
        <div class="bott-column f-12-400">
            <span class="coupon-con">{{ props.data.discount }}</span>
            <span class="coupon-date">{{ props.data.date }}</span>
        </div>
    </li>
</template>
