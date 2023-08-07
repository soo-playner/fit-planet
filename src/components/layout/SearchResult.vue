<script>
    import PlaceData from '../data/PlaceData';

    export default {
        name : 'SearchResult', 
        components : {
            PlaceData
        }
    }
</script>

<template>
    <div class="SearchResult_container main-layout">
        <div class="SearchResult_container_inner mob-inner">
            <!-- 검색창 -->
            <div class="search-input">
                <div class="form-group">
                    <input type="text" id="search" name="search" placeholder="지역, 지하철역, 플레이스, 트레이너">
                    <div class="search-btn"></div>
                </div>
            </div>
            <!-- 플레이스/트레이너 탭, 필터 -->
            <div class="tab-and-filter">
                <ul class="search-tab">
                    <li class="active"><button>플레이스</button></li>
                    <li><button>트레이너</button></li>
                </ul>
                <ul class="filter-scroll">
                    <li>거리순<span class="arrow"></span></li>
                    <li><img src="@/assets/image/filter.png" alt="필터"></li>
                    <li>수강기간</li>
                    <li>플레이스 타입</li>
                    <li>기타옵션</li>
                    <li>운동기구</li>
                    <li>편의시설</li>
                </ul>
            </div>
            <PlaceData v-for="placeListItem in $store.state.placeInfo" :key="placeListItem" :data="placeListItem"></PlaceData>
        </div>
    </div>
</template>