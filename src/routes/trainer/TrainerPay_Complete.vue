<script setup></script>

<template>
    <div class="trainerPayComplete_container main-layout notFooter-layout payComplete">
        <div class="trainerPayComplete_container_inner mob-inner payComplete-inner">
            <!-- 결제 완료 안내 -->
            <div class="pay-complete-guide">
                <div class="complete-img-box"><img src="@/assets/image/complete.png" alt="결제 완료" /></div>
                <div class="f-20-500">
                    <p>결제 완료!</p>
                    <p>트레이너와 일정을 정해볼까요?</p>
                </div>
                <ul class="inquiry-list">
                    <li><img src="@/assets/image/call.png" alt="전화하기"><p class="f-12-500">트레이너에게 전화</p></li>
                    <li><img src="@/assets/image/message.png" alt="카톡하기"><p class="f-12-500">트레이너에게 카톡</p></li>
                </ul>
                <button class="btn-44-purple f-16-700" @click="scheduleOpen = true">정했어요! 일정 등록하기</button>
                <span class="order-num f-12-400">주문번호 123456789101112</span>
            </div>
            <!-- 양식  -->
            <div class="ex-inquiry-form">
                <div class="ex-inquiry-form-tit f-14-400">아래 양식대로 문의하면 빠른 일정 조율이 가능해요</div>
                <div class="ex-inquiry-form-content">
                    <p>"안녕하세요 핏플래닛을 통해</p>
                    <p><span>[프로그램명]</span>을 등록한 <span>[이름]</span>입니다.</p>
                    <p><span>[희망 요일], [희망 시간대]</span> 가능합니다.</p>
                    <p><span>[희망 운동 시작일]</span>부터 시작하고 싶어요."</p>
                    <button class="btn-44-purple-b f-14-500">양식 복사하기</button>
                </div>
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

    </div>
</template>