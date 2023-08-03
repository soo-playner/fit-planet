<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination";

export default {
  name: "placeDetail",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption1: {
        slidesPerView: 1,
        pagination: true,
        parallax: true,
        speed: 700,
        loop: true,
      },
      swiperOption2: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      inquiryActive: false,
      ticket: [
        { name: "1회 체험권", cost: "59,000원", totalCost: "59,000원" },
        { name: "1개월 수강권", cost: "59,000원", totalCost: "59,000원" },
        { name: "3개월 수강권", cost: "49,000원", totalCost: "147,000원", discount: "30,000원 할인" },
      ],
      machine: [{ title: "프리웨이트" }, { title: "하체" }, { title: "가슴" }],
      machineTag: [
        ["파워렉", "스미스머신", "치닝디핑", "케이블 머신"],
        ["브이스쿼트", "힙 어브덕션", "핵스쿼트 머신", "레그프레스", "파워 레그프레스 머신", "레그 익스텐션 머신", "레그 컬 머신"],
        ["인클라인 벤치", "디클라인 벤치", "펙덱 머신", "체스트 프레스 머신"],
      ],
      machineTag1: [{ id: "파워랙" }, { id: "스미스머신" }, { id: "치닝디핑" }, { id: "케이블 머신" }],
      machineTag2: [
        { id: "브이스쿼트" },
        { id: "힙 어브덕션" },
        { id: "핵스쿼트 머신" },
        { id: "레그프레스" },
        { id: "파워 레그프레스 머신" },
        { id: "레그 익스텐션 머신" },
        { id: "레그 컬 머신" },
      ],
      machineTag3: [{ id: "인클라인 벤치" }, { id: "디클라인 벤치" }, { id: "펙덱 머신" }, { id: "체스트 프레스 머신" }],
    };
  },
  methods: {
    toggleInquiry: function () {
      this.inquiryActive = !this.inquiryActive;
    },
  },
};
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
            <p class="f-18-700">위즈짐</p>
            <span class="f-12-400 location"><img src="@/assets/image/place-map.png" alt="위치" />서울 강남구 삼성로86길 11 거봉INC 3층</span>
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
          <ul class="place-info-filter">
            <li>24시</li>
            <li>P.T</li>
            <li>그룹 P.T</li>
            <li>골프</li>
          </ul>
        </div>
        <div class="right-row">
          <div class="heart"><img src="@/assets/image/heart-off.png" alt="찜하기" /></div>
          <div class="share"><img src="@/assets/image/share.png" alt="공유하기" /></div>
        </div>
      </div>
      <!-- 플레이스 상품 -->
      <Swiper class="place-ticket" v-bind="swiperOption2">
        <SwiperSlide v-for="ticketItem in ticket" :key="ticketItem">
          <div class="f-14-400">{{ ticketItem.name }}</div>
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
            <SwiperSlide v-for="reviewItem in 4" :key="reviewItem">
              <div class="review-write-info">
                <p class="review-writer f-14-400">위즈위즈<span class="review-date f-12-400">3개월 전</span></p>
                <div class="starBox review-writer-scope">
                  <div class="star" v-for="starItem in 4" :key="starItem"><img src="@/assets/image/scope.png" alt="별점" /></div>
                  <div class="star"><img src="@/assets/image/empty_scope.png" alt="별점" /></div>
                </div>
              </div>
              <div class="review-content f-12-400">
                운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.
              </div>
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
          <div>
            <span>휴관일</span>
            <p>매달 첫째주 일요일, 매달 셋째주 일요일</p>
          </div>
        </div>
      </div>
      <!-- 편의시설 -->
      <div class="place-convenience">
        <div class="place-convenience-tit f-14-400 place-each-tit">편의시설</div>
        <div class="free">
          <div class="free-tit f-12-400">무료</div>
          <ul class="free-list">
            <li>
              <div class="free-icon free-icon-1"></div>
              <p>수건</p>
            </li>
            <li>
              <div class="free-icon free-icon-2"></div>
              <p>샤워실</p>
            </li>
            <li>
              <div class="free-icon free-icon-3"></div>
              <p>Wi-fi</p>
            </li>
            <li>
              <div class="free-icon free-icon-4"></div>
              <p>체형분석</p>
            </li>
            <li>
              <div class="free-icon free-icon-5"></div>
              <p>체성분검사</p>
            </li>
            <li>
              <div class="free-icon free-icon-6"></div>
              <p>주차장</p>
            </li>
            <li>
              <div class="free-icon free-icon-7"></div>
              <p>사우나</p>
            </li>
            <li>
              <div class="free-icon free-icon-8"></div>
              <p>찜질방</p>
            </li>
          </ul>
        </div>
        <div class="pay">
          <div class="pay-tit f-12-400">유료</div>
          <ul class="free-list">
            <li>
              <div class="pay-icon pay-icon-1"></div>
              <p class="pay-target">개인 락커</p>
              <p class="pay-expense">월 10,000원</p>
            </li>
            <li>
              <div class="pay-icon pay-icon-2"></div>
              <p class="pay-target">운동복</p>
              <p class="pay-expense">월 10,000원</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 운동 기구 -->
      <div class="place-machine">
        <div class="place-machine-tit f-14-400 place-each-tit">운동 기구</div>
        <div class="place-machine-list" v-for="(machineItem, idx) in machine" :key="idx">
          <span class="place-machine-tit f-14-400">{{ machineItem.title }}</span>
          <ul>
            <li v-for="(data, _idx) in machineTag[idx]" :key="_idx">{{ data }}</li>
            <!-- <li>파워랙</li>
                        <li>스미스머신</li>
                        <li>치닝디핑</li>
                        <li>케이블 머신</li> -->
          </ul>
        </div>
        <router-link to="/PlaceMachine" class="place-machine-all-btn f-14-400">운동기구 모두 보기</router-link>
      </div>
      <!-- 1:1 트레이너 -->
      <div class="place-trainer">
        <div class="place-trainer-tit f-14-400 place-each-tit">1:1 트레이너<span class="place-trainer-count f-12-400">6</span></div>
        <Swiper class="place-trainer-list" v-bind="swiperOption2">
          <SwiperSlide>
            <div class="trainer-info">
              <span class="rank">센터장</span>
              <div>
                <p><span>김위즈</span>트레이너</p>
                <span class="arrow"></span>
              </div>
            </div>
            <div class="trainer-comment">
              “김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="trainer-info">
              <span class="rank fake"></span>
              <div>
                <p><span>김위즈</span>트레이너</p>
                <span class="arrow"></span>
              </div>
            </div>
            <div class="trainer-comment">
              “김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="trainer-info">
              <span class="rank fake"></span>
              <div>
                <p><span>김위즈</span>트레이너</p>
                <span class="arrow"></span>
              </div>
            </div>
            <div class="trainer-comment">
              “김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"
            </div>
          </SwiperSlide>
        </Swiper>
        <router-link to="/PlaceTrainer" class="place-trainer-all-btn f-14-400">트레이너 모두 보기</router-link>
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
      <router-link to="/PlaceMachine_Choice" class="work-choice f-16-700">운동 선택하기</router-link>
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
