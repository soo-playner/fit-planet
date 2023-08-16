/******************************
npm install vue-router
npm i swiper@6.8.4
npm install @vuepic/vue-datepicker
npm install vuex@next
*******************************/
import { createRouter, createWebHistory } from "vue-router";

import Home from "../skin/home/Home";
import Class_Home from "../skin/home/Class_Home";
import NotClass_Home from "../skin/home/NotClass_Home";
import SplashPage from "../routes/intro/SplashPage";
import IntroPage from "../routes/intro/IntroPage";
import Login from "../routes/login/Login";
import JoinStep1 from "../routes/join/JoinStep1";
import JoinStep2 from "../routes/join/JoinStep2";
import JoinStep3 from "../routes/join/JoinStep3";
import JoinComplete from "../routes/join/JoinComplete";
import Authority from "../routes/join/Authority";
import FindID_Step1 from "../routes/find_account/FindID_Step1";
import FindID_Step2 from "../routes/find_account/FindID_Step2";
import FindID_Step3 from "../routes/find_account/FindID_Step3";
import FindPW_Step1 from "../routes/find_account/FindPW_Step1";
import FindPW_Step2 from "../routes/find_account/FindPW_Step2";
import FindPW_Email_Step1 from "../routes/find_account/FindPW_Email_Step1";
import FindPW_Email_Step2 from "../routes/find_account/FindPW_Email_Step2";
import PW_Reset from "../routes/find_account/PW_Reset";
import Place from "../routes/place/Place";
import Filter from "../routes/place/Filter";
import PlaceList from "../routes/place/PlaceList";
import PlaceDetail from "../routes/place/PlaceDetail";
import PlaceReview from "../routes/place/PlaceReview";
import PlaceMachine from "../routes/place/PlaceMachine";
import PlaceMachine_Choice from "../routes/place/PlaceMachine_Choice";
import PlaceTrainer from "../routes/place/PlaceTrainer";
import PlacePay from "../routes/place/PlacePay";
import PlacePay_Complete from "../routes/place/PlacePay_Complete";
import PlaceTicket_Complete from "../routes/place/PlaceTicket_Complete";
import TrainerDetail from "../routes/trainer/TrainerDetail";
import Review from "../routes/review/Review";
import MyReview from "../routes/review/MyReview";
import ReviewSelect from "../routes/review/ReviewSelect";
import ReviewWrite from "../routes/review/ReviewWrite";
import OrderInquiry from "../routes/order/OrderInquiry";
import OrderInquiryView from "../routes/order/OrderInquiryView";
import CancleInquiry from "../routes/order/CancleInquiry";
import MyPage from "../routes/mypage/MyPage";
import Coupon from "../routes/mypage/Coupon";
import Profile_Type1 from "../routes/mypage/Profile_Type1";
import Profile_Type2 from "../routes/mypage/Profile_Type2";
import AccountDelete from "../routes/mypage/AccountDelete";
import ChangeNickname from "../routes/mypage/ChangeNickname";
import ChangePassword from "../routes/mypage/ChangePassword";
import ChangePassword_Confirm from "../routes/mypage/ChangePassword_Confirm";
import EventNews from "../routes/community/EventNews";
import Terms from "../routes/community/Terms";
import FAQ from "../routes/community/FAQ";
import Inquiry from "../routes/community/Inquiry";
import InquiryComplete from "../routes/community/InquiryComplete";
import SearchResult from "../components/layout/SearchResult";
import AlertSetting from "../skin/layout/components/AlertSetting";
import ScheduleChange from "../components/modal/ScheduleChange";
import Calendar from "../components/layout/Calendar";

