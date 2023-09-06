<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

import RangeBar from "@/components/layout/RangeBar";

const emit = defineEmits(["filterUpdate"]);
const props = defineProps({
    close: Function,
    resultCount: Number,
});

const facilities = ref([
    { id: "1", tit: "주차장" },
    { id: "2", tit: "락커" },
    { id: "3", tit: "운동복" },
    { id: "4", tit: "수건" },
    { id: "5", tit: "Wi-fi" },
    { id: "6", tit: "샤워실" },
    { id: "7", tit: "사우나" },
    { id: "8", tit: "찜질방" },
    { id: "9", tit: "체형분석" },
    { id: "10", tit: "체성분검사" },
]);

const placeType = ["24시", "여성 전용", "남성 전용", "무인"];

const etcOption = ["P.T", "그룹 P.T", "골프", "필라테스", "요가", "스피닝", "G.X"];

const machine = ref([{ title: "프리웨이트" }, { title: "하체" }, { title: "가슴" }, { title: "등" }, { title: "어깨" }, { title: "유산소" }]);

const machineTag = ref([
    ["파워렉", "스미스머신", "치닝디핑", "케이블 머신"],
    ["브이스쿼트", "힙 어브덕션", "핵스쿼트 머신", "레그프레스", "파워 레그프레스 머신", "레그 익스텐션 머신", "레그 컬 머신"],
    ["인클라인 벤치", "디클라인 벤치", "펙덱 머신", "체스트 프레스 머신"],
    ["어시스트 풀업", "풀다운 머신", "백 익스텐션 머신", "시티드로우", "티바로우"],
    ["숄더 프레스 머신", "사이드레터럴레이즈 머신", "리버스 펙덱 머신"],
    ["러닝머신", "스텝밀", "스텝퍼"],
]);

const selectFilter = ref({
    ticket: false,
    date_range_min: 0,
    date_range_max: 12,
    price_range_min: 40000,
    price_range_max: 120000,
    place_type: [],
    etc_option: [],
    facilities: [],
    machine: [],
});

const selectFilterHandler = (type, value) => {
    if (selectFilter.value[type].includes(value)) {
        const delIdx = selectFilter.value[type].indexOf(value);
        selectFilter.value[type].splice(delIdx, 1);
    } else selectFilter.value[type].push(value);
};

watch(selectFilter.value, () => {
    emit("filterUpdate", selectFilter.value);
});

const toggle = ref(false);
const toggleFnc = (e) => {
    e.target.classList.toggle("active");
};
</script>

<template>
    <header class="at-header">
        <div class="at-header-inner">
            <div class="back" @click="props.close"><img src="@/assets/image/back.png" alt="뒤로가기" /></div>
            <h1 class="f-16-400">필터</h1>
        </div>
    </header>
    <div class="filter_container main-layout">
        <div class="filter_container_inner mob-inner">
            <!-- 수강기간 -->
            <div class="ticket-date">
                <div class="ticket-date-tit">
                    <p class="f-14-700">수강기간</p>
                    <ul>
                        <li class="active">기간 설정</li>
                        <li>1회 체험권</li>
                    </ul>
                </div>
                <div class="ticket-date-adjust">
                    <p>
                        <span>{{ selectFilter.date_range_min }}개월</span>~<span>{{ selectFilter.date_range_max }}개월</span>
                    </p>
                    <RangeBar
                        :defaultMinValue="0"
                        :defaultMaxValue="12"
                        :defaultRangeL="0"
                        :defaultRangeR="12"
                        @changeRange="
                            selectFilter.date_range_min = $event.min;
                            selectFilter.date_range_max = $event.max;
                        "
                    />
                </div>
            </div>
            <!-- 가격 -->
            <div class="ticket-expense">
                <div class="ticket-expense-tit f-14-700"><p>가격(1개월 기준)</p></div>
                <div class="ticket-expense-adjust">
                    <p>
                        <span>{{ selectFilter.price_range_min }}원</span>~<span>{{ selectFilter.price_range_max }}원</span>
                    </p>
                    <RangeBar
                        :defaultMinValue="0"
                        :defaultMaxValue="12"
                        :defaultRangeL="4"
                        :defaultRangeR="12"
                        @changeRange="
                            selectFilter.price_range_min = $event.min * 10000;
                            selectFilter.price_range_max = $event.max * 10000;
                        "
                    />
                </div>
            </div>
            <!-- 플레이스 타입 -->
            <div class="place-type">
                <div class="place-type-tit f-14-700">플레이스 타입</div>
                <ul>
                    <li :class="{ select: selectFilter.place_type.includes(el) }" v-for="el in placeType" :key="el" @click="selectFilterHandler('place_type', el)">{{ el }}</li>
                </ul>
            </div>
            <!-- 기타옵션 -->
            <div class="etc-opt">
                <div class="etc-opt-tit f-14-700">기타옵션</div>
                <ul>
                    <li :class="{ select: selectFilter.etc_option.includes(el) }" v-for="el in etcOption" :key="el" @click="selectFilterHandler('etc_option', el)">{{ el }}</li>
                </ul>
            </div>
            <!-- 편의시설 -->
            <div class="facilities">
                <div class="facilities-tit f-14-700">편의시설</div>
                <ul>
                    <li v-for="fac in facilities" :key="fac.id" @click="toggleFnc" :class="{ active: toggle }">
                        <span :class="'facilities-icon facilities-icon-' + fac.id"></span>
                        <p>{{ fac.tit }}</p>
                    </li>
                </ul>
            </div>
            <!-- 운동기구 -->
            <div class="machine">
                <div class="machine-tit f-14-700 place-each-tit">운동 기구</div>
                <div class="machine-list" v-for="(machineItem, idx) in machine" :key="idx">
                    <span class="machine-tit f-14-400">{{ machineItem.title }}</span>
                    <ul>
                        <li :class="{ select: selectFilter.machine.includes(el) }" v-for="(el, idx) in machineTag[idx]" :key="idx" @click="selectFilterHandler('machine', el)">
                            {{ el }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="filter-bott-btn">
            <button class="f-16-700">초기화</button>
            <button class="f-16-700">플레이스 {{ resultCount }}개 보기</button>
        </div>
    </div>
</template>
