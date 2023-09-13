<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import placeDetail_Modal from "@/components/modal/place/PlaceDetail_Inquiry";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination";

const route = useRoute();
// TODO: 쿼리로 넘어온 id로 상세 데이터 읽어오기
const placeId = route.params.id;

const swiperOption1 = ref({
    slidesPerView: 1,
    pagination: true,
    parallax: true,
    speed: 700,
    loop: true,
});

const swiperOption2 = {
    slidesPerView: 1.5,
    spaceBetween: 8,
    breakpoints: {
        360: {
            slidesPerView: 1.3,
        },
    },
};

const swiperOption3 = {
    slidesPerView: 1.5,
    spaceBetween: 8,
    breakpoints: {
        360: {
            slidesPerView: 2.1,
        },
    },
};

const currentSlideIndex = {
    1: ref(0),
};

const ticket = [
    { name: "1회 체험권", cost: "59,000원", totalCost: "59,000원" },
    { name: "1개월 수강권", cost: "59,000원", totalCost: "59,000원" },
    { name: "3개월 수강권", cost: "49,000원", totalCost: "147,000원", discount: "30,000원 할인" },
];

const freeList = [{ title: "수건" }, { title: "샤워실" }, { title: "Wi-fi" }, { title: "체형분석" }, { title: "체성분검사" }, { title: "주차장" }, { title: "사우나" }, { title: "찜질방" }];

const machine = [{ title: "프리웨이트" }, { title: "하체" }, { title: "가슴" }];

const machineTag = [
    ["파워렉", "스미스머신", "치닝디핑", "케이블 머신"],
    ["브이스쿼트", "힙 어브덕션", "핵스쿼트 머신", "레그프레스", "파워 레그프레스 머신", "레그 익스텐션 머신", "레그 컬 머신"],
    ["인클라인 벤치", "디클라인 벤치", "펙덱 머신", "체스트 프레스 머신"],
];

// 문의하기 모달창 오픈
const inquiryOpen = ref(false);
const inquiryOpenFnc = () => {
    inquiryOpen.value = !inquiryOpen.value;
};
// 문의하기 모달창 닫기
const confirmInquiry = () => {
    inquiryOpen.value = !inquiryOpen.value;
};

// 하트 이미지 변경
const toggle = (e) => {
    e.target.classList.toggle("wish");
};

const handleSlideChange = (swiper, target) => {
    currentSlideIndex[target].value = swiper.realIndex;
};
</script>

