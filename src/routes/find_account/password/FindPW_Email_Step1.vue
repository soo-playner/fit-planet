<script>
    // 경로 - /find/pw/email/step1
    
    import PW_Email_Modal from '@/components/modal/password/PW_Email'

    export default {
        name : 'FindPW_Email_Step1',
        components : {
            PW_Email_Modal
        },
        data(){
            return {
                EmailPW : false
            }
        },
        methods : {
            EmailPWFnc : function(){
                this.EmailPW = !this.EmailPW
            }
        }
    }
</script>

<template>
    <div class="member_container pw-email-step1">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="email" id="mb_id" name="mb_id" placeholder="아이디(이메일)">
            </div>
        </div>
        <!-- 메일을 통해 임시 비밀번호 수신 -->
        <button class="next-step-btn f-16-700 mob-inner" @click="EmailPWFnc">임시 비밀번호 요청</button>
    </div>
    <!-- 메일 전송 모달창 -->
    <PW_Email_Modal :class="{ active : EmailPW }" :EmailPWFnc="EmailPWFnc"/>
</template>