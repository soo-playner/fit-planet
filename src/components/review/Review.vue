<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    review: Object
});

const {comment, id, date, likeCnt, rating, reply, replyDate, writer} = props.review;

// 액션버튼
const isOptionMenuOpen = ref(false);

const openOptionMenu = () => {
    isOptionMenuOpen.value = !isOptionMenuOpen.value;
}

</script>

<template>
    <div class="total-review-form">
        <div class="review-writer">
            <div class="left-row">
                <div class="user-profile"></div>
                <div class="writer-info">
                    <p class="f-14-700">{{writer}}<span class="f-12-400">{{date}}</span></p>
                    <img src="@/assets/image/star_box.png" alt="">
                </div>
            </div>
            <div class="right-row">
                <div class="like-box"><img src="@/assets/image/like.png" alt="좋아요"><span class="like-count f-14-700">{{likeCnt}}</span></div>
                <div class="menu-dot">
                    <span @click="openOptionMenu"></span>
                    <ul class="review-sorting-list" v-show="isOptionMenuOpen">
                        <li><router-link to="/">공유하기</router-link></li>
                        <li><router-link to="/">신고하기</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="review-content">
            <div class="member-review">
                <div class="member-review-txt f-14-400">{{comment}}</div>
                <div class="member-review-img"></div>
            </div>
            <div class="place-answer">
                <p class="f-14-700">플레이스 답변<span class="f-12-400">{{replyDate}}</span></p>
                <div class="placep-answer-txt f-14-400">{{reply}}</div>
            </div>  
        </div>
    </div>
</template>