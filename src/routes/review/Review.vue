<script setup>
import reviewTab from "./Review_Tab";
import reviewList from "@/components/review/ReviewList";

const reviewListData = [
    {
        writer: "위즈위즈1",
        scope: 4,
        trainer: "김위즈",
        comment: "김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요!",
    },
    {
        writer: "위즈위즈1",
        scope: 3,
        trainer: "김위즈",
        comment: "김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요!",
    },
    {
        writer: "위즈위즈1",
        scope: 5,
        trainer: "김위즈",
        comment: "김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요!",
    },
];
</script>

<template>
    <div class="review_container main-layout">
        <div class="review_container_inner mob-inner">
            <reviewTab />
            <ul class="review-list">
                <reviewList v-for="reviewItem in reviewListData" :key="reviewItem" :data="reviewItem" />
            </ul>
        </div>
    </div>
</template>
