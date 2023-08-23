<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

const store = useStore(); // 저장소 객체 주입받아 사용하기

const swiperOption = {
    slidesPerView: 3.5,
    spaceBetween: 8,
};

const trainers = store.state.trainer.trainers;

onMounted(() => {});
</script>

<template>
    <Swiper class="trainer-list" v-bind="swiperOption">
        <SwiperSlide v-for="trainer in trainers" :key="trainer">
            <div class="img-box"><img src="../../../assets/image/no-image.png" /></div>
            <div class="txt-box">
                <div class="trainer">
                    <span class="f-12-400">{{ trainer.name }} 트레이너</span>
                    <p class="f-14-700">{{ trainer.pricePerSession }}/회</p>
                </div>
                <div class="scope">
                    <div class="starBox">
                        <div class="str">★</div>
                    </div>
                    <p class="f-12-400">
                        {{ trainer.scope }}<span>({{ trainer.totalScope }})</span>
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
