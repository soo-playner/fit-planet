<script setup>
    import {defineProps} from 'vue'

    const {closeModal} = defineProps({
        closeModal: Function,
    });
</script>

<template>
    <div class="coupon-issue-modal member_alert">
        <div class="overlay" @click="closeModal"></div>
        <div class="coupon-issue-modal-inner member_alert_inner mob-inner">
            <div class="txt-box1">
                <p class="f-16-500 b-txt">쿠폰이 발급되었어요!</p>
                <span class="f-12-400">나에게 맞는 운동을 찾으러 떠나볼까요?</span>      
            </div>
            <button @click="closeModal">확인</button>
        </div>
    </div>
</template>