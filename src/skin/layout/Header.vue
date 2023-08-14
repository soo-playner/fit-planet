<script>
import Alert from "./components/Alert.vue";

export default {
    name: "Header",
    components: {
        Alert,
    },
    data() {
        return {
            AlertOpen: false,
        };
    },
    methods: {
        AlertOpenFnc: function () {
            this.AlertOpen = !this.AlertOpen;
        },
        headerType() {
            switch (this.$route.fullPath) {
                case "/": {
                    return {
                        logo: true,
                        alarm: true,
                        search: true,
                        mypage: true,
                        // setting: true,
                        // home: true,
                    };
                }
                case "/Join": {
                    return {
                        back: true,
                        overallProgress: 3,
                        currentProgress: 1,
                    };
                }
                case "/filter": {
                    return {
                        back: true,
                        close: true,
                    };
                }
                default: {
                    return {
                        back: true,
                    };
                }
            }
        },
        headerTitle() {
            switch (this.$route.fullPath) {
                case "/Join": {
                    return "서비스 이용 동의";
                }
                case "/filter": {
                    return "필터";
                }
                default: {
                    return false;
                }
            }
        },
    },
};
</script>

<template>
    <header
        class="at-header"
        :style="{
            backgroundImage: `linear-gradient(90deg,#f1f1f1 ${(headerType()['currentProgress'] / headerType()['overallProgress']) * 100}%, #fff ${
                1 - (headerType()['currentProgress'] / headerType()['overallProgress']) * 100
            }%)`,
        }"
    >
        <div class="at-header-inner">
            <img v-if="headerType()['back']" src="@/assets/image/back.png" alt="뒤로가기" />
            <div class="logo" v-if="headerType()['logo']">
                <img src="@/assets/image/logo.png" alt="핏플래닛 로고" />
            </div>
            <h1 v-if="headerTitle()">{{ headerTitle() }}</h1>
            <div></div>
            <ul class="menu-ul">
                <li v-if="headerType()['alarm']" @click="AlertOpenFnc"><img src="@/assets/image/alarm.png" alt="알림" /></li>
                <li v-if="headerType()['search']"><span class="search"></span></li>
                <li v-if="headerType()['mypage']"><img src="@/assets/image/person.png" alt="마이페이지" /></li>
                <li v-if="headerType()['home']"><img src="@/assets/image/home.png" alt="홈" /></li>
                <li v-if="headerType()['setting']"><img src="@/assets/image/setting.png" alt="설정" /></li>
                <li v-if="headerType()['close']"><img src="@/assets/image/close.png" alt="닫기" /></li>
                <li v-if="headerType()['overallProgress']" class="progress">{{ headerType()["currentProgress"] }}/{{ headerType()["overallProgress"] }}</li>
            </ul>
        </div>

        <Alert :class="{ active: AlertOpen }" />
    </header>
</template>
