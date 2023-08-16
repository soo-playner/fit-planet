<script>
import ScheduleTrainerEdit from "../../components/modal/ScheduleTrainerEdit.vue";
export default {
    name: "Class_MainPage",
    components: { ScheduleTrainerEdit },
    data() {
        return {
            history: [
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
            ],
            scheduleOpen: false,
        };
    },
};
</script>

<template>
    <div class="Class_main_container main-layout">
        <div class="Class_main_container_inner">
            <div class="Class-section01 first-section">
                <div class="Class-section01-inner main-layout-inner mob-inner">
                    <div class="place-ref">
                        <div class="place-info-1">
                            <p class="f-12-400 menu-dot">4.1 토 결제<span></span></p>
                            <ul class="place-list">
                                <li><router-link to="/">플레이스 보기</router-link></li>
                                <li><a @click="scheduleOpen = true">운동일정 변경</a></li>
                                <li><router-link to="/">결제 내역 보기</router-link></li>
                                <li><router-link to="/">공유하기</router-link></li>
                            </ul>
                        </div>
                        <div class="place-info-2">
                            <div class="place-txt-box">
                                <p class="f-18-700">3일 뒤에 운동이 시작돼요</p>
                                <p class="f-14-400">
                                    <span>위즈짐</span>
                                    <span>6개월 수강권</span>
                                </p>
                            </div>
                            <div class="place-progress-box">
                                <div class="progress-bar">
                                    <div class="progress-bubble">0%</div>
                                    <div class="progress-value"><span class="step"></span></div>
                                    <!-- <div class="form-group">
                                        <input class="progress-value" type="range" min="0" max="100" step="1" value="0" >
                                    </div> -->
                                </div>
                                <div class="progress-date">
                                    <p class="f-12-400">4.3 월 시작</p>
                                    <p class="f-12-400">7.3 월 종료</p>
                                </div>
                            </div>
                            <router-link to="/" class="f-14-700"><img src="@/assets/image/place.png" alt="위치 보기" />플레이스 위치 보기</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Class-section02">
                <div class="Class-section02-inner mob-inner">
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
    <ScheduleTrainerEdit
        v-if="scheduleOpen"
        :scheduleClose="
            () => {
                scheduleOpen = false;
            }
        "
    />
</template>

<style></style>
