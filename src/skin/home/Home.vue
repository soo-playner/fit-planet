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
    <main class="home_container main_container main-layout">
        <section class="first-section">
            <div class="mob-inner main-layout-inner">
                <div class="intro-box">
                    <div class="txt-box">
                        <p class="f-12-300">천 리 운동 습관도 한 걸음부터!</p>
                        <h1 class="f-20-400">
                            <p>위즈위즈님 주변의</p>
                            <p><span class="f-20-700">1회 체험권</span>만 모아봤어요</p>
                        </h1>
                    </div>
                    <div class="img-box"><img src="@/assets/image/rep_character.png" alt="핏플래닛 캐릭터"></div>
                </div>
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
                        <p class="f-12-400">서울시 강남구</p>
                        <div class="img-box"><img src="@/assets/image/location.png" alt="위치 표시" /></div>
                    </div>
                </div>
                <AroundTrainer />
            </div>
        </section>
        <section class="second-section notWork">
            <div class="mob-inner">
                <p class="f-16-700">진행 중인 운동이 없어요!</p>
                <div class="f-11-400">
                    <span>운동을 결제하면 나의 운동 프로그램을 여기서 관리할 수 있어요</span>
                </div>
                <router-link to="" class="btn1">운동 둘러보기</router-link>
            </div>
        </section>
    </main>
</template>
