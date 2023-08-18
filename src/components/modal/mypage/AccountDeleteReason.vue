<script setup>
    import { defineProps } from 'vue'

    const { confirmReason } = defineProps({
        confirmReason: Function
    })
</script>

<template>
    <div class="AccountDelete-reason-modal member_alert" >
        <div class="overlay" @click="confirmReason"></div>
        <div class="AccountDelete-reason-modal-inner mob-inner member_alert_inner">
            <p class="f-18-700">탈퇴 이유를 선택해주세요</p>
            <button class="f-16-700" @click="confirmReason">확인</button>
        </div>
    </div>
</template>