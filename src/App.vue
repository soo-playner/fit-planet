<script>
import Header from "./skin/layout/Header";
import Footer from "./skin/layout/Footer";

import "./assets/scss/App.css";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    data: () => ({
        navIndex: 0,
        // 헤더 미노출
        animationType: "slide-fade",
        notVisiable1: [/* 인트로 */ "Splash", "Intro"],
        // 풋터 미노출
        notVisiable2: [
            /* 인트로 */ "Splash",
            "Intro",
            /* 로그인 */ "Login",
            /* 회원가입 */ "JoinStep1",
            "JoinStep2",
            "JoinStep3",
            "JoinComplete",
            "Authority",
            /* 아이디 찾기 */ "FindID_Step1",
            "FindID_Step2",
            "FindID_Step3",
            /* 비밀번호 찾기 */ "FindPW_Step1",
            "FindPW_Step2",
            "PW_Reset",
            /* 이메일로 비밀번호 찾기 */ "FindPW_Email_Step1",
            "FindPW_Email_Step2",
            /* 플레이스 */ "PlaceTrainer",
            "PlaceDetail",
            "PlaceMachine",
            "PlacePay_Complete",
            "PlaceMachine_Choice",
            "PlaceTicket_Complete",
            /* 트레이너 */ "TrainerPay_Complete",
            "TrainerDetail",
            "TrainerTicket_Complete",
            "TrainerReview",
            "TrainerMachine_Choice",
            /* 마이페이지 */ "MyPage",
            "Profile_Type1",
            "Profile_Type2",
            /* 닉네임 변경 */ "ChangeNickname",
            /* 비밀번호 변경 */ "ChangePassword",
            "ChangePassword_Confirm",
            /* 후기 */ "ReviewSelect",
            "ReviewWrite",
            "InterestRegion",
            "PlaceReview",
            /* 회원 탈퇴 */ "AccountDelete",
            /* 주문 목록 */ "OrderInquiry",
            "OrderInquiryView",
            "CancelInquiry",
            /* 약관 정책 */ "Terms",
            /* 이메일 문의 */ "InquiryComplete",
            /* 쿠폰 */ "Coupon",
            /* 이벤트, 뉴스 */ "EventNews",
            /* 자주 묻는 질문 */ "FAQ",
        ],
    }),
    methods: {
        changeAnimation($event) {
            if ($event >= this.navIndex) {
                this.navIndex = $event;
                this.animationType = "slide-fade";
            } else {
                this.navIndex = $event;
                this.animationType = "slide-fade-reverse";
            }
        },
    },
};
</script>

<template>
    <Header v-if="!notVisiable1.includes($route.name)" />
    <router-view v-slot="{ Component, route }">
        <!-- <transition :name="animationType"> -->
        <!-- <div :key="route.name" class="im-root-element"> -->
        <component :is="Component" :navIndex="navIndex"></component>
        <!-- </div> -->
        <!-- </transition> -->
    </router-view>
    <Footer v-if="!notVisiable2.includes($route.name)" @slideType="changeAnimation($event)" />
</template>

<style></style>
