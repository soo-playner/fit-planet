<script setup>
import { ref } from "vue";

const selected = {
    course: ref({ title: "1:1 PT 1회 체험권", price: 29900, unit: "회", discount: 0, discountPercentage: 0 }),
    sportswearRental: ref(""),
    locker: ref(""),
};
const course = {
    personalPT: [
        { title: "1:1 PT 1회 체험권", price: 29900, unit: "회", ptCount: 1, discount: 0, discountPercentage: 0 },
        { title: "1:1 PT 10회", price: 49900, unit: "회", ptCount: 10, discount: 0, discountPercentage: 0 },
    ],
    groupPT: [{ title: "2:1 PT 10회", price: 39900, unit: "회", ptCount: 10, discount: 10000, discountPercentage: 20 }],
    bodyProfile: [{ title: "바디 프로필 프로젝트 30회", price: 47900, unit: "회", ptCount: 30, discount: 0, discountPercentage: 0 }],
};
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
                        <li
                            class="flex-flow"
                            :class="{ active: selected.course.value.title === type.title || (idx === 0 && !selected.course.value) }"
                            v-for="(type, idx) in course.personalPT"
                            :key="idx"
                            @click="selected.course.value = type"
                        >
                            <input
                                type="radio"
                                :id="'training1_' + idx"
                                name="training"
                                :value="type.title"
                                :checked="selected.course.value.title === type.title || (idx === 0 && !selected.course.value)"
                            />
                            <label :for="'training1_' + idx">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">{{ type.title }}</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="f-16-700" v-if="type.discount !== 0">{{ type.discountPercentage + "%" }} {{ type.price }}원/{{ type.unit }}</p>
                                    <p class="f-16-700" v-else>{{ type.price }}원/{{ type.unit }}</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 {{ type.price * type.ptCount }}원</span>
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
                        <li
                            class="flex-flow"
                            :class="{ active: selected.course.value.title === type.title || (idx === 0 && !selected.course.value) }"
                            v-for="(type, idx) in course.groupPT"
                            :key="idx"
                            @click="selected.course.value = type"
                        >
                            <input
                                type="radio"
                                :id="'training2_' + idx"
                                name="training1"
                                :value="type.title"
                                :checked="selected.course.value.title === type.title || (idx === 0 && !selected.course.value)"
                            />
                            <label :for="'training2_' + idx">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">{{ type.title }}</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="f-16-700" v-if="type.discount !== 0">{{ type.discountPercentage + "%" }} {{ type.price }}원/{{ type.unit }}</p>
                                    <p class="f-16-700" v-else>{{ type.price }}원/{{ type.unit }}</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 {{ type.price * type.ptCount }}원</span>
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
                        <li
                            class="flex-flow"
                            :class="{ active: selected.course.value.title === type.title || (idx === 0 && !selected.course.value) }"
                            v-for="(type, idx) in course.bodyProfile"
                            :key="idx"
                            @click="selected.course.value = type"
                        >
                            <input
                                type="radio"
                                :id="'training3_' + idx"
                                name="training1"
                                :value="type.title"
                                :checked="selected.course.value.title === type.title || (idx === 0 && !selected.course.value)"
                            />
                            <label :for="'training3_' + idx">
                                <div class="top-row each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 place-ticket-list-name">{{ type.title }}</p>
                                </div>
                                <div class="bott-row">
                                    <span class="discount" v-show="type.discount">{{ type.discount }}원 할인</span>
                                    <p class="f-16-700" v-if="type.discount !== 0">{{ type.discountPercentage + "%" }} {{ type.price }}원/{{ type.unit }}</p>
                                    <p class="f-16-700" v-else>{{ type.price }}원/{{ type.unit }}</p>
                                    <span class="f-12-400 place-ticket-list-pay pay">결제금액 {{ type.price * type.ptCount }}원</span>
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
                        <li
                            v-for="(type, idx) in sportswearRental"
                            :key="idx"
                            :class="{ active: selected.sportswearRental.value.title === type.title || (idx === 0 && !selected.sportswearRental.value) }"
                            @click="selected.sportswearRental.value = type"
                        >
                            <input type="radio" :id="'sportswearRental_' + idx" name="sportswearRental" :value="type.title" :checked="idx === 0 && !selected.sportswearRental.value" />
                            <label :for="'sportswearRental_' + idx">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">{{ type.title }}</p>
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
                <div class="place-choice-list-layout mp">
                    <div class="locker-opt-list-tit">개인 락커</div>
                    <ul>
                        <li
                            v-for="(type, idx) in locker"
                            :key="idx"
                            :class="{ active: selected.locker.value.title === type.title || (idx === 0 && !selected.locker.value) }"
                            @click="selected.locker.value = type"
                        >
                            <input type="radio" :id="'locker_' + idx" name="locker" :value="type.title" />
                            <label :for="'locker_' + idx">
                                <div class="left-column each-tit">
                                    <span class="outSide">
                                        <span></span>
                                    </span>
                                    <p class="f-14-400 training-opt-list-name">{{ type.title }}</p>
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
            <div class="place-name f-14-700">김위즈 트레이너(위즈짐)</div>
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
