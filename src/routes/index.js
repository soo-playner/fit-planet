/******************************
npm install vue-router
npm i swiper@6.8.4
npm install @vuepic/vue-datepicker
npm install vuex@next
*******************************/
import { createRouter, createWebHistory } from "vue-router";

import Splash from "../skin/intro/Splash";
import Intro from "../skin/intro/Intro";
import Home from "../skin/home/Home";
import Class_Home from "../skin/home/ClassHome";
import ClassHome_2 from "../skin/home/ClassHome_2";
import NotClass_Home from "../skin/home/NotClassHome";
import NotClassHome_2 from "../skin/home/NotClassHome_2";
import ProgressHome from "../skin/home/ProgressHome";
import ProgressImpendHome from "../skin/home/ProgressImpendHome";
import Complete_Home from "../skin/home/CompleteHome";
import Login from "../routes/login/Login";
import JoinStep1 from "../routes/join/JoinStep1";
import JoinStep2 from "../routes/join/JoinStep2";
import JoinStep3 from "../routes/join/JoinStep3";
import JoinComplete from "../routes/join/JoinComplete";
import Authority from "../routes/join/Authority";
import FindID_Step1 from "../routes/find_account/id/FindID_Step1";
import FindID_Step2 from "../routes/find_account/id/FindID_Step2";
import FindPW_Step1 from "../routes/find_account/password/FindPW_Step1";
import FindPW_Email_Step1 from "../routes/find_account/password/FindPW_Email_Step1";
import PW_Reset from "../routes/find_account/password/PW_Reset";
import Place from "../routes/place/Place";
import PlaceList from "../routes/place/PlaceList";
import PlaceDetail from "../routes/place/PlaceDetail";
import PlaceReview from "../routes/place/PlaceReview";
import PlaceMachine from "../routes/place/PlaceMachine";
import PlaceMachine_Choice from "../routes/place/PlaceMachine_Choice";
import PlaceTrainer from "../routes/place/PlaceTrainer";
import PlacePay from "../routes/place/PlacePay";
import PlacePay_Complete from "../routes/place/PlacePay_Complete";
import PlaceTicket_Complete from "../routes/place/PlaceTicket_Complete";
import DiscoverList from "../routes/place/DiscoverList";
import TrainerDetail from "../routes/trainer/TrainerDetail";
import TrainerReview from "../routes/trainer/TrainerReview";
import TrainerMachine_Choice from "../routes/trainer/TrainerMachine_Choice";
import TrainerPay_Complete from "../routes/trainer/TrainerPay_Complete";
import TrainerTicket_Complete from "../routes/trainer/TrainerTicket_Complete";
import Review from "../routes/review/Review";
import ReviewDetail from "../routes/review/ReviewDetail";
import MyReview from "../routes/review/MyReview";
import ReviewSelect from "../routes/review/ReviewSelect";
import ReviewWrite from "../routes/review/ReviewWrite";
import InterestRegion from "../routes/review/InterestRegion";
import OrderInquiry from "../routes/order/OrderInquiry";
import OrderInquiryView from "../routes/order/OrderInquiryView";
import CancelInquiry from "../routes/order/CancelInquiry";
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
import WishList from "../routes/wish/WishList";
import AlertSetting from "../skin/layout/components/AlertSetting";
import ScheduleChange from "../components/modal/ScheduleChange";

const routes = [
    // 인트로
    { path: "/splash", component: Splash, name: "Splash" },
    { path: "/intro", component: Intro, name: "Intro" },
    // 메인
    { path: "/", component: Home, name: "Home" }, // 첫 방문
    { path: "/class", component: Class_Home, name: "ClassHome" }, // 플레이스 수강권 등록
    { path: "/class/trainer", component: ClassHome_2, name: "ClassHome_2" }, // 트레이너 수강권 등록
    { path: "/not/class", component: NotClass_Home, name: "NotClassHome" }, // 플레이스 수강권 미등록
    { path: "/not/class/trainer", component: NotClassHome_2, name: "NotClassHome_2" }, // 트레이너 수강권 미등록
    { path: "/progress/class", component: ProgressHome, name: "ProgressHome" }, // 운동 진행 중
    { path: "/progress/impend/class", component: ProgressImpendHome, name: "ProgressImpendHome" }, // 운동 종료 임박
    { path: "/complete/class", component: Complete_Home, name: "CompleteHome" }, // 운동 종료
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
    { path: "/find/pw/step1", component: FindPW_Step1, name: "FindPW_Step1" },
    { path: "/find/pw/email/step1", component: FindPW_Email_Step1, name: "FindPW_Email_Step1" },
    // 비밀번호 재설정
    { path: "/PW_Reset", component: PW_Reset, name: "PW_Reset" },
    // 플레이스
    { path: "/place", component: Place, name: "Place" },
    { path: "/place/list", component: PlaceList, name: "PlaceList" },
    { path: "/place/:id", component: PlaceDetail, name: "PlaceDetail" },
    { path: "/place/review", component: PlaceReview, name: "PlaceReview" },
    { path: "/place/machine", component: PlaceMachine, name: "PlaceMachine" },
    { path: "/place/machine-choice", component: PlaceMachine_Choice, name: "PlaceMachine_Choice" },
    { path: "/place/trainer", component: PlaceTrainer, name: "PlaceTrainer" },
    { path: "/place/pay", component: PlacePay, name: "PlacePay" },
    { path: "/place/pay/complete", component: PlacePay_Complete, name: "PlacePay_Complete" },
    { path: "/place/ticket/complete", component: PlaceTicket_Complete, name: "PlaceTicket_Complete" },
    { path: "/discover", component: DiscoverList, name: "DiscoverList" }, // 발견
    // 트레이너
    { path: "/trainer/detail", component: TrainerDetail, name: "TrainerDetail" },
    { path: "/trainer/review", component: TrainerReview, name: "TrainerReview" },
    { path: "/trainer/machine-choice", component: TrainerMachine_Choice, name: "TrainerMachine_Choice" },
    { path: "/trainer/pay/complete", component: TrainerPay_Complete, name: "TrainerPay_Complete" },
    { path: "/trainer/ticket/complete", component: TrainerTicket_Complete, name: "TrainerTicket_Complete" },
    // 후기
    { path: "/review", component: Review, name: "Review" },
    { path: "/review/detail", component: ReviewDetail, name: "ReviewDetail" },
    { path: "/my-review", component: MyReview, name: "MyReview" },
    { path: "/review/select", component: ReviewSelect, name: "ReviewSelect" },
    { path: "/review/write", component: ReviewWrite, name: "ReviewWrite" },
    { path: "/interest/region", component: InterestRegion, name: "InterestRegion" },
    // 마이페이지
    { path: "/mypage", component: MyPage, name: "MyPage" },
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
    { path: "/cancelInquiry", component: CancelInquiry, name: "CancelInquiry" },
    // 커뮤니티
    { path: "/event-news", component: EventNews, name: "EventNews" },
    { path: "/terms", component: Terms, name: "Terms" },
    { path: "/faq", component: FAQ, name: "FAQ" },
    { path: "/inquiry", component: Inquiry, name: "Inquiry" },
    { path: "/inquiry/complete", component: InquiryComplete, name: "InquiryComplete" },
    { path: "/scheduleChange", component: ScheduleChange, name: "ScheduleChange" },
    // 찜
    { path: "/wish", component: WishList, name: "WishList" },
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
