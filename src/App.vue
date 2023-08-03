<script>
    import Header from '../src/components/layout/Header';
    import Footer from '../src/components/layout/Footer';

    import './assets/scss/App.css';

    export default {
        name: 'App',
        components: {
            Header, Footer,
        },
        data : () => ({
            visiableRouter : [
                /* 인트로 */ "IntroPage", "SplashPage",
                /* 로그인 */ "Login", 
                /* 회원가입 */ "Join", "JoinAccount", "JoinPass", "JoinNickname", "JoinComplete", "Authority", 
                /* 아이디 찾기 */ "FindID_Step1", "FindID_Step2", "FindID_Step3",
                /* 비밀번호 찾기 */ "FindPW_Step1", "FindPW_Step2", "PW_Reset",
                /* 이메일로 비밀번호 찾기 */ "FindPW_Email_Step1", "FindPW_Email_Step2",
                /* 플레이스 */ "PlaceDetail", "PlaceReview", "PlaceMachine", "PlaceMachine_Choice", "PlaceTrainer", "PlacePay", "PlacePay_Complete", "PlaceTicket_Complete", "Filter",
                /* 트레이너 */ "TrainerDetail",
                /* 리뷰 */ "Review",
                /* 마이페이지 */ "MyPage", "Profile",
                /* 주문내역 */ "OrderInquiry", "OrderInquiryView",
            ]
        }),
    }

</script>

<template>
    <Header v-if="!visiableRouter.includes($route.name)"></Header>
    <router-view></router-view>
    <Footer v-if="!visiableRouter.includes($route.name)"></Footer>
</template>