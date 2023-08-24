<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import useTabAnimation from "@/composables/useTabAnimation";
import PlaceData from "@/components/place/PlaceData";
import TrainerData from "@/components/place/TrainerData";

const { li, nav, tabContentWrap, clickLiFnc } = useTabAnimation();
const filterList = ["플레이스", "트레이너"];

onMounted(() => {
    clickLiFnc();
});

const store = useStore();
const placeInfo = ref(store.state.place.places);
const trainerInfo = ref(store.state.place.places);
</script>

<template>
    <div class="discover_container slide-wrap main-layout">
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.085678942443!2d127.05573197635974!3d37.50589732760229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca414371b94b3%3A0xbfc791d5b09e4135!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHroZw4Nuq4uCAxMQ!5e0!3m2!1sko!2skr!4v1692847666596!5m2!1sko!2skr"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div ref="discover" class="discover_container_inner mob-inner slide-wrap-inner">
            <ul class="discover-filter-ul slide-ul">
                <li ref="li" class="discover-filter-li slide-li f-14-700 active" v-for="filterItem in filterList" :key="filterItem" @click="clickLiFnc">
                    {{ filterItem }}
                </li>
                <span ref="nav" class="nav-indicator"></span>
            </ul>

            <div ref="tabContentWrap" class="tabContentWrap">
                <div class="place-discover-list">
                    <ul class="filter-scroll">
                        <li>거리순<span class="arrow"></span></li>
                        <li><img src="@/assets/image/filter.png" alt="필터" /></li>
                        <li>수강기간</li>
                        <li>플레이스 타입</li>
                        <li>기타옵션</li>
                        <li>운동기구</li>
                        <li>편의시설</li>
                    </ul>
                    <PlaceData v-for="placeListItem in placeInfo" :key="placeListItem" :data="placeListItem" />
                </div>
                <div class="trainer-discover-list">
                    <ul class="filter-scroll">
                        <li>거리순<span class="arrow"></span></li>
                        <li><img src="@/assets/image/filter.png" alt="필터" /></li>
                        <li>수강횟수</li>
                        <li>가격</li>
                        <li>성별</li>
                        <li>플레이스 타입</li>
                        <li>편의시설</li>
                    </ul>
                    <TrainerData v-for="trainerListItem in trainerInfo" :key="trainerListItem" :data="trainerListItem" />
                </div>
            </div>
        </div>
    </div>
</template>
