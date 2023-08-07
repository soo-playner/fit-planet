<script>
    export default {
        name : 'ReviewSelect'
    }
</script>

<template>
    <div class="ReviewSelect_container">
        <div class="ReviewSelect_container_inner mob-inner">
            <ul class="remain-review">
                <li class="remain-review-list" v-for="reviewCon in 4" :key="reviewCon">
                    <div class="left-column">
                        <div class="check-current"><span></span></div>
                        <div class="center-info">
                            <p class="f-14-700"><span class="trainer-name">김위즈</span>트레이너<span class="center-name">(위즈짐)</span></p>
                            <span class="class-name f-14-400">바디 프로필 프로젝트 30회</span>
                        </div>
                    </div>
                    <div class="right-column center-img"></div>
                </li>
            </ul>
            <router-link to="/" class="next-step-btn">다음</router-link>
        </div>
    </div>
</template>