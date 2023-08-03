<script>
    export default {
        name : 'NotFind_Member'
    }
</script>

<template>
    <div class="member_alert NotFind_Member">
        <div class="overlay" @click = "$emit('')"></div>
        <div class="member_alert_inner mob-inner">
            <div class="f-18-700">
                <p>가입된 회원 정보가 없습니다.</p>
            </div>
            <router-link to="/Login" @click = "$emit('')" class="next-step-btn">확인</router-link>
        </div>
    </div>
</template>