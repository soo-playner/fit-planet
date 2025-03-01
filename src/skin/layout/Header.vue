<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Alert from "./components/Alert";
import Search from "./components/Search";

const route = useRoute();

const AlertOpen = ref(false);
const SearchOpen = ref(false);
const headerActive = ref(["JoinStep1", "JoinStep2", "JoinStep3", "JoinComplete", "Authority"]);

const headerBottBorder = ref(
    [
        "Terms", 
        "InquiryComplete", 
        "Coupon", 
        "OrderInquiry", "OrderInquiryView", "CancelInquiry",
        "MyPage", "Profile_Type1", "Profile_Type2", 
        "Filter",
        "ReviewSelect", "ReviewWrite",
        "PlaceMachine_Choice", "PlacePay", "PlacePay_Complete", "PlaceTrainer", "PlaceMachine", "PlaceReview",
        "TrainerMachine_Choice", "TrainerPay_Complete", "TrainerTicket_Complete", "TrainerReview"
    ]
);

// 헤더 페이지마다 색상 다르게 설정
const headerThrough = ref(
    [
        "Home", "NotClassHome", "ClassHome", "ProgressHome", "CompleteHome"
    ]
)

const AlertOpenFnc = () => {
    AlertOpen.value = !AlertOpen.value;
    SearchOpen.value = false;
}; 

const SearchOpenFnc = () => {
    SearchOpen.value = !SearchOpen.value;
    AlertOpen.value = false;
};

