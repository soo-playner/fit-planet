<script setup>
import { ref } from "vue";

// 데이터와 메소드를 초기화합니다.
const EmailSend = ref(false);

const EmailSendFnc = () => {
    EmailSend.value = !EmailSend.value;
};
</script>

<template>
    <div class="member_container FindPW_Email_Step1">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호(-제외)" />
                </div>
                <div class="password-guide f-14-400">
                    휴대폰 번호가 변경되었나요?
                    <router-link to="/find/pw/email/step1">이메일로 비밀번호 찾기</router-link>
                </div>
            </div>
        </div>
        <button class="next-step-btn mob-inner f-16-700" @click="EmailSendFnc">인증번호 요청</button>

        <div class="member_alert EmailSend_Alert" :class="{ active: EmailSend }">
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
