<script setup>
import useValidations from "@/composables/useValidations";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const { form, isFormValid, errorText, isPwdVisible, isPwdConfirmedVisible, showPwd, showPwdConfirmed, nextCondition } = useValidations(["mb_id", "mb_password", "mb_password_cfm"]);
const store = useStore();
const router = useRouter();

const submitData = () => {
    store.commit("updateJoinData", { id: form.mb_id.value, pw: form.mb_password.value });
    router.push("/join/step3");
};
</script>

<template>
    <!-- <JoinCurrent /> -->
    <div class="member_container step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input v-model="form.mb_id.value" type="email" name="mb_id" id="mb_id" maxlength="20" placeholder="아이디(이메일)" required />
                <div class="etc">
                    <span class="check-confirm" :class="{ active: isFormValid.mb_id.value }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p class="vail f-12-400" v-show="form.mb_id.value && !isFormValid.mb_id.value">{{ errorText.mb_id }}</p>
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
            <p class="vail f-12-400" v-show="form.mb_password.value && !isFormValid.mb_password.value">{{ errorText.mb_password }}</p>
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
            <p class="vail f-12-400" v-show="form.mb_password_cfm.value && !isFormValid.mb_password_cfm.value">{{ errorText.mb_password_cfm }}</p>
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="btn1 mob-inner" @click="submitData" :disabled="!nextCondition()">다음</button>
    </div>
</template>
