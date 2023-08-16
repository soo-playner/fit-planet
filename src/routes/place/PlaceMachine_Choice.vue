<script setup></script>

<template>
    <div class="PlaceMachine_Choice_container main-layout">
        <div class="PlaceMachine_Choice_container_inner mob-inner">
            <!-- 운동 선택 - 수강권 -->
            <div class="PlaceMachine-Choice-form">
                <div class="PlaceMachine-Choice-form-tit">
                    <p class="f-20-700">운동 선택</p>
                    <span class="f-14-400">운동 프로그램을 선택하세요</span>
                </div>
                <div class="place-ticket-list PlaceMachine-list-layout">
                    <div class="place-ticket-list-tit">수강권</div>
                    <ul>
                        <li class="flex-flow">
                            <div class="top-row each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 place-ticket-list-name">1회 체험권</p>
                            </div>
                            <div class="bott-row">
                                <p class="f-16-700">15,000원/회</p>
                                <span class="f-12-400 place-ticket-list-pay pay">결제금액 15,000원</span>
                            </div>
                        </li>
                        <li class="flex-flow">
                            <div class="top-row each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 place-ticket-list-name">1개월 수강권</p>
                            </div>
                            <div class="bott-row">
                                <p class="f-16-700">59,000원/월</p>
                                <span class="f-12-400 place-ticket-list-pay pay">결제금액 59,000원</span>
                            </div>
                        </li>
                        <li class="flex-flow">
                            <div class="top-row each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 place-ticket-list-name">3개월 수강권</p>
                            </div>
                            <div class="bott-row">
                                <span class="discount f-12-400">30,000원 할인</span>
                                <p class="f-16-700">10% 49,000원/월</p>
                                <span class="f-12-400 place-ticket-list-pay pay">결제금액 147,000원</span>
                            </div>
                        </li>
                        <li class="flex-flow">
                            <div class="top-row each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 place-ticket-list-name">6개월 수강권</p>
                            </div>
                            <div class="bott-row">
                                <span class="discount f-12-400">120,000원 할인</span>
                                <p class="f-16-700">20% 39,000원/월</p>
                                <span class="f-12-400 place-ticket-list-pay pay">결제금액 234,000원</span>
                            </div>
                        </li>
                        <li class="flex-flow">
                            <div class="top-row each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 place-ticket-list-name">12개월 수강권</p>
                            </div>
                            <div class="bott-row">
                                <span class="discount f-12-400">360,000원 할인</span>
                                <p class="f-16-700">30% 29,000원/월</p>
                                <span class="f-12-400 place-ticket-list-pay pay">결제금액 348,000원</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 옵션 선택 - 운동복 / 개인락커 -->
            <div class="PlaceMachine-Choice-form">
                <div class="PlaceMachine-Choice-form-tit">
                    <p class="f-20-700">옵션 선택</p>
                    <span class="f-14-400">운동과 함께 결제할 옵션을 선택하세요</span>
                </div>
                <!-- 운동복 -->
                <div class="training-opt-list PlaceMachine-list-layout mp">
                    <div class="training-opt-list-tit">운동복</div>
                    <ul>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">선택 안함</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">0원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">운동복 1개월</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">10,000원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">운동복 3개월</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">30,000원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">운동복 6개월</p>
                            </div>
                            <div class="right-column">
                                <span class="discount f-12-400">10,000원 할인</span>
                                <p class="training-opt-list-pay f-16-700 pay">50,000원</p>
                            </div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">운동복 12개월</p>
                            </div>
                            <div class="right-column">
                                <span class="discount f-12-400">20,000원 할인</span>
                                <p class="training-opt-list-pay f-16-700 pay">100,000원</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 개인 락커 -->
                <div class="locker-opt-list PlaceMachine-list-layout mp">
                    <div class="locker-opt-list-tit">개인 락커</div>
                    <ul>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">선택 안함</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">0원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">개인 락커 1개월</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">10,000원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">개인 락커 3개월</p>
                            </div>
                            <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">30,000원</p></div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">개인 락커 6개월</p>
                            </div>
                            <div class="right-column">
                                <span class="discount">10,000원 할인</span>
                                <p class="training-opt-list-pay f-16-700 pay">50,000원</p>
                            </div>
                        </li>
                        <li>
                            <div class="left-column each-tit">
                                <div class="check-current"><span></span></div>
                                <p class="f-14-400 training-opt-list-name">개인 락커 12개월</p>
                            </div>
                            <div class="right-column">
                                <span class="discount">20,000원 할인</span>
                                <p class="training-opt-list-pay f-16-700 pay">100,000원</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bott-pay-btn">
            <div class="place-name f-14-700">위즈짐</div>
            <ul class="choice-machine-list">
                <li>
                    <div>
                        <div class="f-14-400">6개월 수강권</div>
                        <div>
                            <span class="f-12-400 discount">-120,000원</span>
                            <p>234,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400">운동복 6개월</div>
                        <div>
                            <span class="f-12-400 discount">-10,000원</span>
                            <p>50,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400">개인락커 6개월</div>
                        <div>
                            <span class="f-12-400 discount">-10,000원</span>
                            <p>50,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
            </ul>
            <div class="total-pay">
                <div>
                    <div class="f-12-400"><span class="lightgray">총 할인 금액</span><span class="lightgray">140,000원 할인</span></div>
                    <div><span class="f-14-400">결제 금액</span><span class="f-16-700">334,000원</span></div>
                </div>
                <router-link to="/">결제하기</router-link>
            </div>
        </div>
    </div>
</template>
