<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// import 'swiper/swiper-bundle.min.css';
import { ref } from "vue";

const swiperOption = {
    slidesPerView: 1.5,
    spaceBetween: 8,
};
const isCouponActive = ref(false);
const currentSlideIndex = {
    1: ref(0),
};

const useCoupon = function () {
    isCouponActive.value = !isCouponActive.value;
};

const handleSlideChange = (swiper, target) => {
    currentSlideIndex[target].value = swiper.realIndex;
};
</script>

<template>
    <div class="PlacePay_container main-layout pd-b0">
        <div class="PlacePay_container_inner mob-inner">
            <!-- 주문상품 -->
            <div class="choice-product">
                <div class="f-16-500">주문상품</div>
                <div class="f-14-400">[위즈짐] 6개월 수강권 외 2개</div>
            </div>
            <!-- 수강회원 정보 -->
            <div class="member-info">
                <div class="member-info-tit">
                    <div class="f-16-500">수강회원 정보</div>
                    <button class="f-12-400 gray1">개인정보 수정</button>
                </div>
                <div class="member-info-input">
                    <div class="name">
                        <span class="f-12-400">이름</span>
                        <div class="form-group"><input type="text" id="mb_name" name="mb_name" placeholder="홍길동" /></div>
                    </div>
                    <div class="phone">
                        <span class="f-12-400">휴대폰 번호</span>
                        <div class="form-group"><input type="tel" id="mb_phone" name="mb_phone" placeholder="010-0000-0000" /></div>
                    </div>
                </div>
            </div>
            <!-- 쿠폰 -->
            <div class="coupon">
                <div class="coupon-tit f-16-500">쿠폰</div>
                <ul class="coupon-list" @click="useCoupon" v-bind:class="{ couponOpen: isCouponActive }">
                    <li class="f-14-400">사용가능 쿠폰 0장 / 전체 0장<span class="arrow"></span></li>
                    <ul>
                        <li>쿠폰1</li>
                        <li>쿠폰2</li>
                        <li>쿠폰3</li>
                    </ul>
                </ul>
            </div>
            <!-- 결제수단 -->
            <div class="payment-method">
                <div class="payment-method-tit f-16-500">결제수단</div>
                <div class="my-card method">
                    <div class="top-row">
                        <label for="myCard" class="left-column">
                            <input type="radio" name="method" id="myCard" checked />
                            <div class="check-current"><span></span></div>
                            <p class="f-14-400">내 카드</p>
                        </label>
                        <div class="my-card-edit f-14-400">편집</div>
                    </div>
                    <Swiper
                        class="card-row"
                        v-bind="CardSwiper"
                        @slideChange="
                            (swiper) => {
                                handleSlideChange(swiper, 1);
                            }
                        "
                    >
                        <SwiperSlide><img src="@/assets/image/card1.png" alt="등록카드1" /></SwiperSlide>
                        <SwiperSlide><img src="@/assets/image/card1.png" alt="등록카드1" /></SwiperSlide>
                        <SwiperSlide><img src="@/assets/image/card1.png" alt="등록카드1" /></SwiperSlide>
                    </Swiper>
                    <div class="slide-position">
                        <strong>{{ currentSlideIndex[1].value + 1 }}</strong>
                        /
                        <span>3</span>
                    </div>
                </div>
                <div class="credit-card method">
                    <div class="top-row">
                        <label for="creditCard" class="left-column">
                            <input type="radio" name="method" id="creditCard" />
                            <div class="check-current"><span></span></div>
                            <p class="f-14-400">신용카드</p>
                        </label>
                    </div>
                </div>
                <div class="simple-pay method">
                    <div class="top-row">
                        <label for="simplePay" class="left-column">
                            <input type="radio" name="method" id="simplePay" />
                            <div class="check-current"><span></span></div>
                            <p class="f-14-400">간편결제</p>
                        </label>
                    </div>
                </div>
            </div>
            <!-- 결제금액 -->
            <div class="amount-pay">
                <div class="amount-pay-tit f-16-500">결제금액</div>
                <div class="amount-pay-list">
                    <div class="amount-pay-list-div">
                        <span class="f-12-400">주문금액</span>
                        <span class="f-14-400">334,000 원</span>
                    </div>
                    <ul class="discount-history">
                        <li>
                            <div class="f-12-400"><span></span>상품금액</div>
                            <div class="f-12-400">474,000 원</div>
                        </li>
                        <li>
                            <div class="f-12-400"><span></span>상품할인금액</div>
                            <div class="f-12-400">140,000 원</div>
                        </li>
                    </ul>
                    <div class="amount-pay-list-div">
                        <span class="f-12-400">쿠폰할인</span>
                        <span class="f-14-400">0 원</span>
                    </div>
                </div>
                <div class="amount-pay-total">
                    <div class="f-14-500">결제금액</div>
                    <div class="f-18-700 total-amount">334,000<span class="f-14-700">원</span></div>
                </div>
            </div>
            <!-- 약관동의 -->
            <div class="pay-terms">
                <div class="pay-terms-1">
                    <p class="f-12-400">개인정보 수집∙이용 및 처리 동의</p>
                    <router-link to="/" class="f-12-400">보기</router-link>
                </div>
                <div class="pay-terms-2">
                    <p class="f-12-400">전자지금 결제대행 서비스 이용약관 동의</p>
                    <router-link to="/" class="f-12-400">보기</router-link>
                </div>
            </div>
            <!-- 결제하기 -->
            <div class="last-pay-btn">
                <p class="f-12-500">위 내용을 확인 하였으며 결제에 동의합니다.</p>
                <button class="btn-44-purple f-14-700"><span class="total-amount">334,000원</span> 결제하기</button>
            </div>
        </div>
    </div>
</template>
