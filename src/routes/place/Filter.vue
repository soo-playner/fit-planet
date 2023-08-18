<script setup>
import { ref } from "vue";

import rangeBar from '@/components/layout/RangeBar';

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

const machine = ref(
    [
        { title: "프리웨이트" }, { title: "하체" }, { title: "가슴" }, { title: "등" }, { title: "어깨" }, { title: "유산소" }, 
    ]
);

const machineTag = ref([
    ["파워렉", "스미스머신", "치닝디핑", "케이블 머신"],
    ["브이스쿼트", "힙 어브덕션", "핵스쿼트 머신", "레그프레스", "파워 레그프레스 머신", "레그 익스텐션 머신", "레그 컬 머신"],
    ["인클라인 벤치", "디클라인 벤치", "펙덱 머신", "체스트 프레스 머신"],
    ["어시스트 풀업", "풀다운 머신", "백 익스텐션 머신", "시티드로우", "티바로우"],
    ["숄더 프레스 머신", "사이드레터럴레이즈 머신", "리버스 펙덱 머신"],
    ["러닝머신", "스텝밀", "스텝퍼"],
]);
</script>

<template>
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
                    <p><span>1개월</span>~<span>12개월</span></p>
                    <div class="ticket-date-bar"></div>
                </div>
                <rangeBar/>
            </div>
            <!-- 가격 -->
            <div class="ticket-expense">
                <div class="ticket-expense-tit f-14-700"><p>가격(1개월 기준)</p></div>
                <div class="ticket-expense-adjust">
                    <p><span>40,000원</span>~<span>120,000원</span></p>
                    <div class="ticket-date-bar"></div>
                </div>
            </div>
            <!-- 플레이스 타입 -->
            <div class="place-type">
                <div class="place-type-tit f-14-700">플레이스 타입</div>
                <ul>
                    <li>24시</li>
                    <li>여성 전용</li>
                    <li>남성 전용</li>
                    <li>무인</li>
                </ul>
            </div>
            <!-- 기타옵션 -->
            <div class="etc-opt">
                <div class="etc-opt-tit f-14-700">기타옵션</div>
                <ul>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                    <li>필라테스</li>
                    <li>요가</li>
                    <li>스피닝</li>
                    <li>G.X</li>
                </ul>
            </div>
            <!-- 편의시설 -->
            <div class="facilities">
                <div class="facilities-tit f-14-700">편의시설</div>
                <ul>
                    <li v-for="fac in facilities" :key="fac.id">
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
                        <li v-for="(data, _idx) in machineTag[idx]" :key="_idx">{{ data }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="filter-bott-btn">
            <button class="f-16-700">초기화</button>
            <button class="f-16-700">플레이스 200개 보기</button>
        </div>
    </div>
</template>
