<script setup>
import { ref } from "vue";
import PW_Email_Modal from "@/components/modal/password/PW_Email";
import useValidations from "@/composables/useValidations";

const { form, isFormValid, errorText, nextCondition } = useValidations(["mb_id"]);

// 데이터와 메소드를 초기화합니다.
const EmailPW = ref(false);

const EmailPWFnc = () => {
    EmailPW.value = !EmailPW.value;
};
</script>

<template>
    <div class="member_container pw-email-step1">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input v-model="form.mb_id.value" type="email" id="mb_id" name="mb_id" placeholder="아이디(이메일)" />
            </div>
            <p v-show="form.mb_id.value && !isFormValid.mb_id.value">{{ errorText.mb_id }}</p>
        </div>
        <!-- 메일을 통해 임시 비밀번호 수신 -->
        <button class="next-step-btn f-16-700 mob-inner" @click="EmailPWFnc" :disabled="!nextCondition()">임시 비밀번호 요청</button>
    </div>
    <!-- 메일 전송 모달창 -->
    <PW_Email_Modal :class="{ active: EmailPW }" :EmailPWFnc="EmailPWFnc" />
</template>
