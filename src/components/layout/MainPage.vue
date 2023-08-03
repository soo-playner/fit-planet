<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper-bundle.min.css';

    export default {
        name : 'MainPage',
        components : {
            Swiper, SwiperSlide
        },
        data () {
            return {
                swiperOption : {
                    slidesPerView : 3.5,
                    spaceBetween : 8,
                },
                show : true,
                trainer : [
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' },
                    { Name : '김위즈', cost : '29,900원', scope : '4.3', totalScope : '12' }
                ]
            }
        },
        methods : {
            trainerShow () {
                this.show = !this.show;
            }
        }
    }
</script>
<template>
    <main class="main_container main-layout">
        <section class="section section01 first-section">
            <div class="section01-inner mob-inner main-layout-inner">
                <div class="intro-txt-box">
                    <p class="f-14-400">천 리 운동 습관도 한 걸음부터!</p>
                    <h1 class="f-20-700">
                        <p>위즈위즈님 주변의</p>
                        <p>1회 체험권만 모아봤어요</p>
                    </h1>
                    <div class="trainer-toggle-box">
                        <ul class="trainer-choice-ul">
                            <li class="trainer-choice-li" @click="trainerShow" ><p class="f-12-400">트레이너</p><span class="arrow"></span></li>
                            <ul v-if="!show">
                                <li class="f-12-400">트레이너</li>
                                <li class="f-12-400">트레이너</li>
                                <li class="f-12-400">트레이너</li>
                            </ul>
                        </ul>
                        <div class="location">
                            <div class="img-box"><img src="../../assets/image/location.png" alt="위치 표시"></div>
                            <p class="f-12-400">서울시 강남구</p>
                        </div>
                    </div>
                </div>
                <Swiper class="trainer-list" v-bind="swiperOption">
                    <SwiperSlide v-for="trainerList in trainer" :key="trainerList">
                        <div class="img-box"><img src="../../assets/image/no-image.png"></div>
                        <div class="txt-box">
                            <div class="trainer">
                                <span class="f-12-400">{{ trainerList.Name }} 트레이너</span>
                                <p class="f-14-700">{{ trainerList.cost }}/회</p>
                            </div>
                            <div class="scope">
                                <img src="../../assets/image/scope.png" alt="별점">
                                <p class="f-12-400">{{ trainerList.scope }}<span>{{ trainerList.totalScope }}</span></p>
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
            </div>
        </section>
        <section class="section section02">
            <div class="section02-inner mob-inner">
                <p class="f-16-700">진행 중인 운동이 없어요!</p>
                <div class="f-14-400">
                    <span>운동을 결제하면</span>
                    <span>나의 운동 프로그램을 여기서 관리할 수 있어요</span>
                </div>
                <router-link to='' class="f-12-400">운동 둘러보기</router-link>
            </div>
        </section> 
    </main>
</template>