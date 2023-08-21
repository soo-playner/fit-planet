<script setup>

const recentRegion = [ '서울시 강남구', '서울시 강남구', '서울시 강남구', '서울시 강남구', '서울시 강남구', '서울시 강남구' ]

</script>

<template>
    <div class="region_container main-layout">
        <div class="region_container_inner mob-inner">
            <div class="form-group2">
                <input type="text" name="" id="" placeholder="원하는 지역을 검색하세요">
                <div class="search"></div>
            </div>
            <!-- 나의 즐겨찾기 -->
            <div class="favorites">
                <div class="txt-box">
                    <p class="f-16-700">나의 즐겨찾기</p>
                    <span class="f-14-400">최대 2개까지 지정할 수 있어요.</span>
                </div>
                <div class="add-box">
                    <ul class="add-region-ul">
                        <li>
                            <div class="close"></div>
                            <div class="region-list">
                                <img src="@/assets/image/quick-menu-icon-2-on.png" alt="지역">
                                <p class="f-16-700">서울시 강남구</p>
                            </div>
                        </li>
                    </ul>
                    <button class="add-box-btn"><span></span></button>
                </div>
            </div>
            <!-- 최근 검색한 지역 -->
            <div class="recent-search-region">
                <div class="txt-box">
                    <p class="f-16-700">최근 검색한 지역</p>
                    <span>모두 지우기</span>
                </div>
                <ul class="recent-search-region-ul">
                    <li v-for="recentRegionItem in recentRegion" :key="recentRegionItem">
                        <p>{{ recentRegionItem }}</p>
                        <button class="delete-btn"></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>