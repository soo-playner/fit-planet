<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import PlaceData from "@/components/place/PlaceData";
import Filter from "@/components/modal/filter/Filter.vue";

const store = useStore();
const placeInfo = ref(store.state.place.places);
const isShowFilter = ref(false);
</script>

<template>
    <div class="placeList_container main-layout">
        <div class="placeList_container_inner mob-inner">
            <ul class="filter-scroll">
                <li>거리순<span class="arrow"></span></li>
                <li @click="isShowFilter = true"><img src="@/assets/image/filter.png" alt="필터" /></li>
                <li>수강기간</li>
                <li>플레이스 타입</li>
                <li>기타옵션</li>
                <li>운동기구</li>
                <li>편의시설</li>
            </ul>
            <PlaceData v-for="placeListItem in placeInfo" :key="placeListItem" :data="placeListItem" />
            <router-link to="/" class="map-move f-14-700"><img src="@/assets/image/quick-menu-icon-2-on.png" alt="" />지도로 보기</router-link>
        </div>
    </div>
    <Filter
        v-if="isShowFilter"
        :close="
            () => {
                isShowFilter = false;
            }
        "
    />
</template>
