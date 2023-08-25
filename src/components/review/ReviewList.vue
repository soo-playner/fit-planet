<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: Object,
});
</script>
<template>
    <li class="trainer-review-li review-li">
        <div class="img-box"></div>
        <div class="txt-box">
            <div class="info">
                <div class="info-detail">
                    <div class="f-14-700 trainer-name">
                        {{ props.data.writer }}
                    </div>
                    <div class="scope">
                        <div class="starBox">
                            <div class="star" v-for="star in props.data.scope" :key="star">★</div>
                            <div class="star_empty" v-for="star in 5 - props.data.scope" :key="star">☆</div>
                        </div>
                    </div>
                    <p class="review-con">{{ props.data.comment }}</p>
                </div>
            </div>
            <button class="trainer-btn f-12-400">
                <img src="@/assets/image/trainer-icon.png" />
                {{ props.data.trainer }} 트레이너
            </button>
        </div>
    </li>
</template>
