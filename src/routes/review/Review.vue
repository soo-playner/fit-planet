<script>
    export default {
        name : 'Review',
    }
</script>

<template>
    <div class="review_container">
        <div class="review_container_inner mob-inner">
            <ul class="filter-scroll">
                <li>거리순<span class="arrow"></span></li>
                <li>마이후기</li>
                <li><img src="@/assets/image/location.png" alt="">서울시 강남구</li>
                <li>모든 지역</li>
                <li>관심 지역 +</li>
            </ul>
            <router-link to="/" class="review-induce">
                <p class="f-16-700">아직 작성하지 않은 후기 <span>2</span>건</p>
                <span class="arrow"></span>
            </router-link>
            <ul class="review-list">
                <li v-for="reviewCon in 6" :key="reviewCon">
                    <div class="center-img"></div>
                    <div class="txt-box">
                        <div class="writer-info">
                            <p>위즈위즈</p>
                            <div class="starBox">
                                <div class="star" v-for="star in 4" :key="star"><img src="@/assets/image/scope.png" alt="별점"></div>
                                <div class="star"><img src="@/assets/image/empty_scope.png" alt="별점"></div>
                            </div>
                        </div>
                        <div class="review-con">김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요!</div>
                        <div class="trainer-info"><span>김위즈</span>트레이너</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>