<script setup>
import Review from '@/components/review/Review.vue';
import {useStore} from 'vuex'

const store = useStore();
const reviewsByPlaces = store.state.review.reviewsByPlaces;

</script>

<template>
    <div class="PlaceReview_container main-layout">
        <div class="PlaceReview_container_inner mob-inner">
            <div class="total-scope">
                <div class="left-row">
                    <img src="@/assets/image/scope.png" alt="별점">
                    <p>
                        <span class="f-16-700">4.3 / 5</span>
                        <span class="f-14-400">(12개의 후기)</span>
                    </p>
                </div>
                <ul class="right-row place-review-sorting">
                    <li><p class="f-12-400">추천순</p><span class="arrow"></span></li>
                </ul>
            </div>
            <Review v-for="review in reviewsByPlaces" :key="review.id" :review="review" />
        </div>
    </div>
</template> 