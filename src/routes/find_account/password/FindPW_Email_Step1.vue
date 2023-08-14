<script>
    // 경로 - /find/pw/email/step1
    export default {
        name : 'FindPW_Email_Step1',
    }
</script>

<template>
    <div class="member_container FindPW_Email_Step1">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="email" id="mb_id" name="mb_id" placeholder="아이디(이메일)">
                </div>
            </div>
            <router-link to="/FIndPW_Email_Step2" class="next-step-btn f-16-700">임시 비밀번호 요청</router-link>
        </div>
    </div>
</template>