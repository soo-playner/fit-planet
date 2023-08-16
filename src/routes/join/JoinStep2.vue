<script setup>
import JoinCurrent from "../../components/layout/JoinCurrent.vue";
import { ref } from "vue";

const signup = ref({ id: null });
const pwExposure1 = ref(false);
const pwExposure2 = ref(false);

const pwExposureFnc1 = () => {
    pwExposure1.value = !pwExposure1.value;
};

const pwExposureFnc2 = () => {
    pwExposure2.value = !pwExposure2.value;
};
</script>

<template>
    <JoinCurrent />
    <div class="member_container step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="email" v-model="signup.id" name="mb_id" id="mb_id" maxlength="20" placeholder="아이디(이메일)" required />
                <div>유효하지 않은 아이디입니다.</div>
                <div class="etc">
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부" /></span>
                </div>
            </div>
            <div class="form-group">
                <input type="password" name="mb_password1" id="mb_password1" placeholder="비밀번호" required />
                <div class="etc">
                    <span class="pw-exposure" @click="pwExposureFnc1" :class="{ active: pwExposure1 }"> <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" /></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부" /></span>
                </div>
            </div>
            <div class="form-group">
                <input type="password" name="mb_password2" id="mb_password2" placeholder="비밀번호 확인" required />
                <div class="etc">
                    <span class="pw-exposure" @click="pwExposureFnc2" :class="{ active: pwExposure2 }"> <img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" /></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부" /></span>
                </div>
            </div>
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/join/step3')">다음</button>
    </div>
</template>
