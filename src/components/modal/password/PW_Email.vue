<script setup>
    import {defineProps} from 'vue'

    const {EmailPWFnc} = defineProps({
        EmailPWFnc : Function
    })
</script>

<template>
    <div class="member_alert EmailPW_Alert">
        <div class="overlay" @click="EmailPWFnc"></div>
        <div class="member_alert_inner mob-inner">
            <div class="txt-box f-18-700">
                <p>메일이 전송되었습니다.</p>
                <p>메일함을 확인해주세요!</p>
            </div>
            <router-link to="/login" class="btn1">로그인 하러가기</router-link>
        </div>
    </div>
</template>