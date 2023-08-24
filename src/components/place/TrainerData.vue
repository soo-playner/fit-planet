<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
    data: Object,
});

const {id, name, scope, totalScope, centerName, location, comment} = props.data

const router = useRouter()

const seeDetail = () => {
    router.push({
        path: `/place/${id}`,
    })
}
</script>

<template>
    <div class="TrainerData-form">
        <div class="top-column">
            <div class="left-row">
                <div class="trainer-info">
                    <p class="f-16-700">{{ name }} 트레이너</p>
                    <div class="starBox">
                        <div class="star">★</div>
                        <p class="total-scope f-12-400">
                            <span>{{ scope }}</span>
                            <span>({{ totalScope }})</span>
                        </p>
                    </div>
                </div>
                <div class="location-info f-12-400">
                    <p><img src="@/assets/image/place-map.png" alt="플레이스 위치" />{{ centerName }}</p>
                    <p>{{ location }}</p>
                </div>
            </div>
            <div class="right-row trainer-img-box"></div>
        </div>
        <div class="bott-column trainer-comment f-12-400">“{{ comment }}”</div>
    </div>
</template>
