<script>
    export default {
        name : 'PlaceTicket_Complete'
    }
</script>

<template>
    <div class="ticket_complete_container">
        <div class="ticket_complete_container_inner mob-inner">
            <!-- 수강권 등록 완료 안내 -->
            <div class="ticket-complete-guide">
                <div class="complete-img-box"><img src="@/assets/image/complete.png" alt="수강권 등록 완료"></div>
                <div class="f-20-700">수강권 등록 완료!</div>
                <p class="f-14-400">
                    <span>운동 시작일이 설정되었어요</span>
                    <span>수강 기간동안 앞으로 화이팅 해봐요!</span>
                </p>
                <button class="f-16-700">수강권 등록 완료</button>
                <span class="order-num f-12-400">주문번호 123456789101112</span>
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
                        <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="플레이스 찜하기"></div>
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
                        <div class="f-14-700"><p>결제금액</p><p>334,000원</p></div>
                        <div class="f-14-400"><p>결제 방법</p><p>페이코</p></div>
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
    </div>
</template>