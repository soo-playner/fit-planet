<script setup>
    import OrderDeleteModal from '@/components/modal/order/OrderDelete';
    import {ref} from 'vue'

    const isDeleted = ref(false);

    const deleteOrder = function() {
        isDeleted.value = !isDeleted.value;
    }
</script>

<template>
    <div class="orderinquiry_container main-layout notFooter-layout">
        <div class="orderinquiry_container_inner mob-inner">
            <ul class="order-list">
                <li>
                    <div class="top-row">
                        <div><p class="pay-date">4.1 토 결제</p><p class="class-current">운동 완료</p></div>
                        <div>
                            <router-link to="/OrderInquiryView" class="order-current">주문 상세</router-link>
                            <div class="menu-dot">
                                <span></span>
                                <ul class="list">
                                    <li><button>공유하기</button></li>
                                    <li><button @click="deleteOrder">삭제하기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mid-row">
                        <div class="left-column">
                            <div class="f-16-700"><span class="trainer-name">김위즈</span>트레이너<span class="center">(위즈짐)</span></div>
                            <p class="f-14-400"><span class="work">바디 프로필 프로젝트</span>외 2개</p>
                            <p class="f-16-700">1,497,000원</p>
                        </div>
                        <div class="right-column center-img"></div>
                    </div>
                    <div class="bott-row">
                        <router-link to="/" class="review-induce">운동 후기 작성 시 1,000원 쿠폰 증정</router-link>
                        <router-link to="/" class="repay">같은 운동 결제하기</router-link>
                    </div>
                </li>
                <li>
                    <div class="top-row">
                        <div><p class="pay-date">4.1 토 결제</p><p class="class-current">취소</p></div>
                        <div>
                            <router-link to="/OrderInquiryView" class="order-current">주문 상세</router-link>
                            <div class="menu-dot">
                                <span></span>
                                <ul class="list">
                                    <li><button>공유하기</button></li>
                                    <li><button @click="deleteOrder">삭제하기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mid-row">
                        <div class="left-column">
                            <div class="f-16-700"><span class="trainer-name">김위즈</span>트레이너<span class="center">(위즈짐)</span></div>
                            <p class="f-14-400"><span class="work">바디 프로필 프로젝트</span>외 2개</p>
                            <p class="f-16-700">1,497,000원</p>
                        </div>
                        <div class="right-column center-img"></div>
                    </div>
                    <div class="bott-row">
                        <router-link to="/">취소 상세 보기</router-link>
                        <router-link to="/">같은 운동 결제하기</router-link>
                    </div>
                </li>
                <li>
                    <div class="top-row">
                        <div><p class="pay-date">4.1 토 결제</p><p class="class-current">운동 완료</p></div>
                        <div>
                            <router-link to="/OrderInquiryView" class="order-current">주문 상세</router-link>
                            <div class="menu-dot">
                                <span></span>
                                <ul class="list">
                                    <li><button>공유하기</button></li>
                                    <li><button @click="deleteOrder">삭제하기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mid-row">
                        <div class="left-column">
                            <div class="f-16-700"><span class="trainer-name">김위즈</span>트레이너<span class="center">(위즈짐)</span></div>
                            <p class="f-14-400"><span class="work">바디 프로필 프로젝트</span>외 2개</p>
                            <p class="f-16-700">1,497,000원</p>
                        </div>
                        <div class="right-column center-img"></div>
                    </div>
                    <div class="bott-row">
                        <div to="/" class="review-write-current">후기 작성 완료</div>
                        <router-link to="/">같은 운동 결제하기</router-link>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 주문 내역 삭제 모달창 -->
        <OrderDeleteModal :class="{ active : isDeleted }" :confirmDeletion="deleteOrder"/>
    </div>
</template>