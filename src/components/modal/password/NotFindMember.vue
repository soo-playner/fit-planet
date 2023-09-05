<script setup></script>

<template>
    <div class="member_alert notFind-member">
        <div class="overlay" @click="ResetPWFnc"></div>
        <div class="member_alert_inner mob-inner notFind-member-inner">
            <div class="txt-box f-18-700">
                가입된 회원 정보가 없습니다.
            </div>
            <router-link to="/login" class="btn1">확인</router-link>
        </div>
    </div>
</template>