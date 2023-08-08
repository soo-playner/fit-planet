/******************************
npm install vue-router
npm i swiper@6.8.4
npm install @vuepic/vue-datepicker
npm install vuex@next
*******************************/
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
import Filter from '../routes/place/Filter';
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
import ReviewSelect from '../routes/review/ReviewSelect';
import ReviewWrite from '../routes/review/ReviewWrite';
import MyPage from '../routes/mypage/MyPage';
import OrderInquiry from '../routes/order/OrderInquiry';
import OrderInquiryView from '../routes/order/OrderInquiryView';
import CancleInquiry from '../routes/order/CancleInquiry';
import Coupon from '../routes/mypage/Coupon';
import Profile from '../routes/mypage/Profile';
import AccountDelete from '../routes/mypage/AccountDelete';
import News from '../routes/community/News';
import Event from '../routes/community/Event';
import Terms from '../routes/community/Terms';
import FAQ from '../routes/community/FAQ';
import Inquiry from '../routes/community/Inquiry';
import InquiryComplete from '../routes/community/InquiryComplete';
import Search from '../components/layout/Search';
import SearchResult from '../components/layout/SearchResult';
import Alert from '../components/layout/Alert';
import AlertSetting from '../components/layout/AlertSetting';
import ScheduleChange from '../components/modal/ScheduleChange';

const routes = [
    // 인트로
    { path : '/Splash', component : SplashPage, name : 'SplashPage' }, 
    { path : '/Intro', component : IntroPage, name : 'IntroPage' },
    // 메인
    { path : '/', component : MainPage, name : 'MainPage' },
    { path : '/Class', component : Class_MainPage, name : 'Class_MainPage' },
    { path : '/NotClass', component : NotClass_MainPage, name : 'NotClass_MainPage' },
    // 로그인
    { path : '/Login', component : Login, name : 'Login' },
    // 회원가입
    { path : '/Join', component : Join, name : 'Join' }, 
    { path : '/JoinAccount', component : JoinAccount, name : 'JoinAccount' }, 
    { path : '/JoinPass', component : JoinPass, name : 'JoinPass' },
    { path : '/JoinNickname', component : JoinNickname, name : 'JoinNickname' },  
    { path : '/Join/Complete', component : JoinComplete, name : 'JoinComplete' },
    { path : '/Authority', component : Authority, name : 'Authority' }, 
    // 아이디, 비밀번호 찾기
    { path : '/FindID_Step1', component : FindID_Step1, name : 'FindID_Step1' }, 
    { path : '/FindID_Step2', component : FindID_Step2, name : 'FindID_Step2' }, 
    { path : '/FindID_Step3', component : FindID_Step3, name : 'FindID_Step3' }, 
    { path : '/FindPW_Step1', component : FindPW_Step1, name : 'FindPW_Step1' }, 
    { path : '/FindPW_Step2', component : FindPW_Step2, name : 'FindPW_Step2' }, 
    { path : '/FindPW_Email_Step1', component : FindPW_Email_Step1, name : 'FindPW_Email_Step1' }, 
    { path : '/FindPW_Email_Step2', component : FindPW_Email_Step2, name : 'FindPW_Email_Step2' }, 
    // 비밀번호 재설정
    { path : '/PW_Reset', component : PW_Reset, name : 'PW_Reset' }, 
    // 플레이스
    { path : '/Place', component : Place, name : 'Place' }, 
    { path : '/Filter', component : Filter, name : 'Filter' }, 
    { path : '/PlaceList', component : PlaceList, name : 'PlaceList' }, 
    { path : '/PlaceDetail', component : PlaceDetail, name : 'PlaceDetail' }, 
    { path : '/PlaceReview', component : PlaceReview, name : 'PlaceReview' }, 
    { path : '/PlaceMachine', component : PlaceMachine, name : 'PlaceMachine' },
    { path : '/PlaceMachine/Choice', component : PlaceMachine_Choice, name : 'PlaceMachine_Choice' },
    { path : '/PlaceTrainer', component : PlaceTrainer, name : 'PlaceTrainer' },
    { path : '/PlacePay', component : PlacePay, name : 'PlacePay' },
    { path : '/PlacePay/Complete', component : PlacePay_Complete, name : 'PlacePay_Complete' },
    { path : '/PlaceTicket/Complete', component : PlaceTicket_Complete, name : 'PlaceTicket_Complete' },
    // 트레이너
    { path : '/TrainerDetail', component : TrainerDetail, name : 'TrainerDetail' },
    // 후기
    { path : '/Review', component : Review, name : 'Review' },
    { path : '/ReviewSelect', component : ReviewSelect, name : 'ReviewSelect' },
    { path : '/ReviewWrite', component : ReviewWrite, name : 'ReviewWrite' },
    // 마이페이지
    { path : '/MyPage', component : MyPage, name : 'MyPage' },
    { path : '/Coupon', component : Coupon, name : 'Coupon' },
    { path : '/Profile', component : Profile, name : 'Profile' },
    { path : '/Account/Delete', component : AccountDelete, name : 'AccountDelete' },
    // 주문내역
    { path : '/OrderInquiry', component : OrderInquiry, name : 'OrderInquiry' },
    { path : '/OrderInquiryView', component : OrderInquiryView, name : 'OrderInquiryView' },
    { path : '/CancleInquiry', component : CancleInquiry, name : 'CancleInquiry' },
    // 커뮤니티
    { path : '/News', component : News, name : 'News' },
    { path : '/Event', component : Event, name : 'Event' },
    { path : '/Terms', component : Terms, name : 'Terms' },
    { path : '/FAQ', component : FAQ, name : 'FAQ' },
    { path : '/Inquiry', component : Inquiry, name : 'Inquiry' },
    { path : '/Inquiry/Complete', component : InquiryComplete, name : 'InquiryComplete' },

    { path : '/ScheduleChange', component : ScheduleChange, name : 'ScheduleChange' },
    // 검색창
    { path : '/Search', component : Search, name : 'Search' }, 
    { path : '/SearchResult', component : SearchResult, name : 'SearchResult' }, 
    // 알림창
    { path : '/Alert', component : Alert, name : 'Alert' }, 
    { path : '/AlertSetting', component : AlertSetting, name : 'AlertSetting' }, 
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export { router }