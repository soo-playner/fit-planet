<script setup>
import { ref } from "vue";
import useValidations from "@/composables/useValidations";
import PW_Reset_Modal from "@/components/modal/password/PW_Reset";
import axios from "axios";

const { form, isFormValid, errorText, isPwdVisible, isPwdConfirmedVisible, showPwd, showPwdConfirmed, nextCondition } = useValidations(["mb_password", "mb_password_cfm"]);

// 데이터와 메소드를 초기화합니다.
const ResetPW = ref(false);

const ResetPWFnc = () => {
    ResetPW.value = !ResetPW.value;
};

const submitData = async () => {
    // const res = await axios.post("api", { mb_password: form.mb_password.value });
    // if (res.data.result) ResetPW.value = true;
    ResetPW.value = true;
};
</script>

<template>
    <div class="member_container pw-reset">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input v-model="form.mb_password.value" :type="isPwdVisible ? 'text' : 'password'" name="mb_password" id="mb_password" placeholder="비밀번호" required />
                <div class="etc">
                    <span class="pw-exposure" @click="showPwd" :class="{ active: isPwdVisible }">
                        <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" />
                    </span>
                    <span class="check-confirm" :class="{ active: isFormValid.mb_password.value }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p v-show="form.mb_password.value && !isFormValid.mb_password.value">{{ errorText.mb_password }}</p>
            <div class="form-group">
                <input v-model="form.mb_password_cfm.value" :type="isPwdConfirmedVisible ? 'text' : 'password'" name="mb_password_cfm" id="mb_password_cfm" placeholder="비밀번호 확인" required />
                <div class="etc">
                    <span class="pw-exposure" @click="showPwdConfirmed" :class="{ active: isPwdConfirmedVisible }">
                        <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" />
                    </span>
                    <span class="check-confirm" :class="{ active: isFormValid.mb_password_cfm.value }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p v-show="form.mb_password_cfm.value && !isFormValid.mb_password_cfm.value">{{ errorText.mb_password_cfm }}</p>
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="btn-44-black f-16-700 mob-inner" @click="submitData" :disabled="!nextCondition()">확인</button>

        <!-- 비밀번호 재설정 모달창 -->
        <PW_Reset_Modal :class="{ active: ResetPW }" :ResetPWFnc="ResetPWFnc" />
    </div>
</template>
