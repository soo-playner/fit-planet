<script setup>
import PlaceData from "@/components/place/PlaceData";
import TrainerData from "@/components/place/TrainerData";
import Filter from "@/components/modal/filter/Filter";
import FilterTrainer from "@/components/modal/filter/FilterTrainer";

import { onMounted, ref } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";
import useAjaxRequest from "@/composables/useAjaxRequest";

const { li, nav, tabContentWrap, clickLiFnc } = useTabAnimation();
const { postData } = useAjaxRequest();
const searchArray = ["플레이스", "트레이너"];
const selectTab = ref("플레이스");
const isShowFilter = ref(false);
const resultCount = ref(0);

const submitData = async (type, data) => {
    console.log(data);
    const apiUrl = type === "place" ? "api1" : "api2";
    // const res = await postData(apiUrl, data);
    resultCount.value += 100;
};

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <div class="SearchResult_container main-layout slide-wrap">
        <div class="SearchResult_container_inner mob-inner slide-wrap-inner">
            <!-- 검색창 -->
            <div class="search-input">
                <div class="form-group2">
                    <input type="text" id="search" name="search" placeholder="지역, 지하철역, 플레이스, 트레이너" />
                    <button class="search-btn"></button>
                </div>
            </div>
            <!-- 플레이스/트레이너 탭, 필터 -->
            <div class="tab-and-filter">
                <ul class="search-tab slide-ul">
                    <!-- <SearchTab :tabs="tabs" :targetTab="targetTab" @tabChange="changeTab"></SearchTab> -->
                    <li
                        ref="li"
                        class="search-tab-li slide-li active"
                        v-for="searchItem in searchArray"
                        :key="searchItem"
                        @click="
                            clickLiFnc;
                            selectTab = searchItem;
                        "
                        :data-menu="searchItem"
                    >
                        {{ searchItem }}
                    </li>
                    <span ref="nav" class="nav-indicator"></span>
                </ul>
                <ul class="filter-scroll">
                    <li>거리순<span class="arrow"></span></li>
                    <li @click="isShowFilter = true"><img src="@/assets/image/filter.png" alt="필터" /></li>
                    <li>수강기간</li>
                    <li>플레이스 타입</li>
                    <li>기타옵션</li>
                    <li>운동기구</li>
                    <li>편의시설</li>
                </ul>
            </div>
            <!-- 탭에 맞는 컴포넌트 노출 -->
            <div class="tabContentWrap" ref="tabContentWrap">
                <PlaceData v-for="placeListItem in $store.state.placeInfo" :key="placeListItem" :data="placeListItem" />
                <TrainerData v-for="trainerListItem in $store.state.trainerInfo" :key="trainerListItem" :data="trainerListItem" />
            </div>
        </div>
    </div>
    <Filter
        v-if="isShowFilter && selectTab === '플레이스'"
        :close="
            () => {
                isShowFilter = false;
            }
        "
        :resultCount="resultCount"
        @filterUpdate="submitData('place', $event)"
    />
    <FilterTrainer
        v-if="isShowFilter && selectTab === '트레이너'"
        :close="
            () => {
                isShowFilter = false;
            }
        "
        :resultCount="resultCount"
        @filterUpdate="submitData('trainer', $event)"
    />
</template>
