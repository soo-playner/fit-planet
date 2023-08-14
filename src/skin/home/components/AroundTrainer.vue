<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper-bundle.min.css';

    export default {
        name : 'TrainerList',
        components : {
            Swiper, SwiperSlide
        },
        data(){
            return {
                swiperOption : {
                    slidesPerView : 3.5,
                    spaceBetween : 8,
                },
                trainer : [
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' }
                ]
            }
        }
    }
</script>

<template>
    <Swiper class="trainer-list" v-bind="swiperOption">
        <SwiperSlide v-for="trainerList in trainer" :key="trainerList">
            <div class="img-box"><img src="../../../assets/image/no-image.png"></div>
            <div class="txt-box">
                <div class="trainer">
                    <span class="f-12-400">{{ trainerList.Name }} 트레이너</span>
                    <p class="f-14-700">{{ trainerList.cost }}/회</p>
                </div>
                <div class="scope">
                    <div class="starBox">
                        <div class="str">★</div>
                    </div>
                    <p class="f-12-400">{{ trainerList.scope }}<span>({{ trainerList.totalScope }})</span></p>
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

