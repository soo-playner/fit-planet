<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router'

const props = defineProps({
    data: Object,
});

const {id, name, scope, totalScope, location, comment} = props.data

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
            <div class="right-row place-img-box"></div>
        </div>
        <div class="bott-column place-comment f-12-400">{{ comment }}</div>
    </div>
</template>