const routes = [
    { path: "/calendar", component: Calendar, name: "Cala" },
    // 인트로
    { path: "/splash", component: SplashPage, name: "SplashPage" },
    { path: "/intro", component: IntroPage, name: "IntroPage" },
    // 메인
    { path: "/", component: Home, name: "Home" }, // 첫 방문
    { path: "/class", component: Class_Home, name: "Class_Home" }, // 플레이스 수강권 미등록
    { path: "/not/class", component: NotClass_Home, name: "NotClass_Home" }, // 트레이너 운동 일정 미등록
    // 로그인
    { path: "/login", component: Login, name: "Login", meta: { title: "로그인" } },
    // 회원가입
    { path: "/join/step1", component: JoinStep1, name: "JoinStep1" }, // 서비스 이용 동의 - 1/4
    { path: "/join/step2", component: JoinStep2, name: "JoinStep2" }, // 회원가입 - 2/4
    { path: "/join/step3", component: JoinStep3, name: "JoinStep3" }, // 닉네임 등록 - 3/4
    { path: "/join/complete", component: JoinComplete, name: "JoinComplete" }, // 가입 완료 - 4/4
    { path: "/authority", component: Authority, name: "Authority" }, // 권한 설정
    // 아이디, 비밀번호 찾기
    { path: "/find/id/step1", component: FindID_Step1, name: "FindID_Step1" },
    { path: "/find/id/step2", component: FindID_Step2, name: "FindID_Step2" },
    { path: "/find/id/step3", component: FindID_Step3, name: "FindID_Step3" },
    { path: "/find/pw/step1", component: FindPW_Step1, name: "FindPW_Step1" },
    { path: "/find/pw/step2", component: FindPW_Step2, name: "FindPW_Step2" },
    { path: "/find/pw/email/step1", component: FindPW_Email_Step1, name: "FindPW_Email_Step1" },
    { path: "/find/pw/email/step2", component: FindPW_Email_Step2, name: "FindPW_Email_Step2" },
    // 비밀번호 재설정
    { path: "/PW_Reset", component: PW_Reset, name: "PW_Reset" },
    // 플레이스
    { path: "/place", component: Place, name: "Place" },
    { path: "/filter", component: Filter, name: "Filter" },
    { path: "/place/list", component: PlaceList, name: "PlaceList" },
    { path: "/place/detail", component: PlaceDetail, name: "PlaceDetail" },
    { path: "/place/review", component: PlaceReview, name: "PlaceReview" },
    { path: "/place/machine", component: PlaceMachine, name: "PlaceMachine" },
    { path: "/place/machine/choice", component: PlaceMachine_Choice, name: "PlaceMachine_Choice" },
    { path: "/place/trainer", component: PlaceTrainer, name: "PlaceTrainer" },
    { path: "/place/pay", component: PlacePay, name: "PlacePay" },
    { path: "/place/pay/pomplete", component: PlacePay_Complete, name: "PlacePay_Complete" },
    { path: "/place/ticket/complete", component: PlaceTicket_Complete, name: "PlaceTicket_Complete" },
    // 트레이너
    { path: "/trainer/detail", component: TrainerDetail, name: "TrainerDetail" },
    // 후기
    { path: "/review", component: Review, name: "Review" },
    { path: "/my/review", component: MyReview, name: "MyReview" },
    { path: "/review/select", component: ReviewSelect, name: "ReviewSelect" },
    { path: "/review/write", component: ReviewWrite, name: "ReviewWrite" },
    // 마이페이지
    { path: "/myPage", component: MyPage, name: "MyPage" },
    { path: "/coupon", component: Coupon, name: "Coupon" },
    { path: "/profile_sns_login", component: Profile_Type1, name: "Profile_Type1" },
    { path: "/profile_email_login", component: Profile_Type2, name: "Profile_Type2" },
    { path: "/account/delete", component: AccountDelete, name: "AccountDelete" },
    { path: "/change/nickname", component: ChangeNickname, name: "ChangeNickname" },
    { path: "/change/password", component: ChangePassword, name: "ChangePassword" },
    { path: "/change/password/confirm", component: ChangePassword_Confirm, name: "ChangePassword_Confirm" },
    // 주문내역
    { path: "/orderInquiry", component: OrderInquiry, name: "OrderInquiry" },
    { path: "/orderInquiryView", component: OrderInquiryView, name: "OrderInquiryView" },
    { path: "/cancleInquiry", component: CancleInquiry, name: "CancleInquiry" },
    // 커뮤니티
    { path: "/event-news", component: EventNews, name: "EventNews" },
    { path: "/terms", component: Terms, name: "Terms" },
    { path: "/faq", component: FAQ, name: "FAQ" },
    { path: "/inquiry", component: Inquiry, name: "Inquiry" },
    { path: "/inquiry/complete", component: InquiryComplete, name: "InquiryComplete" },
    { path: "/scheduleChange", component: ScheduleChange, name: "ScheduleChange" },
    // 검색창
    { path: "/search/result", component: SearchResult, name: "SearchResult" },
    // 알림창
    { path: "/alert/setting", component: AlertSetting, name: "AlertSetting" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
// router.beforeEach((to, from, next) => {
//     if(to.params == '/'){
//         document.title =  "메인 | " + this.$env.VUE_APP_NAME
//     }
// });

export { router };
