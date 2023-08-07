<script>
    export default {
        name : 'OrderInquiry',
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
    <div class="orderinquiry_container">
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
                                    <li><button @click="orderDeleteFnc">삭제하기</button></li>
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
                                    <li><button @click="orderDeleteFnc">삭제하기</button></li>
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
                                    <li><button @click="orderDeleteFnc">삭제하기</button></li>
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
        <div class="order-delete-modal member_alert" v-bind:class="{ active : orderDelete }">
            <div class="overlay" @click="orderDeleteFnc"></div>
            <div class="order-delete-modal-inner mob-inner member_alert_inner">
                <div class="txt-box">
                    <p class="f-18-700">주문내역을 삭제할까요?</p>
                    <span class="f-14-400">
                        <span>주문내역을 삭제할 경우</span>
                        <span>운동기록도 함께 사라져요.</span>
                        <span>삭제 후에는 복구할 수 없습니다.</span>
                    </span>
                </div>
                <div class="bott-btn">
                    <button class="f-16-700" @click="orderDeleteFnc">취소</button>
                    <button class="f-16-700">삭제</button>
                </div>
            </div>
        </div>
    </div>
</template>