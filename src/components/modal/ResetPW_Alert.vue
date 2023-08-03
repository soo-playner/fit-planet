<script>
    export default {
        name : 'ResetPW_Alert'
    }
</script>

<template>
    <div class="member_alert ResetPW_Alert">
        <div class="overlay" @click = "$emit('Reset_modalClose')"></div>
        <div class="member_alert_inner mob-inner">
            <div class="f-18-700">
                <p>비밀번호가</p>
                <p>재설정 되었습니다</p>
            </div>
            <router-link to="/Login" @click = "$emit('Reset_modalClose')" class="next-step-btn">확인</router-link>
        </div>
    </div>
</template>