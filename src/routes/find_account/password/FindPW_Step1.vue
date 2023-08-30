<script setup>
import { ref, watch } from "vue";
import useValidations from "@/composables/useValidations";
import axios from "axios";

const { form, isFormValid, errorText, nextCondition } = useValidations(["mb_phone"]);

const isGetCertNum = ref(false);
const certNum = ref(null);
const timeCount = ref({ min: 1, sec: 0 });
const startCount = () => {
    if (!timeCount.value.min && !timeCount.value.sec) {
        isGetCertNum.value = false;
        timeCount.value = { min: 1, sec: 0 };
        return;
    }
    setTimeout(() => {
        if (timeCount.value.sec === 0) {
            return (timeCount.value = { min: timeCount.value.min - 1, sec: 59 });
        } else {
            timeCount.value = { ...timeCount.value, sec: timeCount.value.sec - 1 };
        }
    }, 1000);
};
const countFormatting = () => {
    let min = "0" + timeCount.value.min;
    let sec = timeCount.value.sec > 9 ? timeCount.value.sec : "0" + timeCount.value.sec;
    return min + ":" + sec;
};
const getCertNum = async () => {
    const res = await axios.post("api", { mb_phone: form.mb_phone.value });
};
const submitData = async () => {
    const res = await axios.post("api", { cert_num: certNum.value });
};
watch(timeCount, () => {
    if (isGetCertNum.value) startCount();
});
</script>

<template>
    <div class="member_container FindPW_Email_Step1">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="tel" name="mb_phone" id="mb_phone" v-model="form.mb_phone.value" placeholder="휴대폰 번호(-제외)" />
                </div>
                <p class="f-12-400 vail" v-show="form.mb_phone.value && !isFormValid.mb_phone.value">{{ errorText.mb_phone }}</p>
                <div class="password-guide f-14-400" v-if="!isGetCertNum">
                    휴대폰 번호가 변경되었나요?
                    <router-link to="/find/pw/email/step1">이메일로 비밀번호 찾기</router-link>
                </div>
                <div class="form-group" v-if="isGetCertNum">
                    <input type="text" name="pass_num" id="pass_num" placeholder="" v-model="certNum" />
                    <span class="pass-time f-12-400">{{ countFormatting() }}</span>
                </div>
            </div>
        </div>
        <button
            v-if="!isGetCertNum"
            class="next-step-btn f-16-700 mob-inner"
            @click="
                isGetCertNum = true;
                startCount();
            "
            :disabled="!nextCondition()"
        >
            인증번호 요청
        </button>
        <button v-if="isGetCertNum" class="next-step-btn f-16-700 mob-inner" @click="getCertNum = true">인증 완료</button>

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
