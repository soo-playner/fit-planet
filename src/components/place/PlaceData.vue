<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router'

const props = defineProps({
    data: Object,
});

const {id, name, scope, totalScope, location, comment, refImg} = props.data

const router = useRouter()

const seeDetail = () => {
    router.push({
        path: `/place/${id}`,
    })
}
</script>

<template>
    <div class="PlaceData-form" @click="seeDetail">
        <div class="top-column">
            <div class="place-info">
                <div class="name">
                    <p class="f-16-700">위즈짐</p>
                    <div class="starBox">
                        <div class="star">★</div>
                        <p class="total-scope">
                            <span>{{ scope }}</span>
                            <span>({{ totalScope }})</span>
                        </p>
                    </div>
                </div>
                <div class="location f-12-400">서울 강남구 삼성로86길 11</div>
            </div>
        </div>
        <div class="mid-column">
            <div class="place-rep-box">
                <div class="img-box">
                    <img src="@/assets/image/place-rep-img.png" alt="플레이스 대표 이미지">
                </div>
                <ul class="tag-box">
                    <li>24시</li>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                    <li>필라테스</li>
                    <li class="tag-all">+ 5</li>
                </ul>
            </div>
        </div>
        <div class="bott-column place-review">{{ comment }}</div>
    </div>

    <!-- <div class="PlaceData-form" @click="seeDetail">
        <div class="top-column">
            <div class="left-row">
                <div class="place-txt-box">
                    <div class="place-info">
                        <p class="f-16-700">{{ name }}</p>
                        <div class="starBox">
                            <div class="star">★</div>
                            <p class="total-scope f-12-400">
                                <span>{{ scope }}</span>
                                <span>({{ totalScope }})</span>
                            </p>
                        </div>
                    </div>
                    <div class="location-info f-12-400">{{ location }}</div>
                </div>
                <ul class="place-filter-list">
                    <li>24시</li>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                </ul>
            </div>
            <div class="right-row place-img-box"><img :src=refImg alt=""></div>
        </div>
        <div class="bott-column place-comment f-12-400">{{ comment }}</div>
    </div> -->
</template>
