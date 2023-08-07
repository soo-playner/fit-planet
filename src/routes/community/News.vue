<script>
    import EventNews_Tab from './EventNews_Tab.vue';
    import NewsList from '../../components/data/NewsList';

    export default {
        name : 'News',
        components : {
            EventNews_Tab, NewsList
        },
        data(){
            return {
                NewsListArray : [
                    { title : '개인정보처리방침 개정 안내1', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내2', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내3', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내4', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내5', date : '2023.07.01' },
                ]
            }
        }
    }
</script>

<template>
    <EventNews_Tab></EventNews_Tab>
    <div class="News_container">
        <div class="News_container_inner mob-inner">
            <ul class="news-list">
                <NewsList v-for="(NewsListItem, idx) in NewsListArray" :key="idx" :data="NewsListItem"></NewsList>
            </ul>
        </div>
    </div>
</template>