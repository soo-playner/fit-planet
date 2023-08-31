<script setup>
    
</script>

<template>
    <div class="AccountDelete-modal member_alert">
        <div class="overlay" @click="$router.push('/Login')"></div>
        <div class="AccountDelete-modal-inner mob-inner member_alert_inner">
            <div class="txt-box1">
                <div class="f-18-700 b-txt">탈퇴되었습니다.</div>
                <p class="f-14-400">
                    <span>핏플래닛이 그리워지면</span>
                    <span>언제든지 다시 돌아와주세요!</span>
                    <span>더 멋진 모습으로 기다리고 있을게요</span>
                </p>
            </div>
            <router-link to="/Login" class="btn1">See ya 핏플래닛!</router-link>
        </div>
    </div>
</template>