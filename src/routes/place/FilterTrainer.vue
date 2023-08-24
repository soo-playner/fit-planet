<script setup>
import { ref } from "vue";

import RangeBar from "@/components/layout/RangeBar";

const countRangeMin = ref(0);
const countRangeMax = ref(10);
const priceRangeMin = ref(40000);
const priceRangeMax = ref(120000);
</script>

<template>
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
                        <span>{{ countRangeMin }}회</span>~<span>{{ countRangeMax }}회</span>
                    </p>
                    <RangeBar
                        :defaultMinValue="0"
                        :defaultMaxValue="10"
                        :defaultRangeL="0"
                        :defaultRangeR="10"
                        @changeRange="
                            countRangeMin = $event.min;
                            countRangeMax = $event.max;
                            console.log($event);
                        "
                    />
                </div>
            </div>
            <!-- 가격 -->
            <div class="ticket-expense">
                <div class="ticket-expense-tit f-14-700"><p>가격(1회 기준)</p></div>
                <div class="ticket-expense-adjust">
                    <p>
                        <span>{{ priceRangeMin }}원</span>~<span>{{ priceRangeMax }}원</span>
                    </p>
                    <RangeBar
                        :defaultMinValue="0"
                        :defaultMaxValue="12"
                        :defaultRangeL="4"
                        :defaultRangeR="12"
                        @changeRange="
                            priceRangeMin = $event.min * 10000;
                            priceRangeMax = $event.max * 10000;
                            console.log($event);
                        "
                    />
                </div>
            </div>
            <!-- 플레이스 타입 -->
            <div class="place-type">
                <div class="place-type-tit f-14-700">트레이너 성별</div>
                <ul>
                    <li class="gender">남자</li>
                    <li class="gender">여자</li>
                </ul>
            </div>
        </div>
        <div class="filter-bott-btn">
            <button class="f-16-700">초기화</button>
            <button class="f-16-700">플레이스 200개 보기</button>
        </div>
    </div>
</template>
