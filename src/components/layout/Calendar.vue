<script>
export default {
    name: "CalendaR",
    components: {},
    data() {
        return {
            day: ["일", "월", "화", "수", "목", "금", "토"],
            todayY: new Date().getFullYear(),
            todayM: new Date().getMonth(),
            todayD: new Date().getDate(),
            emptyCount: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(),
            dateLength: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
            selectedDate: new Date().getDate(),
            selectedDay: [],
        };
    },
    methods: {
        prevM() {
            if (this.todayY === new Date().getFullYear() && this.todayM - 1 <= new Date().getMonth()) {
                this.todayM = new Date().getMonth();
                this.todayD = new Date().getDate();
                this.emptyCount = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
                this.dateLength = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
                this.selectedDate = new Date().getDate();
                return;
            }
            let currDate = new Date(this.todayY, this.todayM, this.todayD);
            currDate.setMonth(this.todayM - 1);
            this.setM(currDate);
        },
        nextM() {
            let currDate = new Date(this.todayY, this.todayM, this.todayD);
            currDate.setMonth(this.todayM + 1);
            this.setM(currDate);
        },
        setM(currDate) {
            this.todayY = currDate.getFullYear();
            this.todayM = currDate.getMonth();
            this.todayD = 1;
            this.emptyCount = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();
            this.dateLength = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
            this.selectedDate = 1;
        },
    },
};
</script>

<template>
    <div class="ScheduleChange_alert">
        <div class="overlay"></div>
        <div class="ScheduleChange_alert_inner">
            <div class="existing">
                <div class="f-14-400">기존 운동 일정</div>
                <p class="f-16-700">2023.07.10 운동 시작 / 매주 {{ selectedDay.join(" ") }}</p>
            </div>
            <div class="day">
                <div class="f-14-400">
                    <p>매주</p>
                    <span>
                        <span v-for="(el, idx) in selectedDay" :key="idx">{{ el }}</span>
                    </span>
                    <p>요일 운동으로 변경할게요</p>
                </div>
                <ul class="day-list" @click="toggleDay">
                    <li
                        v-for="(el, idx) in day"
                        :key="idx"
                        :class="{ active: selectedDay.includes(el) }"
                        @click="
                            if (selectedDay.includes(el)) {
                                selectedDay.splice(selectedDay.indexOf(el), 1);
                            } else {
                                selectedDay.push(el);
                            }
                            selectedDay.sort((a, b) => {
                                return day.indexOf(a) - day.indexOf(b);
                            });
                        "
                    >
                        {{ el }}
                    </li>
                </ul>
            </div>
            <div class="datePicker">
                <div class="apply">
                    <div class="f-14-400">
                        <p><span>2023</span>년</p>
                        <p><span>07</span>월</p>
                        <p><span>10</span>일부터</p>
                    </div>
                    <p class="f-14-400">변경 일정을 적용할게요</p>
                </div>
                <div class="calendar_wrap">
                    <header>
                        <h1>{{ todayY }}년 {{ todayM < 9 ? "0" + (todayM + 1) : todayM + 1 }}월</h1>
                        <div class="btn_wrap">
                            <img src="@/assets/image/back.png" class="prev" data-type="prev" @click="prevM" />
                            <img src="@/assets/image/back.png" class="next" @click="nextM" />
                        </div>
                    </header>
                    <section class="picker_wrap">
                        <ul class="day_list">
                            <li v-for="(el, idx) in day" :key="idx" class="day">{{ el }}</li>
                        </ul>
                        <ul class="date_list">
                            <li v-for="(el, idx) in emptyCount" :key="idx" class="date"></li>
                            <li
                                v-for="(el, idx) in dateLength"
                                :key="idx"
                                class="date"
                                :class="[{ selected: selectedDate == idx + 1 }, { prevDate: todayD > idx + 1 }]"
                                @click="
                                    if (todayD <= idx + 1) {
                                        selectedDate = idx + 1;
                                    }
                                "
                            >
                                {{ idx + 1 }}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <div class="day_change_btn">
                <p class="f-14-400">등록해주신 변경 기준일부터 변경 일정이 적용돼요</p>
                <div>
                    <button>변경하지 않기</button>
                    <button>일정 변경하기</button>
                </div>
            </div>
        </div>
    </div>
</template>
