<script>
    export default {
        name : 'EmailSend_Alert'
    }
</script>

<template>
    <div class="member_alert EmailSend_Alert">
        <div class="overlay" @click = "$emit('EmailSend_modalClose')"></div>
        <div class="member_alert_inner mob-inner">
            <div class="f-18-700">
                <p>메일이 전송되었습니다.</p>
                <p>메일함을 확인해주세요!</p>
            </div>
            <router-link to="/Login" @click = "$emit('EmailSend_modalClose')" class="next-step-btn">로그인 하러가기</router-link>
        </div>
    </div>
</template>