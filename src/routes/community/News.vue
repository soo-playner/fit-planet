<script>
    import EventNews_Tab from './EventNews_Tab.vue';

    export default {
        name : 'News',
        components : {
            EventNews_Tab
        }
    }
</script>

<template>
    <EventNews_Tab></EventNews_Tab>
    <div class="News_container">
        <div class="News_container_inner mob-inner">
            <ul class="news-list">
                <li v-for="newsItem in 6" :key="newsItem">
                    <div class="txt-box">
                        <p class="f-14-400">개인정보처리방침 개정 안내</p>
                        <span class="f-12-400">2023.07.01</span>
                    </div>
                    <div class="arrow"></div>
                </li>
            </ul>
        </div>
    </div>
</template>