<script setup>

</script>

<template>
    <div class="main-layout place-choice-layout">
        <div class="mob-inner place-choice-layout-inner">
            <!-- 운동 선택 - 수강권 -->
            <div class="place-choice-form">
                <div class="place-choice-form-tit">
                    <p class="f-20-700">운동 선택</p>
                    <span class="f-14-400">운동 프로그램을 선택하세요</span>
                </div>
                <div class="place-choice-list-layout">
                    <div class="place-choice-list-layout-tit"><img src="@/assets/image/ticket.png" alt="">수강권</div>
                    <ul>
                        <li class="flex-flow active">
                            <input type="radio" id="ticket_1_1" name="ticket" value="1회 체험권" checked>
                            <label for="ticket_1_1">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">1회 체험권</p>
                                </div>
                                <div class="bott-row">
                                    <p class="f-16-700">15,000원/회</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 15,000원</span>
                                </div>
                            </label>
                        </li>
                        <li class="flex-flow">
                            <input type="radio" id="ticket_1_2" name="ticket" value="1개월 수강권">
                            <label for="ticket_1_2">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">1개월 수강권</p>
                                </div>
                                <div class="bott-row">
                                    <p class="f-16-700">59,000원/월</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 59,000원</span>
                                </div>
                            </label>
                        </li>
                        <li class="flex-flow">
                            <input type="radio" id="ticket_1_3" name="ticket" value="3개월 수강권">
                            <label for="ticket_1_3">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">3개월 수강권</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount f-12-400">30,000원 할인</span>
                                    <p class="f-16-700"><span class="percent">10%</span> 49,000원/월</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 147,000원</span>
                                </div>
                            </label>
                        </li>
                        <li class="flex-flow">
                            <input type="radio" id="ticket_1_4" name="ticket" value="6개월 수강권">
                            <label for="ticket_1_4">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">6개월 수강권</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount f-12-400">120,000원 할인</span>
                                    <p class="f-16-700"><span class="percent">20%</span> 39,000원/월</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 234,000원</span>
                                </div>
                            </label>
                        </li>
                        <li class="flex-flow">
                            <input type="radio" id="ticket_1_5" name="ticket" value="12개월 수강권">
                            <label for="ticket_1_5">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">12개월 수강권</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount f-12-400">360,000원 할인</span>
                                    <p class="f-16-700"><span class="percent">30%</span> 29,000원/월</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 348,000원</span>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 옵션 선택 - 운동복 / 개인락커 -->
            <div class="place-choice-form">
                <div class="place-choice-form-tit">
                    <p class="f-20-700">옵션 선택</p>
                    <span class="f-14-400">운동과 함께 결제할 옵션을 선택하세요</span>
                </div>
                <!-- 운동복 -->
                <div class="training-opt-list place-choice-list-layout mp">
                    <div class="place-choice-list-layout-tit">운동복</div>
                    <ul>
                        <li class="active">
                            <input type="radio" id="training_1_1" name="training" value="선택 안함" checked>
                            <label for="training_1_1">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">선택 안함</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">0원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="training_1_2" name="training" value="운동복 1개월">
                            <label for="training_1_2">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">운동복 1개월</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">10,000원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="training_1_3" name="training" value="운동복 3개월">
                            <label for="training_1_3">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">운동복 3개월</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">30,000원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="training_1_4" name="training" value="운동복 6개월">
                            <label for="training_1_4">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">운동복 6개월</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount f-12-400">10,000원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">50,000원</p>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="training_1_5" name="training" value="운동복 12개월">
                            <label for="training_1_5">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">운동복 12개월</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount f-12-400">20,000원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">100,000원</p>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <!-- 개인 락커 -->
                <div class="locker-opt-list place-choice-list-layout mp">
                    <div class="locker-opt-list-tit">개인 락커</div>
                    <ul>
                        <li class="active">
                            <input type="radio" id="locker_1_1" name="locker" value="선택 안함" checked>
                            <label for="locker_1_1">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">선택 안함</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">0원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="locker_1_2" name="locker" value="개인 락커 1개월">
                            <label for="locker_1_2">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">개인 락커 1개월</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">10,000원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="locker_1_3" name="locker" value="개인 락커 3개월">
                            <label for="locker_1_3">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">개인 락커 3개월</p>
                                </div>
                                <div class="right-column"><p class="training-opt-list-pay f-16-700 pay">30,000원</p></div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="locker_1_4" name="locker" value="개인 락커 6개월">
                            <label for="locker_1_4">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">개인 락커 6개월</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount">10,000원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">50,000원</p>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="locker_1_5" name="locker" value="개인 락커 12개월">
                            <label for="locker_1_5">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">개인 락커 12개월</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount">20,000원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">100,000원</p>
                                </div>
                            </label>
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
                        <div class="f-14-400 choice-product">6개월 수강권</div>
                        <div class="choice-pay">
                            <span class="f-12-400 discount">-120,000원</span>
                            <p>234,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400 choice-product">운동복 6개월</div>
                        <div class="choice-pay">
                            <span class="f-12-400 discount">-10,000원</span>
                            <p>50,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400 choice-product">개인락커 6개월</div>
                        <div class="choice-pay">
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
                <button>결제하기</button>
            </div>
        </div>
    </div>
</template>
