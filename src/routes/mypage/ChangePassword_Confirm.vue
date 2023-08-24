<script setup>
import useValidations from "@/composables/useValidations";
const { form, isFormValid, errorText, nextCondition } = useValidations();
</script>

<template>
    <div class="ChangePassword_Confirm_container member_container main-layout notFooter-layout2">
        <div class="ChangePassword_Confirm_container_inner mob-inner">
            <div class="txt-box">
                <p class="f-14-400">새 비밀번호를 입력해주세요</p>
                <div class="form-group">
                    <input v-model="form.mb_password.value" type="password" name="mb-password" id="mb-password" placeholder="새 비밀번호 입력" />
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
                    <input v-model="form.mb_password_cfm.value" type="password" name="mb-password" id="mb-password" placeholder="새 비밀번호 확인" />
                    <div class="etc">
                        <span class="pw-exposure" @click="showPwd" :class="{ active: isPwdVisible }">
                            <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" />
                        </span>
                        <span class="check-confirm" :class="{ active: isFormValid.mb_password.value }">
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
            <button class="changePassword-btn next-step-btn f-16-700" @click="$router.push('/Change/Password/Confirm')" :disabled="!nextCondition()">확인</button>
        </div>
    </div>
</template>
