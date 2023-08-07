<script>
    export default {
        name : 'ReviewWrite'
    }
</script>

<template>
    <div class="ReviewWrite_container">
        <div class="ReviewWrite_container_inner mob-inner">
            <!-- 결제 상품 -->
            <div class="product">
                <div class="left-column">
                    <p class="f-14-700"><span class="trainer-name">김위즈</span>트레이너<span class="center-name">(위즈짐)</span></p>
                    <span class="class-name f-14-400">바디 프로필 프로젝트 30회</span>
                </div>
                <div class="right-column center-img"></div>
            </div>
            <!-- 운동은 만족스러웠나요? -->
            <div class="scope-select">
                <div class="scope-select-tit f-14-700">운동은 만족스러웠나요?</div>
                <span class="scope-current f-12-400">만족해요</span>
                <div class="starBox">
                    <div class="star" v-for="starItem in 4" :key="starItem">★</div>
                    <div class="star">☆</div>
                </div>
            </div>
            <!-- 사진을 게시해 주세요 -->
            <div class="album">
                <div class="album-tit f-14-700">사진을 게시해 주세요</div>
                <span class="f-12-400">
                    <span>이미지가 구매한 운동상품과 관련이 없을 경우</span>
                    <span>쿠폰이 지급되지 않습니다.</span>
                </span>
                <div class="album-select">
                    <button class="album-plus"><span class="plus-shape"></span><input type="file" id="mb-review" name="mb-review"></button>
                    <div class="album-select-1"></div>
                    <div class="album-select-2"></div>
                </div>
            </div>
            <!-- 후기를 작성해 주세요 -->
            <div class="review-input">
                <div class="review-input-tit f-14-700">후기를 작성해 주세요</div>
                <div class="review-textarea">
                    <textarea name="" id="" cols="30" rows="10" placeholder="50자 이상 작성해주세요."></textarea>
                    <span class="word-count f-12-400">0</span>
                </div>
            </div>
            <!-- 경고 문구 -->
            <div class="review-warning">
                <ul class="warning-list">
                    <li>
                        <span></span>
                        <p>상품과 무관하거나 비속어가 포함된 리뷰, 그 외 후기 운영정책에 위배되는 후기는 고지 없이 블라인드 후 경고조치 됩니다. <router-link to="/">후기 운영정책 보기</router-link></p>
                    </li>
                    <li><span></span>경고 누적 시 후기 작성이 제한될 수 있습니다.</li>
                </ul>
                <router-link to="/" class="next-step-btn f-16-700">다음</router-link>
            </div>
        </div>
    </div>
</template>