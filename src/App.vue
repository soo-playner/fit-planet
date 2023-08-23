<script>
    import Header from './skin/layout/Header';
    import Footer from './skin/layout/Footer';

    import './assets/scss/App.css';

    export default {
        name: 'App',
        components: {
            Header, Footer,
        },
        data : () => ({
            // 헤더 미노출
            notVisiable1 : [
                /* 인트로 */ "Splash", "Intro", 
                /* 로그인 */ "Login",  
            ],
            // 풋터 미노출
            notVisiable2 : [
                /* 인트로 */ "Splash", "Intro", 
                /* 로그인 */ "Login", 
                /* 회원가입 */ "JoinStep1", "JoinStep2", "JoinStep3", "JoinComplete", "Authority", 
                /* 아이디 찾기 */ "FindID_Step1", "FindID_Step2", "FindID_Step3",
                /* 비밀번호 찾기 */ "FindPW_Step1", "FindPW_Step2", "PW_Reset",
                /* 이메일로 비밀번호 찾기 */ "FindPW_Email_Step1", "FindPW_Email_Step2",  
                /* 플레이스 */ "PlaceTrainer",
                /* 마이페이지 */ "MyPage", "Profile_Type1", "Profile_Type2", 
                /* 닉네임 변경 */ "ChangeNickname",
                /* 비밀번호 변경 */ "ChangePassword", "ChangePassword_Confirm",
                /* 후기 */ "ReviewSelect", "InterestRegion",
                /* 회원 탈퇴 */ "AccountDelete",
                /* 주문 목록 */ "OrderInquiry", "OrderInquiryView", "CancelInquiry",
                /* 약관 정책 */ "Terms",
                /* 이메일 문의 */ "InquiryComplete",
                /* 쿠폰 */ "Coupon",
                /* 이벤트, 뉴스 */ "EventNews",
                /* 자주 묻는 질문 */ "FAQ"
            ],
        }),
    }

</script>

<template>
    <Header v-if="!notVisiable1.includes($route.name)"></Header>
    <router-view></router-view>
    <Footer v-if="!notVisiable2.includes($route.name)"></Footer>
</template>