<script>
    export default {
        name : 'Search',
        data(){
            return {
                recentWork : ['위즈짐', '클라짐', '김위즈 트레이너', '김클라 트레이너'],
                recentWord : ['위즈짐', '삼성역', '김위즈 트레이너', '클라짐', '강남역', '김클라 트레이너', '대치동', '청담동']
            }
        }
    }
</script>

<template>
    <div class="Search_container">
        <div class="Search_container_inner mob-inner">
            <!-- 검색창 -->
            <div class="search-input">
                <div class="form-group">
                    <input type="text" id="search" name="search" placeholder="지역, 지하철역, 플레이스, 트레이너">
                    <button class="search-btn"></button>
                </div>
            </div>
            <!-- 최근 본 운동 -->
            <div class="recent-work">
                <div class="recent-work-tit f-16-700"><p>최근 본 운동</p><button class="f-12-400">모두 지우기</button></div>
                <ul class="recent-work-ul">
                    <li v-for="recentWorkItem in recentWork" :key="recentWorkItem">
                        <div class="center-img"></div>
                        <p>{{ recentWorkItem }}</p>
                    </li>
                </ul>
            </div>
            <!-- 최근 검색어 -->
            <div class="recent-search-word search-layout">
                <div class="recent-search-word-tit f-16-700 search-layout-tit"><p>최근 검색어</p><button class="f-12-400">모두 지우기</button></div>
                <ul class="recent-search-word-ul search-layout-ul">
                    <li v-for="recentWordItem in recentWord" :key="recentWordItem">
                        <p>{{ recentWordItem }}</p>
                        <button class="delete-btn"></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>