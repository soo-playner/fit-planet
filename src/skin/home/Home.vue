<script setup>
import AroundTrainer from "./components/AroundTrainer";
import { ref } from "vue";

// 반응형 변수와 함수 정의
const show = ref(true);

const trainerShow = () => {
    show.value = !show.value;
};
</script>

<template>
    <main class="main_container main-layout">
        <section class="section section01 first-section">
            <div class="section01-inner mob-inner main-layout-inner">
                <div class="intro-txt-box">
                    <p class="f-14-400">천 리 운동 습관도 한 걸음부터!</p>
                    <h1 class="f-20-700">
                        <p>위즈위즈님 주변의</p>
                        <p>1회 체험권만 모아봤어요</p>
                    </h1>
                    <div class="trainer-toggle-box">
                        <ul class="trainer-choice-ul">
                            <li class="trainer-choice-li" @click="trainerShow">
                                <p class="f-12-400">트레이너</p>
                                <span class="arrow"></span>
                            </li>
                            <ul v-if="!show">
                                <li class="f-12-400">트레이너</li>
                                <li class="f-12-400">트레이너</li>
                                <li class="f-12-400">트레이너</li>
                            </ul>
                        </ul>
                        <div class="location">
                            <div class="img-box"><img src="../../assets/image/location.png" alt="위치 표시" /></div>
                            <p class="f-12-400">서울시 강남구</p>
                        </div>
                    </div>
                </div>

                <AroundTrainer />
            </div>
        </section>
        <section class="section section02">
            <div class="section02-inner mob-inner">
                <p class="f-16-700">진행 중인 운동이 없어요!</p>
                <div class="f-14-400">
                    <span>운동을 결제하면</span>
                    <span>나의 운동 프로그램을 여기서 관리할 수 있어요</span>
                </div>
                <router-link to="" class="f-12-400">운동 둘러보기</router-link>
            </div>
        </section>
    </main>    
</template>
