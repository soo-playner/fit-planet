<script>
    import Header from '../src/components/layout/Header';
    import HeaderType_1 from '../src/components/layout/HeaderType_1';
    import Footer from '../src/components/layout/Footer';

    import './assets/scss/App.css';

    export default {
        name: 'App',
        components: {
            Header, Footer,
            HeaderType_1
        },
        data : () => ({
            // 헤더 미노출
            notVisiable : [
                /* 인트로 */ "IntroPage", "SplashPage",
                /* 로그인 */ "Login", 
                /* 회원가입 */ "Join", "JoinAccount", "JoinPass", "JoinNickname", "JoinComplete", "Authority", 
                /* 아이디 찾기 */ "FindID_Step1", "FindID_Step2", "FindID_Step3",
                /* 비밀번호 찾기 */ "FindPW_Step1", "FindPW_Step2", "PW_Reset",
                /* 이메일로 비밀번호 찾기 */ "FindPW_Email_Step1", "FindPW_Email_Step2",  
            ],
            // 기본 헤더 노출
            visiableHeader_1 : [
                "/", "Class", "NotClass"
            ],
            visiableHeader_2 : [
                /* 플레이스 */ "PlaceDetail", "PlaceReview", "PlaceMachine", "PlaceMachine_Choice", "PlaceTrainer", "PlacePay", "PlacePay_Complete", "PlaceTicket_Complete", "Filter",
            ],

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
                /* 마이페이지 */ "MyPage", "Profile", "Coupon", "AccountDelete",
                /* 주문내역 */ "OrderInquiry", "OrderInquiryView", "CancleInquiry",
                /* 후기 */ "Review", "ReviewSelect", "ReviewWrite",
                /* 커뮤니티 */ "News", "Event", "Terms", "FAQ", "Inquiry", "InquiryComplete",
                /* 검색 */ "Search",
                /* 알림 */ "Alert", "AlertSetting",
            ],
        }),
    }

</script>

<template>
    <Header v-if="visiableHeader_1.includes($route.name)"></Header>
    <HeaderType_1 v-else-if="visiableHeader_2.includes($route.name)"></HeaderType_1>
    
    <router-view></router-view>
    <Footer v-if="!visiableRouter.includes($route.name)"></Footer>
</template>