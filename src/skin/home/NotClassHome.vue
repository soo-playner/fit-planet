<script setup>
// 하트 이미지 변경
const toggle = (e) => {
    e.target.classList.toggle('wish');
}
</script>

<template>
    <div class="notClass_home_container main-layout home_container">
        <div class="notClass_home_container_inner first-section">
            <div class="mob-inner">
                <div class="top-column">
                    <div class="f-20-300 menu-dot"><p class="f-20-500">등록 대기</p>중인 운동이 있어요<span></span></div>
                    <ul class="place-list">
                        <li><button>플레이스 보기</button></li>
                        <li><button>결제 내역 보기</button></li>
                        <li><button>공유하기</button></li>
                    </ul>
                </div>
                <div class="mid-column">
                    <div class="place-img-box"><img src="@/assets/image/home-trainer5.png" alt=""></div>
                </div>
                <div class="bott-column">
                    <div class="txt-box">
                        <div class="place-pay-info">
                            <div class="f-16-300">4.1토 결제</div>
                            <div class="f-16-500">바디프로필 프로젝트 30회</div>
                        </div>
                        <p class="f-14-400">운동을 시작해 볼까요?</p>
                    </div>
                    <button class="btn-44-purple f-12-700"><span class="plus"></span>수강권 등록하고 운동 시작하기</button>
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
                            <div class="f-14-500">
                                <p class="f-14-300">김위즈 트레이너(위즈짐)</p>
                                바디프로필 프로젝트 30회
                            </div>
                            <div class="f-12-400 date">
                                <p><span class="blue-dot"></span>시작일 : 4.3 월</p>
                                <p><span class="purple-dot"></span>종료일 : 7.3 월</p>
                            </div>
                        </div>
                        <div class="img-box"><img src="@/assets/image/home-trainer6.png" alt=""></div>
                    </div>
                    <div class="bott-column">
                        <div class="f-12-400">
                            <p>운동은 어떠셨나요? 후기를 적어주세요</p>
                            <router-link to="/" class="f-12-400">후기 쓰기</router-link>
                        </div>
                        <button>같은 운동 결제하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