const headerType = () => {
    switch (route.fullPath) {
        case "/":
        case "/Class":
        case "/class/":
        case "/progress/class":
        case "/not/class/trainer":
        case "/complete/class": {
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
        case "/authority":
        case "/place/pay/complete":
        case "/place/ticket/complete":
        case "/trainer/pay/complete":
        case "/Inquiry/complete":
        case "/Review/Select":
        case "/Review/Write": {
            return {
                close: true,
            };
        }
        case "/filter": {
            return {
                back: true,
                close: true,
            };
        }
        case "/place/detail": {
            return {
                back: true,
                search: true,
                mypage: true,
            };
        }
        case "/Terms":
        case "/terms":
        case "/Inquiry":
        case "/faq":
        case "/event-news":
        case "/coupon":
        case "/orderinquiry":
        case "/orderinquiryView":
        case "/cancelInquiry":
        case "/mypage":
        case "/MyPage": {
            return {
                back: true,
                home: true,
            };
        }
        case "/review/detail":
        case "/my-review": {
            return {
                back: true,
                write: true,
                search: true,
                mypage: true,
            };
        }
        case "/discover": {
            return {
                search: true,
                mypage: true,
            };
        }
        case "/review": {
            return {
                back: false,
                write: true,
                search: true,
                mypage: true,
            };
        }
        case "/wish": {
            return {
                back: false,
                search: true,
                mypage: true,
            };
        }
        default: {
            return {
                back: true,
            };
        }
    }
};

const headerTitle = () => {
    switch (route.fullPath) {
        case "/find/id/step1":
        case "/find/id/step2": {
            return "아이디 찾기";
        }
        case "/find/pw/step1":
        case "/find/pw/step2": {
            return "비밀번호 찾기";
        }
        case "/find/pw/email/step1": {
            return "이메일로 비밀번호 찾기";
        }
        case "/pw/reset":
        case "/PW_Reset": {
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
        case "/place/machine": {
            return "운동기구";
        }
        case "/place/machine-choice": {
            return "운동 선택하기";
        }
        case "/place/pay": {
            return "결제하기";
        }
        case "/place/pay/complete":
        case "/place/ticket/complete":
        case "/trainer/pay/complete": {
            return "결제 완료";
        }
        case "/place/review":
        case "/trainer/review": {
            return "이용 후기";
        }
        case "/Place/Trainer": {
            return "1:1 트레이너";
        }
        case "/Terms":
        case "/terms": {
            return "약관 및 정책";
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
        case "/orderinquiryView":
        case "/OrderInquiryView": {
            return "주문 상세";
        }
        case "/cancelInquiry": {
            return "취소 상세";
        }
        case "/Account/Delete": {
            return "회원 탈퇴";
        }
        case "/MyPage": {
            return "마이";
        }
        case "/Review/Select":
        case "/Review/Write": {
            return "후기 작성";
        }
        case "/interest/region": {
            return "관심지역 추가";
        }
        case "/profile_email_login":
        case "/profile_sns_login":
        case "/Profile_sns_login": {
            return "회원정보";
        }
        case "/Inquiry":
        case "/Inquiry/complete": {
            return "이메일 문의";
        }
        case "/Change/Nickname":
        case "/change/nickname": {
            return "닉네임 변경";
        }
        case "/Change/Password":
        case "/change/password":
        case "/Change/Password/Confirm":
        case "/change/password/confirm": {
            return "비밀번호 변경";
        }
        default: {
            return false;
        }
    }
};

const pageName = () => {
    switch (route.fullPath) {
        case "/discover": {
            return "발견";
        }
        case "/review": {
            return "후기";
        }
        case "/wish": {
            return "찜";
        }
    }
};
</script>

<template>
    <header
        class="at-header"
        :class="[
            headerActive.includes($route.name) ? 'active' : '', 
            headerBottBorder.includes($route.name) ? 'border' : '',
            $route.name === 'DiscoverList' ? 'discover' : '',
            headerThrough.includes($route.name) ? 'through' : '',
        ]"
    >
        <span 
            class="header-current"
            :style="{
            backgroundImage: 
                `linear-gradient(90deg, #9161E1, #44A5E1, #00FD65 ${(headerType()['currentProgress'] / headerType()['overallProgress']) * 100}%, 
                #fff ${1 - (headerType()['currentProgress'] / headerType()['overallProgress']) * 100
                }%)`,
            }">
        </span>
        <div class="at-header-inner">
            <div class="left">
                <div v-if="headerType()['back']" @click="$router.go('-1')" class="back">
                    <img src="@/assets/image/back.png" alt="뒤로가기">
                </div>
                <div v-if="headerType()['logo']" class="logo">
                    <img class="logo-img" v-if="headerThrough.includes($route.name)" src="@/assets/image/logo.png" alt="핏플래닛 로고" />
                    <img class="logo-img" v-else src="@/assets/image/logo_b.png" alt="핏플래닛 로고">
                </div>
                <h1 v-if="pageName()" class="f-20-700">{{ pageName() }}</h1>
            </div>
            <div class="center">
                <h1 v-if="headerTitle()" class="f-16-400">{{ headerTitle() }}</h1>
            </div>
            <div class="right">
                <ul class="menu-ul">
                    <li class="alarm" v-if="headerType()['alarm']" @click="AlertOpenFnc">
                        <!-- 현재 알림 이미지는 확정된 홈 시안과 달라서 검은색으로 돼있는 이미지 다시 저장하셔야 합니다. -->
                        <img src="@/assets/image/alarm.png" alt="알림" />

                        <div class="notConfirm-alarm"><span>1</span></div>
                    </li>
                    <li v-if="headerType()['write']">
                        <img src="@/assets/image/write.png" alt="글쓰기" />
                    </li>
                    <li class="search" v-if="headerType()['search']" @click="SearchOpenFnc">
                        <span></span>
                    </li>
                    <li 
                        v-if="headerType()['mypage']"
                        @click="
                            AlertOpen = false;
                            SearchOpen = false;
                        "
                    >
                        <router-link to="/MyPage"><img src="@/assets/image/person.png" alt="마이페이지" /></router-link>
                    </li>
                    <li v-if="headerType()['home']">
                        <router-link to="/"><img src="@/assets/image/home.png" alt="홈" /></router-link>
                    </li>
                    <li v-if="headerType()['setting']">
                        <img src="@/assets/image/setting.png" alt="설정" />
                    </li>
                    <li class="close" v-if="headerType()['close']">
                        <div></div>
                    </li>
                    <li v-if="headerType()['overallProgress']" class="progress">{{ headerType()["currentProgress"] }}/{{ headerType()["overallProgress"] }}</li>
                </ul>
            </div>

            <div class="discover-place f-16-400" v-if="$route.name === 'DiscoverList'">서울시 강남구 대치동</div>
        </div>

        <Alert :class="{ active: AlertOpen }" />
        <Search :class="{ active: SearchOpen }" />
    </header>
</template>
