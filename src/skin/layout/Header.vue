<script>
    import Alert from "./components/Alert";
    import Search from "./components/Search";

    export default {
        name: "Header",
        components: {
            Alert, Search
        },
        data() {
            return {
                AlertOpen : false,
                SearchOpen : false,
                headerActive : [
                    "JoinStep1", "JoinStep2", "JoinStep3", "JoinComplete", "Authority", 
                ]
            }
        },
        methods: {
            AlertOpenFnc: function () {
                this.AlertOpen = !this.AlertOpen;
            },
            SearchOpenFnc: function () {
                this.SearchOpen = !this.SearchOpen;
            },
            headerType() {
                switch (this.$route.fullPath) {
                    case "/": {
                        return {
                            logo: true,
                            alarm: true,
                            search: true,
                            mypage: true,
                        };
                    }
                    case "/join/step1": {
                        return {
                            back: true,
                            overallProgress: 3,
                            currentProgress: 1,
                        };
                    }
                    case "/join/step2": {
                        return {
                            back: true,
                            overallProgress: 3,
                            currentProgress: 2,
                        };
                    }
                    case "/join/step3": {
                        return {
                            back: true,
                            overallProgress: 3,
                            currentProgress: 3,
                        };
                    }
                    case "/authority": {
                        return {
                            close : true
                        };
                    }
                    case "/join/complete": {
                        return {
                            back: true,
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
                    case "/join/step1": {
                        return "서비스 이용 동의";
                    }
                    case "/join/step2": {
                        return "회원가입";
                    }
                    case "/join/step3": {
                        return "닉네임 등록";
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
        :class="headerActive.includes($route.name) ? 'active' : ''"
    >
        <div class="at-header-inner">
            <img v-if="headerType()['back']" src="@/assets/image/back.png" alt="뒤로가기" />
            <div class="logo" v-if="headerType()['logo']">
                <img src="@/assets/image/logo.png" alt="핏플래닛 로고" />
            </div>
            <h1 v-if="headerTitle()" class="f-16-400">{{ headerTitle() }}</h1>
            <div></div>
            <ul class="menu-ul">
                <li v-if="headerType()['alarm']" @click="AlertOpenFnc"><img src="@/assets/image/alarm.png" alt="알림" /></li>
                <li v-if="headerType()['search']" @click="SearchOpenFnc"><span class="search"></span></li>
                <li v-if="headerType()['mypage']"><img src="@/assets/image/person.png" alt="마이페이지" /></li>
                <li v-if="headerType()['home']"><img src="@/assets/image/home.png" alt="홈" /></li>
                <li v-if="headerType()['setting']"><img src="@/assets/image/setting.png" alt="설정" /></li>
                <li v-if="headerType()['close']"><img src="@/assets/image/close.png" alt="닫기" /></li>
                <li v-if="headerType()['overallProgress']" class="progress">{{ headerType()["currentProgress"] }}/{{ headerType()["overallProgress"] }}</li>
            </ul>
        </div>

        <Alert :class="{ active: AlertOpen }" />
        <Search :class="{ active: SearchOpen }" />
    </header>
</template>
