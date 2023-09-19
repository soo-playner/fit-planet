<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import Review from "@/components/review/Review.vue";
import SortingBox from "@/components/layout/SortingBox.vue";

const store = useStore();
const reviewsByPlaces = store.state.review.reviewsByPlaces;
const sortingOpen = ref(false);
</script>

<template>
    <div class="PlaceReview_container main-layout">
        <div class="PlaceReview_container_inner mob-inner">
            <div class="top-column">
                <div class="left-row">
                    <img src="@/assets/image/review-con.png" alt="후기" />
                    <div class="starBox2">
                        <div class="total-scope">
                            <span>
                                <span>4.3</span>
                                <span>/ 5</span>
                            </span>
                            <p class="f-14-400">(12개의 후기)</p>
                        </div>
                    </div>
                </div>
                <ul class="right-row place-review-sorting">
                    <li @click="sortingOpen = true">
                        <p class="f-14-400">추천순</p>
                        <span class="arrow"></span>
                    </li>
                </ul>
            </div>
            <Review v-for="review in reviewsByPlaces" :key="review.id" :review="review" />
        </div>
    </div>

    <SortingBox
        v-show="sortingOpen"
        :closeModal="
            () => {
                sortingOpen = false;
            }
        "
        ;id="1"
        :typeList="['거리순', '좋아요 순', '별점 높은 순']"
        :currentType="'거리순'"
        @sorting="console.log('api 요청')"
    />
</template>
