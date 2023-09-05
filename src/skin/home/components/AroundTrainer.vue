<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

const store = useStore(); // 저장소 객체 주입받아 사용하기

const swiperOption = {
    slidesPerView: 3.5,
    spaceBetween: 8,
    breakpoints : {
        360 : {
            slidesPerView : 2.3
        }
    }
};

const trainers = store.state.trainer.trainers;

onMounted(() => {});
</script>

<template>
    <Swiper class="trainer-list" v-bind="swiperOption">
        <SwiperSlide v-for="(trainer, idx) in trainers" :key="trainer">
            <div class="img-box"><img :src="require(`@/assets/image/home-trainer${idx + 1}.png`)" /></div>
            <div class="txt-box">
                <div class="trainer">
                    <span class="f-12-400">{{ trainer.name }} 트레이너</span>
                    <p class="f-14-700">{{ trainer.pricePerSession }}/회</p>
                </div>
                <div class="starBox">
                    <div class="star">★</div>
                    <p class="total-scope f-12-400">
                        <span>{{ trainer.scope }}</span>
                        <span>({{ trainer.totalScope }})</span>
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="trainer-list-all">
                <div class="arrow-circle"><span></span></div>
                <p class="f-14-400">전체 보기</p>
            </div>
        </SwiperSlide>
    </Swiper>
</template>
