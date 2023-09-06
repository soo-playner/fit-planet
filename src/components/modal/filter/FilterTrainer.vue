<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const emit = defineEmits(["filterUpdate"]);
const props = defineProps({
    close: Function,
    resultCount: Number,
});

import RangeBar from "@/components/layout/RangeBar";

const selectFilter = ref({
    ticket: false,
    count_range_min: 0,
    count_range_max: 10,
    price_range_min: 40000,
    price_range_max: 120000,
    trainer_gender: null,
});

watch(selectFilter.value, () => {
    emit("filterUpdate", selectFilter.value);
});
</script>

<template>
    <header class="at-header">
        <div class="at-header-inner">
            <div class="back" @click="close"><img src="@/assets/image/back.png" alt="뒤로가기" /></div>
            <h1 class="f-16-400">필터</h1>
        </div>
    </header>
    <div class="filter_container main-layout">
        <div class="filter_container_inner mob-inner">
            <!-- 수강기간 -->
            <div class="ticket-date">
                <div class="ticket-date-tit">
                    <p class="f-14-700">수강횟수</p>
                    <ul>
                        <li class="active">횟수 설정</li>
                        <li>1회 체험권</li>
                    </ul>
                </div>
                <div class="ticket-date-adjust">
                    <p>
                        <span>{{ selectFilter.count_range_min }}회</span>~<span>{{ selectFilter.count_range_max }}회</span>
                    </p>
                    <RangeBar
                        :defaultMinValue="0"
                        :defaultMaxValue="10"
                        :defaultRangeL="0"
                        :defaultRangeR="10"
                        @changeRange="
                            selectFilter.count_range_min = $event.min;
                            selectFilter.count_range_max = $event.max;
                        "
                    />
                </div>
            </div>
            <!-- 가격 -->
            <div class="ticket-expense">
                <div class="ticket-expense-tit f-14-700"><p>가격(1회 기준)</p></div>
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
                <div class="place-type-tit f-14-700">트레이너 성별</div>
                <ul>
                    <li class="gender" :class="{ select: selectFilter.trainer_gender === '남자' }" @click="selectFilter.trainer_gender = '남자'">남자</li>
                    <li class="gender" :class="{ select: selectFilter.trainer_gender === '여자' }" @click="selectFilter.trainer_gender = '여자'">여자</li>
                </ul>
            </div>
        </div>
        <div class="filter-bott-btn">
            <button class="f-16-700">초기화</button>
            <button class="f-16-700">플레이스 {{ resultCount }}개 보기</button>
        </div>
    </div>
</template>
