<script setup>
import {useStore} from 'vuex';
import { ref } from 'vue';
import Review from '@/components/review/Review.vue';
import ReviewSorting from '@/components/modal/review/ReviewSorting';

const store = useStore();
const reviewsByPlaces = store.state.review.reviewsByPlaces;

const sortingOpen = ref(false);
const sortingOpenFnc = () => {
    sortingOpen.value = !sortingOpen.value;
}

const closeModalFnc = () => {
    sortingOpen.value = !sortingOpen.value;
}
</script>

<template>
    <div class="PlaceReview_container main-layout">
        <div class="PlaceReview_container_inner mob-inner">
            <div class="top-column">
                <div class="left-row">
                    <img src="@/assets/image/review-con.png" alt="후기">
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
                    <li @click="sortingOpenFnc"><p class="f-14-400">추천순</p><span class="arrow"></span></li>
                </ul>
            </div>
            <Review v-for="review in reviewsByPlaces" :key="review.id" :review="review" />
        </div>
    </div>

    <ReviewSorting :class="{ active : sortingOpen }" :closeModal="closeModalFnc"/>
</template> 