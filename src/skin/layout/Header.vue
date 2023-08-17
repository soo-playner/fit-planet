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
                    case "/Authority":
                    case "/place/pay/complete":
                    case "/Inquiry/complete": {
                        return {
                            close : true
                        };
                    }
                    case "/filter": {
                        return {
                            back: true,
                            close: true,
                        };
                    }
                    case "/Place/Detail": {
                        return {
                            back: true,
                            search: true,
                            mypage: true,
                        };
                    }
                    case "/Terms" :
                    case "/Inquiry" :
                    case "/faq" :
                    case "/event-news" :
                    case "/coupon" :
                    case "/orderinquiry" :
                    case "/orderinquiryView" :
                    case "/cancleinquiry" :
                    case "/mypage" : {
                        return {
                            back : true,
                            home : true
                        };
                    }
                    case "/review/detail" : {
                        return {
                            back : true,
                            write : true,
                            search : true,
                            mypage : true
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
                    case "/find/pw/step1":
                    case "/find/pw/step2": {
                        return "비밀번호 찾기";
                    }
                    case "/pw/reset": {
                        return "비밀번호 재설정";
                    }
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
                    case "/place/machine-choice": {
                        return "운동 선택하기";
                    }
                    case "/place/pay": {
                        return "결제하기";
                    }
                    case "/place/pay/complete": {
                        return "결제 완료";
                    }
                    case "/terms": {
                        return "약관 및 정책";
                    }
                    case "/inquiry": {
                        return "이메일 문의";
                    }
                    case "/faq": {
                        return "자주 묻는 질문";
                    }
                    case "/coupon": {
                        return "마이쿠폰";
                    }
                    case "/orderinquiry": {
                        return "주문목록";
                    }
                    case "/orderinquiryView": {
                        return "주문 상세";
                    }
                    case "/cancleinquiry": {
                        return "취소 상세";
                    }
                    case "/Account/Delete": {
                        return "회원 탈퇴";
                    }
                    case "/MyPage": {
                        return "마이";
                    }
                    case "/Review/Select": {
                        return "후기 작성";
                    }
                    case "/profile_email_login":
                    case "/profile_sns_login": {
                        return "회원정보";
                    }
                    case "/Inquiry":
                    case "/Inquiry/complete": {
                        return "이메일 문의";
                    }
                    case "/Change/Nickname": {
                        return "닉네임 변경";
                    }
                    case "/Change/Password":
                    case "/Change/Password/Confirm": {
                        return "비밀번호 변경";
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
                <li v-if="headerType()['write']"><img src="@/assets/image/write.png" alt="글쓰기" /></li>
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
