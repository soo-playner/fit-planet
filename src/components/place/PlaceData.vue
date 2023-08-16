<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>

<template>
    <div class="PlaceData-form">
        <div class="top-column">
            <div class="left-row">
                <div class="place-txt-box">
                    <div class="place-info">
                        <p class="f-16-700">{{ props.data.placeName }}</p>
                        <div class="starBox">
                            <div class="star">★</div>
                            <p class="total-scope f-12-400">
                                <span>{{ props.data.placeScope }}</span>
                                <span>({{ props.data.placeTotalScope }})</span>
                            </p>
                        </div>
                    </div>
                    <div class="location-info f-12-400">{{ props.data.placeAddress }}</div>
                </div>
                <ul class="place-filter-list">
                    <li>24시</li>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                </ul>
            </div>
            <div class="right-row place-img-box"></div>
        </div>
        <div class="bott-column place-comment f-12-400">{{ props.data.placeComment }}</div>
    </div>
</template>
