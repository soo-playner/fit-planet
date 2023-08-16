<script>
    import OrderDeleteModal from '@/components/modal/order/OrderDelete';

    export default {
        name : 'OrderInquiryView',
        components : {
            OrderDeleteModal
        },
        data(){
            return {
                orderDelete : false
            }
        },
        methods : {
            orderDeleteFnc : function(){
                this.orderDelete = !this.orderDelete;
            }
        }
    }
</script>

<template>
    <div class="OrderInquiryView_container main-layout notFooter-layout">
        <div class="OrderInquiryView_container_inner mob-inner">
            <!-- 주문 일시, 번호 -->
            <div class="order-current">
                <div class="left-column f-12-400">
                    <p>4.1 토 결제</p><p>운동 대기</p>
                </div>
                <div class="right-column f-12-400 order-num">주문번호 123456789101112</div>
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
                    <p class="f-16-700">결제 정보<!--<span class="f-14-400">334,000원 / 페이코</span>--></p>
                    <!-- <div class="arrow"></div> -->
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
                <div class="bott-btn">
                    <button class="f-14-700" @clikc="orderDeleteFnc">주문내역 삭제</button>
                    <button class="f-14-700">주문 취소하기</button>
                </div>
            </div>
            <!-- 결제 취소 가이드 -->
            <div class="order-cancle-guide">
                <p>상품을 이용하지 않은 경우</p>
                <p>결제 후 14일 이내 앱 내 결제 취소가 가능합니다.</p>
                <p>자세한 내용은<router-link to="/">전자금융거래 이용약관</router-link>을 참고하세요.</p>
            </div>
        </div>

        <!-- 주문 내역 삭제 모달창 -->
        <OrderDeleteModal :class="{ active : orderDelete }" :orderDeleteFnc="orderDeleteFnc"/>
    </div>
</template>