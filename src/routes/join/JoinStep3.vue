<script setup>
import JoinCurrent from "../../components/layout/JoinCurrent.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import useValidations from "@/composables/useValidations";
import axios from "axios";
import { useRouter } from "vue-router";
const { form, isFormValid, errorText, nextCondition, dupCheckNickname } = useValidations(["mb_nickname", "mb_nickname_dup"]);

const store = useStore();
const router = useRouter();

const submitData = async () => {
    store.commit("updateJoinData", { nickname: form.mb_nickname.value });
    router.push("/join/complete");
};

onMounted(() => {
    console.log(store.state.join.joinData);
});
</script>

<template>
    <JoinCurrent />
    <div class="member_container step3">
        <div class="member_container_inner mob-inner">
            <div class="nickname-guide f-14-400">핏플래닛에서 사용할 닉네임을 입력해주세요</div>
            <div class="form-group">
                <input type="text" v-model="form.mb_nickname.value" name="mb_nickname" id="mb_nickname" placeholder="닉네임 입력" @change="resetDuplicateFlag" />
                <button class="f-14-700" @click="dupCheckNickname">중복 확인</button>
            </div>
            <p class="vail f-12-400" v-show="form.mb_nickname.value && !isFormValid.mb_nickname.value">{{ errorText.mb_nickname }}</p>
            <p class="vail f-12-400" v-show="isFormValid.mb_nickname.value && !isFormValid.mb_nickname_dup.value">닉네임 중복체크를 해주세요.</p>
            <p class="vail f-12-400" v-show="isFormValid.mb_nickname.value && isFormValid.mb_nickname_dup.value">사용 가능한 닉네임 입니다.</p>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="submitData" :disabled="!nextCondition()">가입 완료</button>
    </div>
</template>
