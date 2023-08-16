<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const swiperOption1 = {
    slidesPerView: 1,
    pagination: true,
    parallax: true,
    speed: 700,
    loop: true,
};

const swiperOption2 = {
    slidesPerView: 1.5,
    spaceBetween: 8,
};

const inquiryActive = ref(false);

function toggleInquiry() {
    inquiryActive.value = !inquiryActive.value;
}
</script>

<template>
    <div class="detail_container main-layout">
        <div class="detail_container_inner mob-inner">
            <!-- 지도 보기 -->
            <div class="place-map">
                <Swiper v-bind="swiperOption1">
                    <SwiperSlide>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.085678942443!2d127.05573197635974!3d37.50589732760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414371b94b3%3A0xbfc791d5b09e4135!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHroZw4Nuq4uCAxMQ!5e0!3m2!1sko!2skr!4v1690959074813!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div class="place-map-move"><router-link to="/" class="f-14-400">지도 보기</router-link></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.085678942443!2d127.05573197635974!3d37.50589732760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414371b94b3%3A0xbfc791d5b09e4135!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHroZw4Nuq4uCAxMQ!5e0!3m2!1sko!2skr!4v1690959074813!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div class="place-map-move"><router-link to="/" class="f-14-400">지도 보기</router-link></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.085678942443!2d127.05573197635974!3d37.50589732760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414371b94b3%3A0xbfc791d5b09e4135!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHroZw4Nuq4uCAxMQ!5e0!3m2!1sko!2skr!4v1690959074813!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div class="place-map-move"><router-link to="/" class="f-14-400">지도 보기</router-link></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.085678942443!2d127.05573197635974!3d37.50589732760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414371b94b3%3A0xbfc791d5b09e4135!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHroZw4Nuq4uCAxMQ!5e0!3m2!1sko!2skr!4v1690959074813!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div class="place-map-move"><router-link to="/" class="f-14-400">지도 보기</router-link></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <!-- 플레이스 정보 -->
            <div class="place-info">
                <div class="left-row">
                    <div class="place-info-txt">
                        <p class="f-18-700"><span class="trainer-name">김위즈</span>트레이너</p>
                    </div>
                    <div class="place-info-scope">
                        <div class="starBox">
                            <div class="star"><img src="@/assets/image/scope.png" alt="별점" /></div>
                            <div class="star"><img src="@/assets/image/scope.png" alt="별점" /></div>
                            <div class="star"><img src="@/assets/image/scope.png" alt="별점" /></div>
                            <div class="star"><img src="@/assets/image/scope.png" alt="별점" /></div>
                            <div class="star"><img src="@/assets/image/empty_scope.png" alt="별점" /></div>
                        </div>
                        <div class="scope-current f-12-400">4.3<span>(12)</span></div>
                    </div>
                </div>
                <div class="right-row">
                    <div class="heart"><img src="@/assets/image/heart-off.png" alt="찜하기" /></div>
                    <div class="share"><img src="@/assets/image/share.png" alt="공유하기" /></div>
                </div>
            </div>
            <!-- 플레이스 상품 -->
            <Swiper class="place-ticket" v-bind="swiperOption2">
                <SwiperSlide>
                    <div class="f-14-400">1:1 PT 1회 체험권</div>
                    <div>
                        <p class="f-16-700 month">29,900원/회</p>
                        <span class="f-12-400 price">결제금액 29,900원</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="f-14-400">1:1 PT 10회</div>
                    <div>
                        <p class="f-16-700 month">49,900원/회</p>
                        <span class="f-12-400 price">결제금액 499,000원</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="f-14-400">바디 프로필 프로젝트 30회</div>
                    <div>
                        <span class="discount f-12-400">60,000원 할인</span>
                        <p class="f-16-700 month">10% 47,900원/회</p>
                        <span class="f-12-400 price">결제금액 1,437,000원</span>
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
                    <p class="f-14-400">이용 후기</p>
                    <div>
                        <img src="@/assets/image/scope.png" alt="별점" />
                        <p class="f-12-400">
                            <span>4.3</span>
                            <span>(12)</span>
                        </p>
                    </div>
                </div>
                <div class="place-review-list">
                    <Swiper v-bind="swiperOption2">
                        <SwiperSlide>
                            <div class="review-write-info">
                                <p class="review-writer f-14-400">위즈위즈<span class="review-date f-12-400">3개월 전</span></p>
                                <div class="review-writer-scope">
                                    <!-- <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">별 1개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">2개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">3개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">4개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">5개</span></span>
                                    </label> -->
                                    <img src="@/assets/image/star_box.png" alt="" />
                                </div>
                            </div>
                            <div class="review-content f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="review-write-info">
                                <p class="review-writer f-14-400">위즈위즈<span class="review-date f-12-400">3개월 전</span></p>
                                <div class="review-writer-scope">
                                    <!-- <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">별 1개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">2개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">3개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">4개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">5개</span></span>
                                    </label> -->
                                    <img src="@/assets/image/star_box.png" alt="" />
                                </div>
                            </div>
                            <div class="review-content f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="review-write-info">
                                <p class="review-writer f-14-400">위즈위즈<span class="review-date f-12-400">3개월 전</span></p>
                                <div class="review-writer-scope">
                                    <!-- <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">별 1개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">2개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">3개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">4개</span></span>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="star">
                                        <span class="starBg"><span class="blind">5개</span></span>
                                    </label> -->
                                    <img src="@/assets/image/star_box.png" alt="" />
                                </div>
                            </div>
                            <div class="review-content f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <router-link to="/" class="review-all-btn f-14-400">이용 후기 모두 보기</router-link>
            </div>
            <!-- 플레이스 설명 -->
            <div class="place-explain f-12-400">
                <div class="place-explain-content">
                    <span>최고, 최신의 운동기구를 갖춘</span>
                    <span>강남 최고의 운동시설, 위즈짐입니다.</span>
                    <span>최고의 선생님들의 1:1 개인 맞춤 지도, 인바디를 통해 </span>
                    <span>맞춤 운동 및 식단 처방을 제공합니다.</span>
                </div>
                <div class="more f-12-400">더 보기<span></span></div>
            </div>
            <!-- 운동시설 -->
            <div class="place-facility">
                <div class="place-facility-tit">운동시설</div>
                <ul class="place-facility-list">
                    <li>
                        <div class="place-facility-list-tit f-14-700">플레이스 no.1</div>
                        <div class="place-facility-list-detail">
                            <div class="place-img">
                                <Swiper>
                                    <SwiperSlide>1</SwiperSlide>
                                    <SwiperSlide>2</SwiperSlide>
                                    <SwiperSlide>3</SwiperSlide>
                                    <SwiperSlide>4</SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="place-info">
                                <div class="left-row">
                                    <div class="place-info-txt">
                                        <p class="f-18-700">위즈짐</p>
                                        <span class="f-12-400 location"><img src="@/assets/image/place-map.png" alt="위치" />서울 강남구 삼성로86길 11 거봉INC 3층</span>
                                    </div>
                                    <ul class="place-info-filter">
                                        <li>운동복</li>
                                        <li>락커</li>
                                        <li>주차</li>
                                    </ul>
                                </div>
                                <div class="right-row">
                                    <div class="heart"><img src="@/assets/image/heart-off.png" alt="찜하기" /></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="place-facility-list-tit f-14-700">플레이스 no.2</div>
                        <div class="place-facility-list-detail">
                            <div class="place-img">
                                <Swiper>
                                    <SwiperSlide>1</SwiperSlide>
                                    <SwiperSlide>2</SwiperSlide>
                                    <SwiperSlide>3</SwiperSlide>
                                    <SwiperSlide>4</SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="place-info">
                                <div class="left-row">
                                    <div class="place-info-txt">
                                        <p class="f-18-700">위즈짐</p>
                                        <span class="f-12-400 location"><img src="@/assets/image/place-map.png" alt="위치" />서울 강남구 삼성로86길 11 거봉INC 3층</span>
                                    </div>
                                    <ul class="place-info-filter">
                                        <li>운동복</li>
                                        <li>락커</li>
                                        <li>주차</li>
                                    </ul>
                                </div>
                                <div class="right-row">
                                    <div class="heart"><img src="@/assets/image/heart-off.png" alt="찜하기" /></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 운영시간 -->
            <div class="place-operate">
                <div class="place-operate-tit place-each-tit f-14-400">운영시간</div>
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
                    <div class="f-12-400">*위 시간 이외의 스케줄은 전화/카카오톡 문의 바랍니다.</div>
                </div>
            </div>
            <!-- 자격사항 -->
            <div class="qualify">
                <div class="qualify-tit">자격사항</div>
                <div class="qualify-content">
                    <p class="f-12-400">2급 생활스포츠지도사</p>
                    <p class="f-12-400">스포츠영양코치 Level 1</p>
                    <p class="f-12-400">스포츠영양코치 Level 2</p>
                    <p class="f-12-400">하지통합재활전문가</p>
                    <p class="f-12-400">하지기능운동재활전문가</p>
                    <div class="more f-12-400">더 보기<span></span></div>
                </div>
            </div>
            <!-- 학력 -->
            <div class="ability">
                <div class="ability-tit">학력</div>
                <div class="ability-content">
                    <p>위즈대학교 스포츠 경호학과</p>
                </div>
            </div>
            <!-- 환불정책 -->
            <div class="place-refunt">
                <div class="place-refunt-tit f-14-400 place-each-tit">환불정책</div>
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
            <router-link to="#" class="work-inquiry f-16-700" @click="toggleInquiry">문의하기</router-link>
            <router-link to="/PlaceMachine_Choice" class="work-choice f-16-700">운동 결제하기</router-link>
        </div>
        <!-- 문의하기 클릭 시 모달 -->
        <div class="work-inquiry-modal" v-bind:class="{ active: inquiryActive }">
            <div class="overlay" @click="toggleInquiry"></div>
            <div class="work-inquiry-modal-inner">
                <div class="inquiry-form">
                    <router-link to="tel:010-1234-5678" class="f-14-700"><img src="@/assets/image/call.png" alt="전화 문의" />전화 문의</router-link>
                    <router-link to="#" class="f-14-700"><img src="@/assets/image/talk.png" alt="카카오톡 문의" />카카오톡 문의</router-link>
                </div>
                <div class="work-inquiry-modal-close f-16-700" @click="toggleInquiry">다음에 하기</div>
            </div>
        </div>
    </div>
</template>
