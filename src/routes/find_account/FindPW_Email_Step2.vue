<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';
    import EmailSend_Alert from '../../components/modal/EmailSend_Alert';

    export default {
        name : 'FindPW_Email_Step2',
        components : {
            JoinCurrent, EmailSend_Alert
        },
        data(){
            return {
                EmailSend_modalOpen : false
            }
        }
    }
</script>

<template>
    <JoinCurrent/>
    <EmailSend_Alert v-if="EmailSend_modalOpen" @EmailSend_modalClose = 'EmailSend_modalOpen = false'/>
    <div class="member_container FindPW_Email_Step2">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="email" id="mb_email" name="mb_email" placeholder="이메일 주소">
                </div>
            </div>
            <router-link to="#" class="next-step-btn f-16-700" @click = "EmailSend_modalOpen = true">인증메일 요청</router-link>
        </div>
    </div>
</template>