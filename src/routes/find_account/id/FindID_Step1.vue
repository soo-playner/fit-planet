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
    <div class="member_container id-step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="tel" name="mb_phone" id="mb_phone" v-model="form.mb_phone.value" placeholder="휴대폰 번호(-제외)" />
            </div>
            <p class="f-12-400 vail" v-show="form.mb_phone.value && !isFormValid.mb_phone.value">{{ errorText.mb_phone }}</p>
            <div class="form-group" v-if="isGetCertNum">
                <input type="text" name="pass_num" id="pass_num" placeholder="" v-model="certNum" />
                <span class="pass-time f-12-400">{{ countFormatting() }}</span>
            </div>
        </div>
        <!-- <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/find/id/step3')">인증 완료</button> -->
        <button
            v-if="!isGetCertNum"
            class="btn-44-black f-16-700 mob-inner"
            @click="
                isGetCertNum = true;
                startCount();
            "
            :disabled="!nextCondition()"
        >
            인증번호 요청
        </button>
        <button v-if="isGetCertNum" class="btn-44-black f-16-700 mob-inner" @click="getCertNum = true">인증 완료</button>
    </div>
</template>
