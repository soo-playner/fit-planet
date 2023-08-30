<script setup></script>

<template>
    <div class="main-layout place-choice-layout trainer-machine-choice">
        <div class="mob-inner place-choice-layout-inner">
            <!-- 운동 선택 - 1:1 PT -->
            <div class="place-choice-form">
                <div class="place-choice-form-tit">
                    <p class="f-20-700">운동 선택</p>
                    <span class="f-14-400">운동 프로그램을 선택하세요</span>
                </div>
                <div class="place-choice-list-layout">
                    <div class="place-choice-list-layout-tit">1:1 PT <span class="f-14-400">1:1로 진행되는 체계적인 수업</span></div>
                    <ul>
                        <li class="flex-flow">
                            <input type="radio" id="training1_1_1" name="training1" value="1:1 PT 1회 체험권">
                            <label for="training1_1_1">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">1:1 PT 1회 체험권</p>
                                </div>
                                <div class="bott-row">
                                    <p class="f-16-700">29,900원/회</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 29,900원</span>
                                </div>
                            </label>
                        </li>
                        <li class="flex-flow">
                            <input type="radio" id="training1_1_2" name="training1" value="1:1 PT 10회">
                            <label for="training1_1_2">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">1:1 PT 10회</p>
                                </div>
                                <div class="bott-row">
                                    <p class="f-16-700">49,900원/월</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 499,000원</span>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 운동 선택 - 1:2 PT -->
            <div class="place-choice-form">
                <div class="place-choice-list-layout">
                    <div class="place-choice-list-layout-tit">1:2 PT <span class="f-14-400">친구, 연인, 혹은 가족과 함께 변화에 도전하세요</span></div>
                    <ul>
                        <li class="flex-flow">
                            <input type="radio" id="training1_1_3" name="training1" value="2:1 PT 10회">
                            <label for="training1_1_3">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">2:1 PT 10회</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount">100,000원 할인</span>
                                    <p class="f-16-700">20% 39,900원/회</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 399,000원</span>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 운동 선택 - 바디 프로필 프로젝트 -->
            <div class="place-choice-form border">
                <div class="place-choice-list-layout notBoder">
                    <div class="place-choice-list-layout-tit">바디프로필 프로젝트 <span class="f-14-400">가장 빛나는 나의 모습을 기록해봐요</span></div>
                    <ul>
                        <li class="flex-flow">
                            <input type="radio" id="training1_1_4" name="training1" value="바디 프로필 프로젝트 30회">
                            <label for="training1_1_4">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">바디 프로필 프로젝트 30회</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount">60,000원 할인</span>
                                    <p class="f-16-700">10% 47,900원/회</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 1,437,000원</span>
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
                <div class="place-choice-list-layout mp">
                    <div class="place-choice-list-layout-tit">운동복</div>
                    <ul>
                        <li>
                            <input type="radio" id="training_1_1" name="training" value="선택 안함">
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
                <div class="place-choice-list-layout mp">
                    <div class="locker-opt-list-tit">개인 락커</div>
                    <ul>
                        <li>
                            <input type="radio" id="locker_1_1" name="locker" value="선택 안함">
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
            <div class="place-name f-14-700">김위즈 트레이너(위즈짐)</div>
            <ul class="choice-machine-list">
                <li>
                    <div>
                        <div class="f-14-400 choice-product">바디 프로필 프로젝트 30회</div>
                        <div class="choice-pay">
                            <span class="f-12-400 discount">-60,000원</span>
                            <p>1,437,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400 choice-product">운동복 3개월</div>
                        <div class="choice-pay">
                            <p>30,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
                <li>
                    <div>
                        <div class="f-14-400 choice-product">개인락커 3개월</div>
                        <div class="choice-pay">
                            <p>30,000원</p>
                        </div>
                    </div>
                    <div class="close"></div>
                </li>
            </ul>
            <div class="total-pay">
                <div>
                    <div class="f-12-400"><span class="lightgray">총 할인 금액</span><span class="lightgray">60,000원 할인</span></div>
                    <div><span class="f-14-400">결제 금액</span><span class="f-16-700">1,497,000원</span></div>
                </div>
                <button>결제하기</button>
            </div>
        </div>
    </div>
</template>