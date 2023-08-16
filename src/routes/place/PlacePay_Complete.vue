<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

// Data and methods
const ticketModal = ref(false);

const openTicketModal = () => {
    ticketModal.value = !ticketModal.value;
};
</script>

<template>
    <div class="PlacePayComplete_container">
        <div class="PlacePayComplete_container_inner mob-inner">
            <!-- 결제 완료 안내 -->
            <div class="pay-complete-guide">
                <div class="complete-img-box"><img src="@/assets/image/complete.png" alt="결제 완료" /></div>
                <div class="f-20-700">
                    <p>결제 완료!</p>
                    <p>수강권을 등록해볼까요?</p>
                </div>
                <p class="f-14-400">
                    <span>수강권을 등록하면</span>
                    <span>설정한 날짜부터 운동을 시작할 수 있어요</span>
                </p>
                <button class="f-16-700" @click="openTicketModal">수강권 등록하기</button>
                <span class="order-num f-12-400">주문번호 123456789101112</span>
            </div>
            <!-- 수강회원 정보 -->
            <div class="member-info">
                <div class="member-info-tit f-16-700">수강회원 정보</div>
                <div class="member-info-input">
                    <div class="name">
                        <span>이름</span>
                        <div>김위즈</div>
                    </div>
                    <div class="phone">
                        <span>휴대폰 번호</span>
                        <div>010-0000-0000</div>
                    </div>
                </div>
            </div>
            <!-- 주문 상품 -->
            <div class="order-product">
                <div class="order-product-tit">
                    <div class="f-16-700">주문 상품<span class="f-14-400">3개</span></div>
                    <div class="arrow"></div>
                </div>
                <ul class="order-product-list">
                    <li class="place-ref-info">
                        <div>
                            <p class="f-14-700 place-name">위즈짐</p>
                            <span class="f-12-400 place-addr">서울 강남구 삼성로86길 11 거봉INC 3층</span>
                        </div>
                        <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="플레이스 찜하기" /></div>
                    </li>
                    <li>
                        <div>6개월 수강권</div>
                        <div>234,000원</div>
                    </li>
                    <li>
                        <div>운동복 6개월</div>
                        <div>50,000원</div>
                    </li>
                    <li>
                        <div>개인락커 6개월</div>
                        <div>50,000원</div>
                    </li>
                </ul>
            </div>
            <!-- 결제 정보 -->
            <div class="order-info">
                <div class="order-info-tit">
                    <p class="f-16-700">결제 정보<span class="f-14-400">334,000원 / 페이코</span></p>
                    <div class="arrow"></div>
                </div>
                <div class="order-info-list">
                    <div class="order-info-list-1">
                        <div class="f-14-700">
                            <p>결제금액</p>
                            <p>334,000원</p>
                        </div>
                        <div class="f-14-400">
                            <p>결제 방법</p>
                            <p>페이코</p>
                        </div>
                    </div>
                    <ul class="order-info-list-2">
                        <li>
                            <div><span></span>상품금액</div>
                            <div>474,000 원</div>
                        </li>
                        <li>
                            <div><span></span>상품할인금액</div>
                            <div>140,000 원</div>
                        </li>
                        <li>
                            <div><span></span>쿠폰 할인</div>
                            <div>0 원</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 수강권 등록 모달창 -->
        <div class="PlacePayComplete_modal" v-bind:class="{ openTicketModal: ticketModal }">
            <div class="overlay" @click="openTicketModal"></div>
            <div class="PlacePayComplete_modal_inner">
                <div class="txt-box">
                    <div class="f-18-700">운동 시작일을 설정해 주세요</div>
                    <p class="f-14-400">
                        <span>등록해주신 시작일을 기준으로</span>
                        <span>수강권이 사용돼요</span>
                    </p>
                </div>
                <div class="datePicker">
                    <div class="apply f-14-400">
                        <p><span>2023</span>년</p>
                        <p><span>07</span>월</p>
                        <p><span>10</span>일</p>
                        에 시작해요
                    </div>
                    <VueDatePicker></VueDatePicker>
                </div>
                <div class="apply-btn">
                    <button class="f-16-700" @click="openTicketModal">나중에 하기</button>
                    <button class="f-16-700" @click="$router.push('/PlaceTicketComplete')">수강권 등록하기</button>
                </div>
            </div>
        </div>
    </div>
</template>
