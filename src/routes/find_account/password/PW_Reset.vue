<script setup>
import { ref } from "vue";

// 데이터와 메소드를 초기화합니다.
const ResetPW = ref(false);

const ResetPWFnc = () => {
    ResetPW.value = !ResetPW.value;
};
</script>

<script>
import PW_Reset_Modal from "@/components/modal/password/PW_Reset";

export default {
    components: {
        PW_Reset_Modal,
    },
};
</script>

<template>
    <div class="member_container pw-reset">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="password" id="mb_re_password1" name="mb_re_password1" placeholder="새 비밀번호" />
                <div class="etc">
                    <span class="pw-exposure"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" /></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부" /></span>
                </div>
            </div>
            <div class="form-group">
                <input type="password" id="mb_re_password2" name="mb_re_password2" placeholder="새 비밀번호 확인" />
                <div class="etc">
                    <span class="pw-exposure"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" /></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부" /></span>
                </div>
            </div>
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="ResetPWFnc">확인</button>

        <!-- 비밀번호 재설정 모달창 -->
        <PW_Reset_Modal :class="{ active: ResetPW }" :ResetPWFnc="ResetPWFnc" />
    </div>
</template>
