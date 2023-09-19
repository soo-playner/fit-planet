<script setup>
import { onMounted, ref } from "vue";
import PlaceWishList from "@/components/wish/PlaceWishList";
import TrainerWishList from "@/components/wish/TrainerWishList";
import useTabAnimation from "@/composables/useTabAnimation";
import useAjaxRequest from "@/composables/useAjaxRequest";
import SortingBox from "@/components/layout/SortingBox.vue";

const { li, nav, tabContentWrap, clickLiFnc } = useTabAnimation();
const { postData, resData } = useAjaxRequest();
const wishList = ["플레이스", "트레이너"];
const selectTab = ref("플레이스");
const sortingOpen = ref(false);

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

const loadData = async (sortingType) => {
    const res = await postData("api");
};

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <div class="Wish_container main-layout slide-wrap">
        <div class="Wish_container_inner mob-inner slide-wrap-inner">
            <!-- <WishList_Tab /> -->
            <ul class="tab-list slide-ul">
                <li
                    ref="li"
                    class="faq-li slide-li active"
                    v-for="wishItem in wishList"
                    :key="wishItem"
                    @click="
                        clickLiFnc;
                        selectTab = wishItem;
                    "
                >
                    {{ wishItem }}
                </li>
                <span ref="nav" class="nav-indicator"></span>
            </ul>
            <div class="toggle-box">
                <ul class="wish-filter">
                    <li @click="sortingOpen = true">
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
        </div>
    </div>

    <SortingBox
        v-show="sortingOpen && selectTab === '플레이스'"
        :closeModal="
            () => {
                sortingOpen = false;
            }
        "
        :id="1"
        :typeList="['최신순', '별점 높은 순', '거리순']"
        :currentType="'최신순'"
        @sorting="console.log($event)"
    />
    <SortingBox
        v-show="sortingOpen && selectTab === '트레이너'"
        :closeModal="
            () => {
                sortingOpen = false;
            }
        "
        :id="2"
        :typeList="['최신순', '별점 높은 순']"
        :currentType="'최신순'"
        @sorting="console.log($event)"
    />
</template>
