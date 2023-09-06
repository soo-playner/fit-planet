<script setup>
const history = [
    {
        payDate: "4.1 토",
        current: "운동 완료",
        trainerName: "김위즈",
        center: "위즈짐",
        exerciseName: "바디프로필 프로젝트 30회",
        startDate: "4.3 월",
        endDate: "7.3 월",
    },
    {
        payDate: "4.1 토",
        current: "운동 완료",
        trainerName: "김위즈",
        center: "위즈짐",
        exerciseName: "바디프로필 프로젝트 30회",
        startDate: "4.3 월",
        endDate: "7.3 월",
    },
]
</script>

<template>
    <div class="complete_home_container main-layout home_container">
        <div class="complete_home_container_inner first-section home-bg">
            <div class="mob-inner">
                <div class="top-column">
                    <div class="txt-box menu-dot">
                        <div class="f-14-400 ticket-info">
                            <p>위즈짐</p>
                            <p>6개월 수강권</p>
                        </div>
                        <div class="f-14-400 date">4.1토 결제</div>
                        <span></span>
                    </div>
                    <ul class="place-list">
                        <li><button>트레이너 보기</button></li>
                        <li><button @click="scheduleOpen = true">수강권 등록일 변경</button></li>
                        <li><button>결제 내역 보기</button></li>
                        <li><button>공유하기</button></li>
                    </ul>
                </div>
                <div class="mid-column">
                    <div class="place-txt-box">
                        <div class="f-22-300">
                            <span class="f-22-500">끝까지 달린</span>위즈위즈님,
                            <p class="f-22-500">너무 대단해요!</p>
                        </div>
                    </div>
                </div>
                <div class="bott-column">
                    <div class="place-progress-box">
                        <div class="progress-bar">
                            <div class="progress-character ing3">
                                <img src="@/assets/image/progress-character3.png" alt="">
                            </div>
                            <div class="progress-bubble ing3">180/180</div>
                            <div class="progress-value"><span class="step ing3"></span></div>
                        </div>
                        <div class="progress-date">
                            <p>4.3 월 시작</p>
                            <p>7.3 월 종료</p>
                        </div>
                    </div>
                    <button class="btn-44-purple f-12-700">
                        <img src="@/assets/image/map.png" alt="플레이스 위치 보기">
                        플레이스 위치 보기
                    </button>
                </div>
            </div>
        </div>
        <div class="second-section">
            <div class="mob-inner">
                <div class="place-history" v-for="item in 4" :key="item">
                    <div class="top-column">
                        <div class="f-12-400">
                            <p>4.1 토 결제</p>
                            <p>운동 완료</p>
                        </div>
                        <div class="lnb">
                            <div class="heart"></div>
                            <div class="menu-dot">
                                <span></span>
                                <ul class="place-list">
                                    <li><router-link to="/">플레이스 보기</router-link></li>
                                    <li><router-link to="/">결제 내역 보기</router-link></li>
                                    <li><router-link to="/">공유하기</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mid-column">
                        <div class="txt-box">
                            <div class="f-14-500">
                                <p class="f-14-300">김위즈 트레이너(위즈짐)</p>
                                바디프로필 프로젝트 30회
                            </div>
                            <div class="f-12-400 date">
                                <p><span class="blue-dot"></span>시작일 : 4.3 월</p>
                                <p><span class="purple-dot"></span>종료일 : 7.3 월</p>
                            </div>
                        </div>
                        <div class="img-box"></div>
                    </div>
                    <div class="bott-column">
                        <div class="f-12-400">
                            <p>운동은 어떠셨나요? 후기를 적어주세요</p>
                            <router-link to="/" class="f-12-400">후기 쓰기</router-link>
                        </div>
                        <button @click="addPaymentFnc">같은 운동 결제하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>