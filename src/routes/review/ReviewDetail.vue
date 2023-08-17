<script setup></script>

<template>
    <div class="ReviewDetail_container main-layout review_layout">
        <div class="ReviewDetail_container_inner mob-inner review_layout_inner">
            <ul class="review-detail-ul">
                <li class="review-detail-li" v-for="reviewItem in 4" :key="reviewItem">
                    <!-- 후기 이미지 -->
                    <div class="review-img-box"></div>
                    <!-- 후기 작성자 정보 -->
                    <div class="review-writer">
                        <div class="left-row">
                            <div class="user-profile"></div>
                            <div class="writer-info">
                                <p class="f-14-700">위즈위즈<span class="f-12-400">3개월 전</span></p>
                                <img src="@/assets/image/star_box.png" alt="">
                            </div>
                        </div>
                        <div class="right-row">
                            <div class="like-box"><img src="@/assets/image/like.png" alt="좋아요"><span class="like-count f-14-700">6</span></div>
                            <div class="menu-dot">
                                <span></span>
                                <ul class="review-sorting-list">
                                    <li><router-link to="/">공유하기</router-link></li>
                                    <li><router-link to="/">신고하기</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 후기 내용 -->
                    <div class="review-comment f-14-400">김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요!</div>
                    <!-- 해당 트레이너 정보 -->
                    <div class="trainer-info">
                        <div class="img-box"></div>
                        <div class="txt-box">
                            <div class="info">
                                <div class="f-14-700 trainer-center-name">
                                    <p>김위즈 트레이너</p>
                                    <span>위즈짐</span>
                                </div>
                                <div class="scope">
                                    <div class="starBox">
                                        <div class="star">★</div>
                                        <p class="f-12-400">4.3<span>(12)</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="heart"><img src="@/assets/image/heart-off.png" alt=""></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>