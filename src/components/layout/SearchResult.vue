<script>
    export default {
        name : 'SearchResult'
    }
</script>

<template>
    <div class="SearchResult_container">
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
                    <li><button>플레이스</button></li>
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
            <div class="placeList-form" v-for="placeListItem in 4" :key="placeListItem">
                <div class="top-column">
                    <div class="placeList-txt-box">
                        <div class="placeList-info-1">
                            <div class="placeList-detail">
                                <p class="f-16-700">위즈짐</p>
                                <div>
                                    <div class="star">★</div>
                                    <p class="f-12-400">
                                        <span>4.3</span>
                                        <span>(12)</span>
                                    </p>
                                </div>
                            </div>
                            <div class="placeList-add f-12-400">서울 강남구 삼성로86길 11</div>
                        </div>
                        <ul class="placeList-info-2">
                            <li>24시</li>
                            <li>P.T</li>
                            <li>그룹 P.T</li>
                            <li>골프</li>
                        </ul>
                    </div>
                    <div class="placeList-img-box"></div>
                </div>
                <div class="bott-column review">
                    <p class="f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</p>
                </div>
            </div>
        </div>
    </div>
</template>