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
    <div class="complete_home_container main-layout">
        <div class="complete_home_container_inner">
            <div class="first-section">
                <div class="first-section-inner main-layout-inner mob-inner">
                    <div class="top-column">
                        <div class="txt-box f-18-700">
                            <p>끝까지 달린 위즈위즈님,</p>
                            <p>너무 대단해요!</p>
                        </div>
                        <div class="close"></div>
                    </div>
                    <div class="place-info">
                        <div class="img-box"></div>
                        <div class="txt-box">
                            <span class="f-12-400">4.1 토 결제</span>
                            <p class="f-14-400">
                                <span>위즈짐</span>
                                <span>6개월 수강권</span>
                            </p>
                        </div> 
                    </div>
                    <div class="place-progress-box">
                        <div class="progress-bar">
                            <div class="progress-bubble">100%</div>
                            <div class="progress-value"><span class="step"></span></div>
                        </div>
                        <div class="progress-date">
                            <p class="f-12-400">4.3 월 시작</p>
                            <p class="f-12-400">7.3 월 종료</p>
                        </div>
                    </div>
                    <button class="btn2">
                        <img src="@/assets/image/write.png" alt="후기 작성하기">후기 작성하기
                    </button>
                </div>
            </div>
            <div class="second-section">
                <div class="second-section-inner mob-inner">
                    <div class="place-history" v-for="historyItem in history" :key="historyItem">
                        <div class="top-column">
                            <div class="f-12-400">
                                <p>{{ historyItem.payDate }} 결제</p>
                                <p>{{ historyItem.current }}</p>
                            </div>
                            <div class="lnb">
                                <div class="heart"><img src="@/assets/image/heart-off.png" alt="찜하기" /></div>
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
                                <div class="f-16-700">{{ historyItem.trainerName }} 트레이너({{ historyItem.center }}) | {{ historyItem.exerciseName }}</div>
                                <div class="f-12-400">
                                    <p>
                                        시작일 : <span> {{ historyItem.startDate }} /</span>
                                    </p>
                                    <p>
                                        종료일 : <span> {{ historyItem.endDate }} </span>
                                    </p>
                                </div>
                            </div>
                            <div class="img-box"></div>
                        </div>
                        <div class="bott-column">
                            <div class="f-12-400">
                                <p>운동은 어떠셨나요? 후기를 적어주세요</p>
                                <router-link to="/" class="f-12-400">후기 쓰기</router-link>
                            </div>
                            <router-link to="/" class="f-14-700"><img src="@/assets/image/wallet.png" alt="결제하기" />같은 운동 결제하기</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>