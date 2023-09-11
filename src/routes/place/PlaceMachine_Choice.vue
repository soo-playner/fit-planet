<script setup>
import { ref } from "vue";

const selected = {
    course: ref({
        title: "1회 체험권",
        price: 15000,
        unit: "회",
        period: 1,
        discount: 0,
    }),
    sportswearRental: ref(""),
    locker: ref(""),
};
const course = [
    { title: "1회 체험권", price: 15000, unit: "회", period: 1, discount: 0, discountPercentage: 0 },
    { title: "1개월 수강권", price: 59000, unit: "월", period: 1, discount: 0, discountPercentage: 0 },
    { title: "3개월 수강권", price: 49000, unit: "월", period: 3, discount: 30000, discountPercentage: 10 },
    { title: "6개월 수강권", price: 39000, unit: "월", period: 6, discount: 120000, discountPercentage: 20 },
    { title: "12개월 수강권", price: 29000, unit: "월", period: 12, discount: 360000, discountPercentage: 30 },
];
const sportswearRental = [
    { title: "선택 안함", price: 0, discount: 0 },
    { title: "운동복 1개월", price: 10000, discount: 0 },
    { title: "운동복 3개월", price: 30000, discount: 0 },
    { title: "운동복 6개월", price: 50000, discount: 10000 },
    { title: "운동복 12개월", price: 100000, discount: 20000 },
];
const locker = [
    { title: "선택 안함", price: 0, discount: 0 },
    { title: "개인 락커 1개월", price: 10000, discount: 0 },
    { title: "개인 락커 3개월", price: 30000, discount: 0 },
    { title: "개인 락커 6개월", price: 50000, discount: 10000 },
    { title: "개인 락커 12개월", price: 100000, discount: 20000 },
];

const totalPrice = () => {
    return Object.values(selected).reduce((accu, curr) => {
        if (!curr.value) return accu;
        return accu + curr.value.price;
    }, 0);
};
const totalDiscount = () => {
    return Object.values(selected).reduce((accu, curr) => {
        if (!curr.value) return accu;
        return accu + curr.value.discount;
    }, 0);
};
const deleteItem = (category) => {
    if (category === "course") return alert("수강권은 삭제할 수 없습니다.");
    selected[category].value = "";
};
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
                    <div class="place-choice-list-layout-tit">수강권</div>
                    <ul>
                        <!-- 
                            체크 시 border 색상 변경되는데, active 클래스 설정된 li 태그만 적용되도록
                            @include borderGradient 로 설정해놨습니다(place.scss 395번 라인 보시면 됩니다). 
                        -->
                        <li
                            class="flex-flow"
                            :class="{ active: selected.course.value.title === type.title || (idx === 0 && !selected.course.value) }"
                            v-for="(type, idx) in course"
                            :key="idx"
                            @click="selected.course.value = type"
                        >
                            <input
                                type="radio"
                                :id="'ticket_1_' + idx"
                                name="ticket"
                                :value="type.title"
                                :checked="selected.course.value.title === type.title || (idx === 0 && !selected.course.value)"
                            />
                            <label :for="'ticket_1_' + idx">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="place-ticket-list-name">{{ type.title }}</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount f-12-400" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="f-16-700">
                                        <span class="percent" v-show="type.discount">{{ type.discountPercentage }}%</span> {{ type.price }}원/{{ type.unit }}
                                    </p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 {{ type.price * type.period }}원</span>
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
                        <li
                            v-for="(type, idx) in sportswearRental"
                            :key="idx"
                            :class="{ active: selected.sportswearRental.value.title === type.title || (idx === 0 && !selected.sportswearRental.value) }"
                            @click="selected.sportswearRental.value = type"
                        >
                            <input type="radio" :id="'training_1_' + idx" name="training" :value="type.title" :checked="idx === 0 && !selected.sportswearRental.value" />
                            <label :for="'training_1_' + idx">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="training-opt-list-name">{{ type.title }}</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount f-12-400" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">{{ type.price }}원</p>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <!-- 개인 락커 -->
                <div class="locker-opt-list place-choice-list-layout mp">
                    <div class="locker-opt-list-tit">개인 락커</div>
                    <ul>
                        <li
                            v-for="(type, idx) in locker"
                            :key="idx"
                            :class="{ active: selected.locker.value.title === type.title || (idx === 0 && !selected.locker.value) }"
                            @click="selected.locker.value = type"
                        >
                            <input type="radio" :id="'locker_1_' + idx" name="locker" :value="type.title" :checked="idx === 0 && !selected.locker.value" />
                            <label :for="'locker_1_' + idx">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="training-opt-list-name">{{ type.title }}</p>
                                </div>
                                <div class="right-column">
                                    <span class="discount" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="training-opt-list-pay f-16-700 pay">{{ type.price }}원</p>
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
                <li v-for="(item, idx) in Object.entries(selected)" :key="idx" v-show="item[1].value && item[1].value.title !== '선택 안함'">
                    <div>
                        <div class="f-14-400 choice-product">{{ item[1].value.title }}</div>
                        <div class="choice-pay">
                            <span class="f-12-400 discount" v-show="item[1].value.discount">-{{ item[1].value.discount }}원</span>
                            <p>{{ item[1].value.price }}원</p>
                        </div>
                    </div>
                    <div class="close" @click="deleteItem(item[0])"></div>
                </li>
            </ul>
            <div class="total-pay">
                <div>
                    <div class="f-12-400">
                        <span class="lightgray">총 할인 금액</span><span class="lightgray">{{ totalDiscount() }}원 할인</span>
                    </div>
                    <div>
                        <span class="f-14-400">결제 금액</span><span class="f-16-700">{{ totalPrice() }}원</span>
                    </div>
                </div>
                <button class="btn-44-purple f-14-700">결제하기</button>
            </div>
        </div>
    </div>
</template>
