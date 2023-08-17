<script setup>
    import { ref } from "vue";

    import WishList_Tab from './components/WishList_Tab';
    import PlaceWishList from '@/components/wish/PlaceWishList';
    import TrainerWishList from '@/components/wish/TrainerWishList';

    const tabs = ["플레이스", "트레이너"];
    const targetTab = ref("플레이스");
    const changeTab = (newTab) => {
        targetTab.value = newTab;
    };

    const placeWishArray = [
        { center : '위즈짐1', scope : '4.3', totalScope : '12', location : '서울 강남구 대치동' },
        { center : '위즈짐2', scope : '4.3', totalScope : '12', location : '서울 강남구 대치동' },
        { center : '위즈짐3', scope : '4.3', totalScope : '12', location : '서울 강남구 대치동' },
        { center : '위즈짐4', scope : '4.3', totalScope : '12', location : '서울 강남구 대치동' }
    ]

    const trainerWishArray = [
        { name : '김위즈1', scope : '4.3', totalScope : '12' },
        { name : '김위즈2', scope : '4.3', totalScope : '12' },
        { name : '김위즈3', scope : '4.3', totalScope : '12' },
        { name : '김위즈4', scope : '4.3', totalScope : '12' },
    ]
</script>

<template>
    <div class="Wish_container main-layout">
        <WishList_Tab :tabs="tabs" :targetTab="targetTab" @tabChange="changeTab"/>
        <div class="Wish_container_inner mob-inner">
            <!-- 플레이스 -->
            <ul class="place-wish-ul wish-ul" v-if="targetTab === '플레이스'">
                <PlaceWishList v-for="placeWishItem in placeWishArray" :key="placeWishItem" :data="placeWishItem"/>
            </ul>
            <!-- 트레이너 -->
            <ul class="trainer-wish-ul wish-ul" v-if="targetTab === '트레이너'">
                <TrainerWishList v-for="TrainerWishItem in trainerWishArray" :key="TrainerWishItem" :data="TrainerWishItem"/>
            </ul>
        </div>
    </div>
</template>