<script setup>
import { ref, onMounted, watch } from "vue";
import useAjaxRequest from "@/composables/useAjaxRequest";

const { postData } = useAjaxRequest();
const modalOpen = ref(false);
const today = new Date();
const date = ref({
    todayY: today.getFullYear(),
    todayM: today.getMonth(),
    todayD: today.getDate(),
});
const { todayY, todayM } = date.value;
const emptyCount = ref(new Date(todayY, todayM, 1).getDay());
const dateLength = ref(new Date(todayY, todayM + 1, 0).getDate());
const selectedDate = ref(new Date().getDate());

// 지난 달
const prevM = function () {
    // 현재 날짜보다 이전 달일 때 오늘 날짜로 덮어씌움
    const { todayY, todayM } = date.value;
    if (todayY === new Date().getFullYear() && todayM - 1 <= new Date().getMonth()) {
        const now = new Date();
        date.value.todayM = now.getMonth();
        date.value.todayD = now.getDate();
        emptyCount.value = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
        dateLength.value = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        selectedDate.value = now.getDate();
        return;
    }
    let currDate = new Date(todayY, todayM, 0);
    setM(currDate);
};

// 다음 달
const nextM = function () {
    const { todayY, todayM } = date.value;
    let currDate = new Date(todayY, todayM + 1, 1);
    setM(currDate);
};

// 현재 날짜 설정
const setM = function (currDate) {
    date.value = { todayY: currDate.getFullYear(), todayM: currDate.getMonth(), todayD: 1 };
    emptyCount.value = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();
    dateLength.value = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
    selectedDate.value = currDate.getDate();
};

const submitData = async () => {
    const res = await postData("api", {
        start_at: new Date(date.value.todayY, date.value.todayM, selectedDate.value),
    });
    if (res.data.result) {
        alert("변경되었습니다.");
        modalOpen.value = false;
    }
};

onMounted(() => {
    modalOpen.value = true;
});

watch(modalOpen, (curr) => {
    if (!curr) {
        setTimeout(() => {
            // scheduleClose();
        }, 500);
    }
});

watch(emptyCount, (val) => {
    console.log(val);
});
</script>

<template>
    <div class="ScheduleChange_alert">
        <div class="overlay" @click="modalOpen = false"></div>
        <transition name="slide">
            <div class="ScheduleChange_alert_inner" v-if="modalOpen">
                <div class="existing border_none">
                    <p class="f-16-700">운동 시작일을 설정해 주세요</p>
                    <div class="f-14-400">등록해주신 시작일을 기준으로<br />수강권이 사용돼요</div>
                </div>
                <div class="datePicker">
                    <div class="apply">
                        <div class="f-14-400">
                            <p>
                                <span>{{ date.todayY }}</span
                                >년
                            </p>
                            <p>
                                <span>{{ date.todayM < 9 ? "0" + (date.todayM + 1) : date.todayM + 1 }}</span
                                >월
                            </p>
                            <p>
                                <span>{{ selectedDate < 10 ? "0" + selectedDate : selectedDate }}</span
                                >일에 시작해요
                            </p>
                        </div>
                    </div>
                    <div class="calendar_wrap">
                        <header>
                            <h1>{{ date.todayY }}년 {{ date.todayM < 9 ? "0" + (date.todayM + 1) : date.todayM + 1 }}월</h1>
                            <div class="btn_wrap">
                                <img src="@/assets/image/back.png" class="prev" data-type="prev" @click="prevM" />
                                <img src="@/assets/image/back.png" class="next" @click="nextM" />
                            </div>
                        </header>
                        <section class="picker_wrap">
                            <ul class="day_list">
                                <li v-for="(el, idx) in day" :key="idx" class="day">{{ el }}</li>
                            </ul>
                            <ul class="date_list">
                                <li v-for="(el, idx) in emptyCount" :key="idx" class="date"></li>
                                <li
                                    v-for="(el, idx) in dateLength"
                                    :key="idx"
                                    class="date"
                                    :class="[{ selected: selectedDate == idx + 1 }, { prevDate: date.todayD > idx + 1 }]"
                                    @click="
                                        if (date.todayD <= idx + 1) {
                                            selectedDate = idx + 1;
                                        }
                                    "
                                >
                                    {{ idx + 1 }}
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div class="day_change_btn">
                    <div>
                        <button @click="modalOpen = false">나중에 하기</button>
                        <button @click="submitData">수강권 등록하기</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