<template>
    <div class="detail_container main-layout">
        <div class="detail_container_inner mob-inner">
            <!-- 지도 보기 -->
            <div class="place-map">
                <Swiper
                    v-bind="swiperOption1"
                    @slideChange="
                        (swiper) => {
                            handleSlideChange(swiper, 1);
                        }
                    "
                >
                    <SwiperSlide>
                        <img src="@/assets/image/gym_sample.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/image/gym_sample.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/image/gym_sample.png" alt="" />
                    </SwiperSlide>
                </Swiper>
                <div class="slide-position">
                    <strong class="current">{{ currentSlideIndex[1].value + 1 }}</strong>
                    /
                    <span class="total">3</span>
                </div>
            </div>
            <!-- 플레이스 정보 -->
            <div class="place-info">
                <div class="left-row">
                    <div class="place-info-txt">
                        <p class="f-18-700">위즈짐</p>
                        <span class="f-12-400 location"><img src="@/assets/image/map3.png" alt="위치" />서울 강남구 삼성로86길 11 거봉INC 3층</span>
                    </div>
                    <div class="place-info-scope">
                        <div class="starBox">
                            <div class="star">★</div>
                            <p class="total-scope f-12-400">
                                <span>4.3</span>
                                <span>(12)</span>
                            </p>
                        </div>
                    </div>
                    <ul class="place-info-filter">
                        <li>24시</li>
                        <li>P.T</li>
                        <li>그룹 P.T</li>
                        <li>골프</li>
                    </ul>
                </div>
                <div class="right-row">
                    <div class="heart" @click="toggle"></div>
                    <div class="share"><img src="@/assets/image/share.png" alt="공유하기" /></div>
                </div>
            </div>
            <!-- 플레이스 상품 -->
            <Swiper class="place-ticket" v-bind="swiperOption2">
                <SwiperSlide v-for="ticketItem in ticket" :key="ticketItem">
                    <div class="f-14-500">{{ ticketItem.name }}</div>
                    <div>
                        <span class="discount f-12-400">{{ ticketItem.discount }}</span>
                        <p class="f-16-700 month">{{ ticketItem.cost }}/월</p>
                        <span class="f-12-400 price">결제금액 {{ ticketItem.totalCost }}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <router-link to="/" class="place-ticket-all">
                        <div class="arrow-circle"><span></span></div>
                        <p class="f-14-400">전체 보기</p>
                    </router-link>
                </SwiperSlide>
            </Swiper>
            <!-- 이용 후기 -->
            <div class="place-review">
                <div class="place-review-tit place-each-tit">
                    <p class="f-14-500">이용 후기</p>
                    <div class="starBox">
                        <div class="star">★</div>
                        <p class="total-scope f-12-400">
                            <span>4.3</span>
                            <span>(12)</span>
                        </p>
                    </div>
                </div>
                <div class="place-review-list">
                    <Swiper v-bind="swiperOption2">
                        <SwiperSlide v-for="reviewItem in 4" :key="reviewItem">
                            <div class="review-write-info">
                                <p class="review-writer f-14-400">위즈위즈<span class="review-date f-12-400">3개월 전</span></p>
                                <div class="starBox review-writer-scope">
                                    <div class="star" v-for="starItem in 4" :key="starItem">★</div>
                                    <div class="star_empty">☆</div>
                                </div>
                            </div>
                            <div class="review-content f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <router-link to="/Place/Review" class="review-all-btn btn-44-purple-b f-14-400">이용 후기 모두 보기</router-link>
            </div>
            <!-- 플레이스 설명 -->
            <div class="place-explain f-12-400">
                <div class="place-explain-content">
                    <span>최고, 최신의 운동기구를 갖춘</span>
                    <span>강남 최고의 운동시설, 위즈짐입니다.</span>
                    <br />
                    <span>최고의 선생님들의 1:1 개인 맞춤 지도, 인바디를 통해</span>
                    <span>맞춤 운동 및 식단 처방을 제공합니다.</span>
                    <br />
                    <span>1111111111</span>
                    <span>1111111111</span>
                    <span>1111111111</span>
                    <span>1111111111</span>
                    <span>1111111111</span>
                    <span>1111111111</span>
                    <div class="more f-12-400">더 보기<span></span></div>
                </div>
            </div>
            <!-- 운영시간 -->
            <div class="place-operate">
                <div class="place-operate-tit place-each-tit">운영시간</div>
                <div class="place-operate-detail">
                    <div>
                        <div>
                            <span>평일</span>
                            <p>06:00 - 23:59</p>
                        </div>
                        <div>
                            <span>토요일</span>
                            <p>08:00 - 19:00</p>
                        </div>
                        <div>
                            <span>공휴일</span>
                            <p>10:00 - 18:00</p>
                        </div>
                        <div>
                            <span>일요일</span>
                            <p>10:00 - 18:00</p>
                        </div>
                    </div>
                    <div>
                        <span>휴관일</span>
                        <p>매달 첫째주 일요일, 매달 셋째주 일요일</p>
                    </div>
                </div>
            </div>
            <!-- 편의시설 -->
            <div class="place-convenience">
                <div class="place-convenience-tit place-each-tit">편의시설</div>
                <div class="free">
                    <div class="free-tit f-12-400">무료</div>
                    <ul class="convenience-list free-list">
                        <li v-for="(freeItem, idx) in freeList" :key="freeItem">
                            <div :class="['free-icon', `free-icon-${idx + 1}`]"></div>
                            <p>{{ freeItem.title }}</p>
                        </li>
                    </ul>
                </div>
                <div class="pay">
                    <div class="pay-tit f-12-400">유료</div>
                    <ul class="convenience-list pay-list">
                        <li>
                            <div class="pay-icon pay-icon-1"></div>
                            <p class="pay-target">운동복</p>
                            <p class="pay-expense">월 10,000원</p>
                        </li>
                        <li>
                            <div class="pay-icon pay-icon-2"></div>
                            <p class="pay-target">락커</p>
                            <p class="pay-expense">월 10,000원</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 운동 기구 -->
            <div class="place-machine">
                <div class="place-each-tit">운동 기구</div>
                <div class="place-machine-list-wrap">
                    <div class="place-machine-list" v-for="(machineItem, idx) in machine" :key="idx">
                        <span class="place-machine-tit f-14-400">{{ machineItem.title }}</span>
                        <ul>
                            <li v-for="(data, _idx) in machineTag[idx]" :key="_idx">{{ data }}</li>
                        </ul>
                    </div>
                </div>
                <router-link to="/place/machine" class="place-machine-all-btn btn-44-purple-b f-14-400">운동기구 모두 보기</router-link>
            </div>
            <!-- 1:1 트레이너 -->
            <div class="place-trainer">
                <div class="place-trainer-tit place-each-tit">1:1 트레이너<span class="place-trainer-count f-12-400">6</span></div>
                <Swiper class="place-trainer-list" v-bind="swiperOption3">
                    <SwiperSlide>
                        <div class="trainer-info">
                            <div class="txt-box">
                                <span class="rank">센터장</span>
                                <div>
                                    <p><span>김위즈</span>트레이너</p>
                                    <span class="arrow"><img src="@/assets/image/arrow.png" alt="바로가기" /></span>
                                </div>
                            </div>
                            <div class="img-box"><img src="@/assets/image/trainer1.png" alt="트레이너 이미지" /></div>
                        </div>
                        <div class="trainer-comment">“김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="trainer-info">
                            <div class="txt-box">
                                <span class="rank fake">센터장</span>
                                <div>
                                    <p><span>김위즈</span>트레이너</p>
                                    <span class="arrow"><img src="@/assets/image/arrow.png" alt="바로가기" /></span>
                                </div>
                            </div>
                            <div class="img-box"><img src="@/assets/image/trainer2.png" alt="트레이너 이미지" /></div>
                        </div>
                        <div class="trainer-comment">“김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="trainer-info">
                            <div class="txt-box">
                                <span class="rank fake">센터장</span>
                                <div>
                                    <p><span>김위즈</span>트레이너</p>
                                    <span class="arrow"><img src="@/assets/image/arrow.png" alt="바로가기" /></span>
                                </div>
                            </div>
                            <div class="img-box"><img src="@/assets/image/trainer1.png" alt="트레이너 이미지" /></div>
                        </div>
                        <div class="trainer-comment">“김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"</div>
                    </SwiperSlide>
                </Swiper>
                <router-link to="/Place/Trainer" class="place-trainer-all-btn btn-44-purple-b f-14-400">트레이너 모두 보기</router-link>
            </div>
            <!-- 환불정책 -->
            <div class="place-refunt">
                <div class="place-refunt-tit place-each-tit">환불정책</div>
                <div class="place-refunt-content place-explain">
                    <span>최고, 최신의 운동기구를 갖춘</span>
                    <span>강남 최고의 운동시설, 위즈짐입니다.</span>
                    <span>최고의 선생님들의 1:1 개인 맞춤 지도, 인바디를 통해 </span>
                    <span>맞춤 운동 및 식단 처방을 제공합니다.</span>
                    <div class="more f-12-400">더 보기<span></span></div>
                </div>
            </div>
        </div>
        <!-- 문의하기/운동 선택하기 -->
        <div class="place-lnb">
            <button class="work-inquiry f-16-700" @click="inquiryOpenFnc">문의하기</button>
            <button @click="$router.push('/place/machine-choice')">운동 선택하기</button>
        </div>
        <!-- 문의하기 클릭 시 모달 -->
        <placeDetail_Modal :class="{ active: inquiryOpen }" :InquiryClose="confirmInquiry" />
    </div>
</template>
