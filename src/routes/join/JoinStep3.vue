<script setup>
import JoinCurrent from "../../components/layout/JoinCurrent.vue";
import { ref } from "vue";
import { useStore } from 'vuex';

const nickname = ref("");
const canRegister = ref(false);
const isDuplicate = ref(null);

const store = useStore();
const CHECK_DUPLICATE_NICKNAME="checkDuplicateNickname";

const checkBtnClickHandler = () => {
    if (!nickname.value) return;
    // 닉네임 중복 확인 api 호출
    store.dispatch(CHECK_DUPLICATE_NICKNAME, {nickname: nickname.value})
        .then((res) => {
            canRegister.value = !res.isDuplicate;
            isDuplicate.value = res.isDuplicate;
        });
}

// 중복확인 성공하고 input 변경하는 경우
const resetDuplicateFlag = () => {
    if (!!canRegister.value) canRegister.value = false;
}
</script>

<template>
    <JoinCurrent />
    <div class="member_container step3">
        <div class="member_container_inner mob-inner">
            <div class="nickname-guide f-14-400">핏플래닛에서 사용할 닉네임을 입력해주세요</div>
            <div class="form-group">
                <input type="text" v-model="nickname" name="mb_nickname" id="mb_nickname" placeholder="닉네임 입력" @change="resetDuplicateFlag" />
                <button class="f-14-700" @click="checkBtnClickHandler">중복 확인</button>
            </div>
            <p v-show="isDuplicate">이미 존재하는 닉네임입니다.</p>    
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/join/complete')" :disabled="canRegister">가입 완료</button>
    </div>
</template>
