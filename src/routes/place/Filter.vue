<script>
    export default {
        name : 'Filter',
        data(){
            return {
                facilities : [
                    { id:'1', tit:'주차장' },
                    { id:'2', tit:'락커' },
                    { id:'3', tit:'운동복' },
                    { id:'4', tit:'수건' },
                    { id:'5', tit:'Wi-fi' },
                    { id:'6', tit:'샤워실' },
                    { id:'7', tit:'사우나' },
                    { id:'8', tit:'찜질방' },
                    { id:'9', tit:'체형분석' },
                    { id:'10', tit:'체성분검사' }
                ]
            }
        }
    }
</script>

<template>
    <div class="filter_container">
        <div class="filter_container_inner">
            <!-- 수강기간 -->
            <div class="ticket-date">
                <div class="ticket-date-tit">
                    <p class="f-14-700">수강기간</p>
                    <ul>
                        <li>기간 설정</li>
                        <li>1회 체험권</li>
                    </ul>
                </div>
                <div class="ticket-date-adjust">
                    <p><span>1개월</span>~<span>12개월</span></p>
                    <div class="ticket-date-bar"></div>
                </div>
            </div>
            <!-- 가격 -->
            <div class="ticket-expense">
                <div class="ticket-expense-tit"><p>가격(1개월 기준)</p></div>
                <div class="ticket-date-adjust">
                    <p><span>40,000원</span>~<span>120,000원</span></p>
                    <div class="ticket-date-bar"></div>
                </div>
            </div>
            <!-- 플레이스 타입 -->
            <div class="place-type">
                <ul>
                    <li>24시</li>
                    <li>여성 전용</li>
                    <li>남성 전용</li>
                    <li>무인</li>
                </ul>
            </div>
            <!-- 기타옵션 -->
            <div class="etc-opt">
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
                <div class="facilities-tit">편의시설</div>
                <ul>
                    <li v-for="fac in facilities" :key="fac">
                        <span :class="'facilities-icon facilities-icon-' + fac.id"></span>
                        <p>{{ fac.tit }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>