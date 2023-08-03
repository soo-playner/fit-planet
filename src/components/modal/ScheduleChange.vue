<script>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        name : 'ScheduleChange',
        components : {
            VueDatePicker
        },
        data () {
            return {
                toggleClass : false
            }
        },
        methods : {
            toggleDay(){
                this.toggleClass = !this.toggleClass
            }
        }
    }
</script>

<template>
    <div class="ScheduleChange_alert">
        <div class="overlay"></div>
        <div class="ScheduleChange_alert_inner">
            <div class="existing">
                <div class="f-14-400">기존 운동 일정</div>
                <p class="f-16-700">2023.07.10 운동 시작 / 매주 월 수 금</p>
            </div>
            <div class="day">
                <div class="f-14-400">
                    <p>매주</p>
                    <span>
                        <span>월</span><span>수</span><span>금</span>
                    </span>
                    <p>요일 운동으로 변경할게요</p>
                </div>
                <ul class="day-list" @click="toggleDay">
                    <li :class="{active : toggleClass}">월</li>
                    <li :class="{active : toggleClass}">화</li>
                    <li :class="{active : toggleClass}">수</li>
                    <li :class="{active : toggleClass}">목</li>
                    <li :class="{active : toggleClass}">금</li>
                    <li :class="{active : toggleClass}">토</li>
                    <li :class="{active : toggleClass}">일</li>
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
                <VueDatePicker></VueDatePicker>
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