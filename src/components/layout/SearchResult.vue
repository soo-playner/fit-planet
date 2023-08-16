<script setup>
import PlaceData from "@/data/place/PlaceData";
import TrainerData from "@/data/place/TrainerData";
import SearchTab from "./Search_Tab";
import { ref } from "vue";

const tabs = ["플레이스", "트레이너"];
const targetTab = ref("플레이스");
const changeTab = (tabItem) => {
    targetTab.value = tabItem;
};
</script>

<template>
    <div class="SearchResult_container main-layout">
        <div class="SearchResult_container_inner mob-inner">
            <!-- 검색창 -->
            <div class="search-input">
                <div class="form-group2">
                    <input type="text" id="search" name="search" placeholder="지역, 지하철역, 플레이스, 트레이너" />
                    <button class="search-btn"></button>
                </div>
            </div>
            <!-- 플레이스/트레이너 탭, 필터 -->
            <div class="tab-and-filter">
                <ul class="search-tab">
                    <SearchTab :tabs="tabs" :targetTab="targetTab" @tabChange="changeTab"></SearchTab>
                </ul>
                <ul class="filter-scroll">
                    <li>거리순<span class="arrow"></span></li>
                    <li><img src="@/assets/image/filter.png" alt="필터" /></li>
                    <li>수강기간</li>
                    <li>플레이스 타입</li>
                    <li>기타옵션</li>
                    <li>운동기구</li>
                    <li>편의시설</li>
                </ul>
            </div>
            <!-- 탭에 맞는 컴포넌트 노출 -->
            <PlaceData v-for="placeListItem in $store.state.placeInfo" :key="placeListItem" :data="placeListItem" v-if="targetTab === '플레이스'"> </PlaceData>
            <TrainerData v-for="trainerListItem in $store.state.trainerInfo" :key="trainerListItem" :data="trainerListItem" v-if="targetTab === '트레이너'"> </TrainerData>
        </div>
    </div>
</template>
