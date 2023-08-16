<script setup>
import JoinCurrent from "../../components/layout/JoinCurrent.vue";
import { ref } from "vue";

const nickname = ref("");
</script>

<template>
    <JoinCurrent />
    <div class="member_container step3">
        <div class="member_container_inner mob-inner">
            <div class="nickname-guide f-14-400">핏플래닛에서 사용할 닉네임을 입력해주세요</div>
            <div class="form-group">
                <input type="text" v-model="nickname" name="mb_nickname" id="mb_nickname" placeholder="닉네임 입력" />
                <button class="f-14-700">중복 확인</button>
            </div>
        </div>
        <router-link to="/join/complete" class="next-step-btn f-16-700 mob-inner"> 가입 완료 </router-link>
    </div>
</template>
