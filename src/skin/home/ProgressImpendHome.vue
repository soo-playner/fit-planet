<script setup>
// 하트 이미지 변경
const toggle = (e) => {
    e.target.classList.toggle('wish');
}
</script>

<template>
    <div class="progressImpend_home_container main-layout home_container">
        <div class="progressImpend_home_container_inner first-section">
            <div class="mob-inner">
                <div class="top-column">
                    <p class="f-12-400 menu-dot gray1">4.1토 결제<span></span></p>
                    <ul class="place-list">
                        <li><button>트레이너 보기</button></li>
                        <li><button @click="scheduleOpen = true">수강권 등록일 변경</button></li>
                        <li><button>결제 내역 보기</button></li>
                        <li><button>공유하기</button></li>
                    </ul>
                </div>
                <div class="mid-column">
                    <div class="place-txt-box">
                        <div class="f-18-700">7일 뒤 운동이 종료돼요</div>
                        <p class="f-14-400">
                            <span>위즈짐</span>
                            <span>6개월 수강권</span>
                        </p>
                    </div>
                </div>
                <div class="bott-column">
                    <div class="place-progress-box">
                        <div class="progress-bar">
                            <div class="progress-bubble">95%</div>
                            <div class="progress-value"><span class="step"></span></div>
                        </div>
                        <div class="progress-date">
                            <p class="f-12-400">4.3 월 시작</p>
                            <p class="f-12-400">7.3 월 종료</p>
                        </div>
                    </div>
                    <button class="btn1">
                        운동 추가 결제하기
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
                            <div class="heart" @click="toggle"></div>
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
                            <div class="f-14-500">김위즈 트레이너(위즈짐)<br>바디프로필 프로젝트 30회</div>
                            <div class="f-12-400">
                                <p>시작일 : <span> 4.3 월 /</span></p>
                                <p>종료일 : <span> 7.3 월</span></p>
                            </div>
                        </div>
                        <div class="img-box"></div>
                    </div>
                    <div class="bott-column">
                        <div class="f-12-400">
                            <p>운동은 어떠셨나요? 후기를 적어주세요</p>
                            <router-link to="/" class="f-12-400">후기 쓰기</router-link>
                        </div>
                        <button class="btn1-1">
                            같은 운동 결제하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>