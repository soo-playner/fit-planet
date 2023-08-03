<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'FindPW_Step1',
        components : {
            JoinCurrent
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container FindPW_Step1">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호(-제외)">
                </div>
                <div class="pw-guide f-14-400">
                    <p>휴대폰 번호가 변경되었나요?</p>
                    <router-link to="/FindPW_Email_Step1" class="line">이메일로 비밀번호 찾기</router-link>
                </div>
            </div>
            <router-link to="/FIndPW_Step2" class="next-step-btn f-16-700">인증번호 요청</router-link>
        </div>
    </div>
</template>