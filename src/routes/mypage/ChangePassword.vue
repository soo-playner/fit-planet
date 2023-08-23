<script setup>
import useValidations from "@/composables/useValidations";
const { form } = useValidations();
</script>

<template>
    <div class="ChangePassword_container member_container main-layout notFooter-layout2">
        <div class="ChangePassword_container_inner mob-inner">
            <div class="ChangePassword-guide txt-box">
                <p class="f-14-400">기존에 사용했던 비밀번호를 입력해주세요</p>
                <div class="form-group">
                    <input v-model="form.mb_password.value" type="text" name="mb-nick" id="mb-nick" placeholder="기존 비밀번호 입력" />
                    <div class="etc">
                        <span class="pw-exposure"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부"></span>
                    </div>
                </div>
            </div>
            <button class="changePassword-btn bott-btn f-16-700" @click="$router.push('/Change/Password/Confirm')">비밀번호 변경하기</button>
        </div>
    </div>
</template>
