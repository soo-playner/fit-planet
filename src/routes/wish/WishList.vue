<script setup>
//import WishList_Tab from './components/WishList_Tab';
import PlaceWishList from "@/components/wish/PlaceWishList";
import TrainerWishList from "@/components/wish/TrainerWishList";
import PlaceWishSorting from "@/components/modal/wish/PlaceWishSorting";
import TrainerWishSorting from "@/components/modal/wish/TrainerWishSorting";

// const tabs = ["플레이스", "트레이너"];
// const targetTab = ref("플레이스");
// const changeTab = (newTab) => {
//     targetTab.value = newTab;
// };

import { onMounted, ref } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const { li, nav, tabContentWrap, clickLiFnc } = useTabAnimation();
const wishList = ["플레이스", "트레이너"];

onMounted(() => {
    clickLiFnc();
});

const placeWishArray = [
    { center: "위즈짐1", scope: "4.3", totalScope: "12", location: "서울 강남구 대치동" },
    { center: "위즈짐2", scope: "4.3", totalScope: "12", location: "서울 강남구 대치동" },
    { center: "위즈짐3", scope: "4.3", totalScope: "12", location: "서울 강남구 대치동" },
    { center: "위즈짐4", scope: "4.3", totalScope: "12", location: "서울 강남구 대치동" },
];

const trainerWishArray = [
    { name: "김위즈1", scope: "4.3", totalScope: "12" },
    { name: "김위즈2", scope: "4.3", totalScope: "12" },
    { name: "김위즈3", scope: "4.3", totalScope: "12" },
    { name: "김위즈4", scope: "4.3", totalScope: "12" },
];
</script>

<template>
    <div class="Wish_container main-layout slide-wrap">
        <div class="Wish_container_inner mob-inner slide-wrap-inner">
            <!-- <WishList_Tab /> -->
            <ul class="tab-list slide-ul">
                <li ref="li" class="faq-li slide-li active" v-for="wishItem in wishList" :key="wishItem" @click="clickLiFnc">
                    {{ wishItem }}
                </li>
                <span ref="nav" class="nav-indicator"></span>
            </ul>
            <div class="toggle-box">
                <ul class="wish-filter">
                    <li>
                        <p>최신순</p>
                        <span class="arrow"></span>
                    </li>
                </ul>
            </div>
            <div class="tabContentWrap" ref="tabContentWrap">
                <!-- 플레이스 -->
                <ul class="place-wish-ul wish-ul">
                    <PlaceWishList v-for="placeWishItem in placeWishArray" :key="placeWishItem" :data="placeWishItem" />
                </ul>
                <!-- 트레이너 -->
                <ul class="trainer-wish-ul wish-ul">
                    <TrainerWishList v-for="TrainerWishItem in trainerWishArray" :key="TrainerWishItem" :data="TrainerWishItem" />
                </ul>
            </div>

            <!-- 플레이스 솔팅 모달창 -->
            <PlaceWishSorting />
            <!-- 트레이너 솔팅 모달창 -->
            <TrainerWishSorting />
        </div>
    </div>
</template>
