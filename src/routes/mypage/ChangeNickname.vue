<script setup>
import useValidations from "@/composables/useValidations";
import { ref } from "vue";
import { useStore } from "vuex";

const { form, isFormValid, errorText, nextCondition } = useValidations();

const nickname = ref("");
const isDuplicate = ref(null);
const canChangeNickname = ref(false);

const store = useStore();
const CHECK_DUPLICATE_NICKNAME = "checkDuplicateNickname";
const CHANGE_NICKNAME = "changeNickname";

const checkBtnClickHandler = () => {
    if (!nickname.value) return;
    // 닉네임 중복 확인 api 호출
    store.dispatch(CHECK_DUPLICATE_NICKNAME, { nickname: nickname.value }).then((res) => {
        canChangeNickname.value = res.isDuplicate;
        isDuplicate.value = res.isDuplicate;
    });
};

// 중복확인 성공하고 input 변경하는 경우
const resetDuplicateFlag = () => {
    if (!!canChangeNickname.value) canChangeNickname.value = false;
};

// 닉네임 변경하기
const confirmChange = () => {
    // store.dispatch(CHANGE_NICKNAME, {nickname: nickname.value})
    //     .then((res) => {
    //     })
};
</script>

<template>
    <!-- 
        path : /Change/Nickname
    -->
    <div class="ChangeNickname_container main-layout notFooter-layout2">
        <div class="ChangeNickname_container_inner mob-inner">
            <div class="changeNick-guide txt-box">
                <p class="f-14-400">핏플래닛에서 사용할 닉네임을 입력해주세요.</p>
                <div class="form-group">
                    <input type="text" v-model="form.mb_nickname.value" name="mb_nickname" id="mb_nickname" placeholder="위즈위즈" @change="resetDuplicateFlag" />
                    <button class="f-14-700" @click="checkBtnClickHandler">중복 확인</button>
                </div>
                <p class="vail f-12-400" v-show="form.mb_nickname.value && !isFormValid.mb_nickname.value">{{ errorText.mb_nickname }}</p>
                <p class="vail f-12-400" v-show="isDuplicate">이미 존재하는 닉네임입니다.</p>
            </div>
            <button class="changeNick-btn bott-btn f-16-700" :disabled="canChangeNickname && !nextCondition()" @click="confirmChange">닉네임 변경하기</button>
        </div>
    </div>
</template>
