<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'FindPW_Email_Step2',
        components : {
            JoinCurrent
        },
        data(){
            return {
                EmailSend : false
            }
        },
        methods : {
            EmailSendFnc : function(){
                this.EmailSend = !this.EmailSend
            }
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container FindPW_Email_Step2">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="email" id="mb_email" name="mb_email" placeholder="이메일 주소">
                </div>
            </div>
            <router-link to="#" class="next-step-btn f-16-700" @click="EmailSendFnc">인증메일 요청</router-link>
        </div>
        <div class="member_alert EmailSend_Alert" v-bind:class="{ active : EmailSend }">
            <div class="overlay" @click="EmailSendFnc"></div>
            <div class="member_alert_inner mob-inner">
                <div class="f-18-700">
                    <p>메일이 전송되었습니다.</p>
                    <p>메일함을 확인해주세요!</p>
                </div>
                <router-link to="/Login" @click="EmailSendFnc" class="next-step-btn">로그인 하러가기</router-link>
            </div>
        </div>
    </div>
</template>