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
                    <div class="starBox">
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star_empty">☆</div>
                    </div>
                </div>
            </div>
            <div class="right-row">
                <div class="like-box">
                    <!-- 
                        좋아요 클릭 시 이미지 변경되는 부분은
                        like-img 태그에 like 클래스 추가 시 변경되는 걸로 설정해놨습니다.
                        ㄴ commonLayout.scss 398번 라인 보시면 됩니다.
                    -->
                    <div class="like-img"></div>
                    <span class="like-count f-14-400">{{ likeCnt }}</span>
                </div>
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