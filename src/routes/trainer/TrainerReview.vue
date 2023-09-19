<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import Review from "@/components/review/Review";
import SortingBox from "@/components/layout/SortingBox.vue";

const store = useStore();
const reviewsByPlaces = store.state.review.reviewsByPlaces;

const sortingOpen = ref(false);
const sortingOpenFnc = () => {
    sortingOpen.value = !sortingOpen.value;
};

const closeModalFnc = () => {
    sortingOpen.value = !sortingOpen.value;
};
</script>

<template>
    <div class="PlaceReview_container main-layout">
        <div class="PlaceReview_container_inner mob-inner">
            <div class="top-column">
                <div class="left-row">
                    <div class="starBox">
                        <div class="star">★</div>
                        <p class="total-scope">
                            <span class="f-16-700">4.3 / 5</span>
                            <span class="f-14-400">(12개의 후기)</span>
                        </p>
                    </div>
                </div>
                <ul class="right-row place-review-sorting">
                    <li @click="sortingOpenFnc">
                        <p class="f-14-400">추천순</p>
                        <span class="arrow"></span>
                    </li>
                </ul>
            </div>
            <!-- 트레이너일 시 리뷰 내용 다름 -->
            <Review v-for="review in reviewsByPlaces" :key="review.id" :review="review" />
        </div>
    </div>

    <SortingBox :class="{ active: sortingOpen }" :closeModal="closeModalFnc" />
</template>
