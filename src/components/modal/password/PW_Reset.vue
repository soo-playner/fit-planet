<script setup>
    import {defineProps} from 'vue'

    const {ResetPWFnc} = defineProps({
        ResetPWFnc : Function
    })
</script>

<template>
    <div class="member_alert ResetPW_Alert">
        <div class="overlay" @click="ResetPWFnc"></div>
        <div class="member_alert_inner mob-inner">
            <div class="txt-box f-18-700">
                <p>비밀번호가</p>
                <p>재설정 되었습니다</p>
            </div>
            <router-link to="/login" class="btn1">확인</router-link>
        </div>
    </div>
</template>