<script setup>
import { ref, computed, onMounted } from "vue";
import JoinCurrent from "@/components/layout/JoinCurrent.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const isCheckedAll = ref(false);
const terms = [
    { id: "wr_1_1", label: "(필수)만 14세 이상입니다.", required: true, checked: ref(false) },
    { id: "wr_1_2", label: "(필수) 서비스 이용약관", required: true, checked: ref(false) },
    { id: "wr_1_3", label: "(필수) 개인정보 처리방침", required: true, checked: ref(false) },
    { id: "wr_1_4", label: "(선택) 마케팅 정보 수신동의", required: false, checked: ref(false) },
];

const shouldDisableNextButton = computed(() => {
    return terms.some((term) => term.required && !term.checked.value);
});

function toggleAllTerms() {
    isCheckedAll.value = !isCheckedAll.value;
    terms.forEach((term) => (term.checked.value = isCheckedAll.value));
}

// 단일 약관 체크박스 클릭 핸들러
function checkSingleTerm(checkedTerm) {
    let checkedCnt = 0;

    terms.forEach((term) => {
        if (term === checkedTerm) term.checked.value = !term.checked.value;
        if (term.checked.value) checkedCnt++;
    });

    isCheckedAll.value = checkedCnt === terms.length;
}

const submitData = () => {
    store.commit("updateJoinData", { receiveAD: terms[3].checked.value });
    router.push("/join/step2");
};

onMounted(() => {
    store.commit("resetJoinData");
});
</script>

<template>
    <JoinCurrent />
    <div class="member_container step1">
        <div class="member_container_inner mob-inner">
            <div class="form-group rep">
                <input type="checkbox" name="wr_1" id="wr_1" value="약관 전체동의" :checked="isCheckedAll" @change="toggleAllTerms" />
                <label for="wr_1" class="f-16-700"><span></span>약관 전체동의</label>
            </div>
            <div class="check-list">
                <div class="form-group" v-for="term in terms" :key="term.id">
                    <input type="checkbox" :name="term.id" :id="term.id" value="약관 전체동의" :checked="term.checked.value" @change="checkSingleTerm(term)" />
                    <label :for="term.id" class="f-14-400"><span></span>{{ term.label }}</label>
                    <button v-if="term.required" class="arrow"></button>
                </div>
            </div>
        </div>
        <button class="btn1 mob-inner" @click="submitData" :disabled="shouldDisableNextButton">다음</button>
    </div>
</template>
