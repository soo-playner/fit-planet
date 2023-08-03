/******************************
npm install vue-router
npm i swiper@6.8.4
npm install @vuepic/vue-datepicker
*******************************/

/******************************
홈
- Home_1_첫방문    
    ㄴ /components/layout/MainPage.vue 
- Home_1_플레이스 수강권 미등록 / 등록
    ㄴ /components/layout/NotClass_MainPage.vue 
    ㄴ /components/layout/Class_MainPage.vue 

발견
- Discover_3_플레이스_상세페이지
    ㄴ /routes/place/PlaceDetail.vue
- Discover_4_플레이스_상세페이지_후기
    ㄴ /routes/place/PlaceReview.vue
- Discover_4_플레이스_상세페이지_운동기구
    ㄴ /routes/place/PlaceMachine.vue
- Discover_4_플레이스_상세페이지_1:1트레이너
    ㄴ /routes/place/PlaceTrainer.vue
- Discover_4_플레이스_상세페이지_운동 선택하기
    ㄴ /routes/place/PlaceMachine_Choice.vue
- Discover_5_플레이스_상세페이지_결제하기
    ㄴ /routes/place/PlacePay.vue
- Discover_6_플레이스_상세페이지_결제완료(등록하기 모달창 포함)
    ㄴ /routes/place/PlacePay_Complete.vue
- Discover_6_플레이스_상세페이지_등록 완료
    ㄴ /routes/place/PlaceTicket_Complete.vue
******************************/
import { createRouter, createWebHistory } from "vue-router";

import MainPage from '../components/layout/MainPage';
import Class_MainPage from '../components/layout/Class_MainPage';
import NotClass_MainPage from '../components/layout/NotClass_MainPage';
import SplashPage from '../routes/intro/SplashPage';
import IntroPage from '../routes/intro/IntroPage';
import Login from '../routes/login/Login';
import Join from '../routes/join/Join';
import JoinAccount from '../routes/join/JoinAccount';
import JoinPass from '../routes/join/JoinPass';
import JoinNickname from '../routes/join/JoinNickname';
import JoinComplete from '../routes/join/JoinComplete';
import Authority from '../routes/join/Authority';
import FindID_Step1 from '../routes/find_account/FindID_Step1';
import FindID_Step2 from '../routes/find_account/FindID_Step2';
import FindID_Step3 from '../routes/find_account/FindID_Step3';
import FindPW_Step1 from '../routes/find_account/FindPW_Step1';
import FindPW_Step2 from '../routes/find_account/FindPW_Step2';
import FindPW_Email_Step1 from '../routes/find_account/FindPW_Email_Step1';
import FindPW_Email_Step2 from '../routes/find_account/FindPW_Email_Step2';
import PW_Reset from '../routes/find_account/PW_Reset';
import Place from '../routes/place/Place';
import PlaceList from '../routes/place/PlaceList';
import PlaceDetail from '../routes/place/PlaceDetail';
import PlaceReview from '../routes/place/PlaceReview';
import PlaceMachine from '../routes/place/PlaceMachine';
import PlaceMachine_Choice from '../routes/place/PlaceMachine_Choice';
import PlaceTrainer from '../routes/place/PlaceTrainer';
import PlacePay from '../routes/place/PlacePay';
import PlacePay_Complete from '../routes/place/PlacePay_Complete';
import PlaceTicket_Complete from '../routes/place/PlaceTicket_Complete';
import TrainerDetail from '../routes/trainer/TrainerDetail';
import Review from '../routes/review/Review';
import MyPage from '../routes/mypage/MyPage';
import OrderInquiry from '../routes/order/OrderInquiry';
import OrderInquiryView from '../routes/order/OrderInquiryView';
import Coupon from '../routes/mypage/Coupon';

import ScheduleChange from '../components/modal/ScheduleChange';

const routes = [
    // 인트로
    { path : '/Splash', component : SplashPage, name : 'SplashPage' }, 
    { path : '/Intro', component : IntroPage, name : 'IntroPage' },
    // 메인
    { path : '/', component : MainPage, name : 'MainPage' },
    { path : '/Class', component : Class_MainPage, name : 'Class_MainPage' },
    { path : '/NotClass', component : NotClass_MainPage, name : 'NotClass_MainPage' },
    { path : '/Login', component : Login, name : 'Login' },
    // 회원가입
    { path : '/Join', component : Join, name : 'Join' }, 
    { path : '/JoinAccount', component : JoinAccount, name : 'JoinAccount' }, 
    { path : '/JoinPass', component : JoinPass, name : 'JoinPass' },
    { path : '/JoinNickname', component : JoinNickname, name : 'JoinNickname' },  
    { path : '/JoinComplete', component : JoinComplete, name : 'JoinComplete' },
    { path : '/Authority', component : Authority, name : 'Authority' }, 
    //
    { path : '/FindID_Step1', component : FindID_Step1, name : 'FindID_Step1' }, 
    { path : '/FindID_Step2', component : FindID_Step2, name : 'FindID_Step2' }, 
    { path : '/FindID_Step3', component : FindID_Step3, name : 'FindID_Step3' }, 
    { path : '/FindPW_Step1', component : FindPW_Step1, name : 'FindPW_Step1' }, 
    { path : '/FindPW_Step2', component : FindPW_Step2, name : 'FindPW_Step2' }, 
    { path : '/FindPW_Email_Step1', component : FindPW_Email_Step1, name : 'FindPW_Email_Step1' }, 
    { path : '/FindPW_Email_Step2', component : FindPW_Email_Step2, name : 'FindPW_Email_Step2' }, 
    //
    { path : '/PW_Reset', component : PW_Reset, name : 'PW_Reset' }, 
    // 플레이스
    { path : '/Place', component : Place, name : 'Place' }, 
    { path : '/PlaceList', component : PlaceList, name : 'PlaceList' }, 
    { path : '/PlaceDetail', component : PlaceDetail, name : 'PlaceDetail' }, 
    { path : '/PlaceReview', component : PlaceReview, name : 'PlaceReview' }, 
    { path : '/PlaceMachine', component : PlaceMachine, name : 'PlaceMachine' },
    { path : '/PlaceMachine_Choice', component : PlaceMachine_Choice, name : 'PlaceMachine_Choice' },
    { path : '/PlaceTrainer', component : PlaceTrainer, name : 'PlaceTrainer' },
    { path : '/PlacePay', component : PlacePay, name : 'PlacePay' },
    { path : '/PlacePayComplete', component : PlacePay_Complete, name : 'PlacePay_Complete' },
    { path : '/PlaceTicketComplete', component : PlaceTicket_Complete, name : 'PlaceTicket_Complete' },
    // 트레이너
    { path : '/TrainerDetail', component : TrainerDetail, name : 'TrainerDetail' },
    // 후기
    { path : '/Review', component : Review, name : 'Review' },
    // 마이페이지
    { path : '/MyPage', component : MyPage, name : 'MyPage' },
    { path : '/Coupon', component : Coupon, name : 'Coupon' },
    // 주문내역
    { path : '/OrderInquiry', component : OrderInquiry, name : 'OrderInquiry' },
    { path : '/OrderInquiryView', component : OrderInquiryView, name : 'OrderInquiryView' },

    { path : '/ScheduleChange', component : ScheduleChange, name : 'ScheduleChange' }, 
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export { router }