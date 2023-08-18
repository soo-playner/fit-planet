<script setup>
import JoinCurrent from "@/components/layout/JoinCurrent.vue";
import { ref, computed, watch } from "vue";
import { validateEmail, validatePassword, comparePassword } from "@/utils/validations"

// 사용자 입력값 데이터
const email = ref("");
const pwd = ref("");
const pwdConfirmed = ref("");

// 비밀번호 노출
const isPwdVisible = ref(false);
const isPwdConfirmedVisible = ref(false);

const showPwd = () => {
    isPwdVisible.value = !isPwdVisible.value;
};

const showPwdConfirmed = () => {
    isPwdConfirmedVisible.value = !isPwdConfirmedVisible.value;
};

// 모든 항목 유효성 검사 통과 여부
const shouldDisableNext = ref(true);

watch([email, pwd, pwdConfirmed], () => {
    const isEmailValid = validateEmail(email.value);
    const isPasswordValid = validatePassword(pwd.value) && validatePassword(pwdConfirmed.value);
    const isPasswordSame = comparePassword(pwd.value, pwdConfirmed.value);

    shouldDisableNext.value = !(isEmailValid && isPasswordValid && isPasswordSame);
})

</script>

<template>
    <JoinCurrent />
    <div class="member_container step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input 
                    type="email" 
                    v-model="email"
                    name="mb_id"
                    id="mb_id"
                    maxlength="20"
                    placeholder="아이디(이메일)"
                    required 
                />
                <div class="etc">
                    <span class="check-confirm" :class="{ active: validateEmail(email) }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p v-show="email.length > 0 && !validateEmail(email)">유효하지 않은 아이디입니다.</p>
            <div class="form-group">
                <input 
                    :type="isPwdVisible ? 'text' : 'password'"
                    v-model="pwd"
                    name="mb_password1"
                    id="mb_password1"
                    placeholder="비밀번호"
                    required 
                />
                <div class="etc">
                    <span class="pw-exposure" @click="showPwd" :class="{ active: isPwdVisible }">
                        <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" />
                    </span>
                    <span class="check-confirm" :class="{ active: validatePassword(pwd) }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p v-show="pwd.length > 0 && !validatePassword(pwd)">비밀번호는 영문, 숫자, 특수문자 조합 8자리 이상이어야 합니다.</p>
            <div class="form-group">
                <input
                    :type="isPwdConfirmedVisible ? 'text' : 'password'"
                    v-model="pwdConfirmed"
                    name="mb_password2"
                    id="mb_password2"
                    placeholder="비밀번호 확인"
                    required
                />
                <div class="etc">
                    <span class="pw-exposure" @click="showPwdConfirmed" :class="{ active: isPwdConfirmedVisible }">
                        <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" />
                    </span>
                    <span class="check-confirm" :class="{ active: validatePassword(pwdConfirmed) && comparePassword(pwdConfirmed, pwd) }">
                        <img src="@/assets/image/check.png" alt="확인 여부" />
                    </span>
                </div>
            </div>
            <p v-show="pwdConfirmed.length > 0 && !validatePassword(pwdConfirmed)">비밀번호는 영문, 숫자, 특수문자 조합 8자리 이상이어야 합니다.</p>
            <p v-show="pwdConfirmed.length > 0 && validatePassword(pwdConfirmed) && !comparePassword(pwdConfirmed, pwd)">입력된 비밀번호와 동일하지 않습니다.</p>    
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/join/step3')" :disabled="shouldDisableNext">다음</button>
    </div>
</template>
