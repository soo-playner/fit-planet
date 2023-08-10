<script>
    export default {
        name : 'ReviewList'
    }
</script>

<template>
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
</template>