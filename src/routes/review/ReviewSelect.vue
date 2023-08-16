<script setup></script>

<template>
    <div class="ReviewSelect_container main-layout notFooter-layout2">
        <div class="ReviewSelect_container_inner mob-inner">
            <ul class="remain-review">
                <li class="remain-review-list" v-for="(reviewCon, idx) in 4" :key="reviewCon">
                    <div class="left-column">
                        <input type="radio" :name="`reviewCon${idx}`" :id="reviewCon + idx" />
                        <label :for="reviewCon + idx">
                            <span class="outSide"><span></span></span>
                            <div class="txt-box">
                                <p class="f-14-700"><span class="trainer-name">김위즈</span>트레이너<span class="center-name">(위즈짐)</span></p>
                                <span class="f-14-400">바디 프로필 프로젝트 30회</span>
                            </div>
                        </label>
                    </div>
                    <div class="right-column center-img"></div>
                </li>
            </ul>
            <router-link to="/Review/Write" class="next-step-btn">다음</router-link>
        </div>
    </div>
</template>
