<script>
    // url - /find/pw/step1
    export default {
        name : 'FindPW_Step1',
    }
</script>

<template>
    <div class="member_container pw-step1">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호(-제외)">
            </div>
            <div class="pw-guide f-14-400">
                <p>휴대폰 번호가 변경되었나요?</p>
                <router-link to="/find/pw/email/step1" class="line">이메일로 비밀번호 찾기</router-link>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/find/pw/step2')">인증번호 요청</button>
    </div>
</template>