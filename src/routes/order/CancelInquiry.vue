<script setup>

</script>

<template>
    <div class="CancelInquiry_container main-layout notFooter-layout">
        <div class="CancelInquiry_container_inner mob-inner">
            <!-- 주문 일시, 번호 -->
            <div class="order-current">
                <div class="left-column f-12-400">
                    <p>4.1 토 결제</p><p>취소</p>
                </div>
                <div class="right-column f-12-400 order-num">주문번호 123456789101112</div>
            </div>
            <!-- 환불 예정 가이드 -->
            <div class="refund-expected-guide">
                <p>카드사에서 <span>4.1 토 이내 환불 완료 예정</span>입니다.</p>
                <p>정확한 환불 완료일은 카드사로 직접 문의해 주세요.</p>
            </div>
            <!-- 주문 상품 -->
            <div class="order-product">
                <div class="order-product-tit">
                    <div class="f-16-700">주문 상품<!--<span class="f-14-400">3개</span>--></div>
                    <!-- <div class="arrow"></div> -->
                </div>
                <ul class="order-product-list">
                    <li class="place-ref-info">
                        <div>
                            <p class="f-14-700 place-name">위즈짐</p>
                            <span class="f-12-400 place-addr">서울 강남구 삼성로86길 11 거봉INC 3층</span>
                        </div>
                        <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="플레이스 찜하기"></div>
                    </li>
                    <li>
                        <div class="f-14-400">6개월 수강권</div>
                        <div class="f-14-400">234,000원</div>
                    </li>
                    <li>
                        <div class="f-14-400">운동복 6개월</div>
                        <div class="f-14-400">50,000원</div>
                    </li>
                    <li>
                        <div class="f-14-400">개인락커 6개월</div>
                        <div class="f-14-400">50,000원</div>
                    </li>
                </ul>
            </div>
            <!-- 환불 안내 -->
            <div class="order-info">
                <div class="order-info-tit">
                    <p class="f-16-700">환불 안내<!--<span class="f-14-400">334,000원 / 페이코</span>--></p>
                    <!-- <div class="arrow"></div> -->
                </div>
                <div class="order-info-list">
                    <div class="order-info-list-1">
                        <div class="f-14-700"><p>결제금액</p><p>334,000원</p></div>
                        <!-- <div class="f-14-400"><p>결제 방법</p><p>페이코</p></div> -->
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
                <div class="bott-btn">
                    <div class="f-14-700"><p>환불 완료</p><p>334,000원</p></div>
                    <div class="f-14-400">
                        <p>환불 수단</p>
                        <p class="f-14-400"><span class="f-12-400">페이코</span>334,000원</p>
                    </div>
                </div>
            </div>
            <!-- 환불 안내 가이드 -->
            <div class="refund-guide">
                <p>할인쿠폰은 환불요청 완료 후 복구되며,</p>
                <p>복구에 시간이 소요될 수 있습니다.</p>
            </div>
        </div>
    </div>
</template>