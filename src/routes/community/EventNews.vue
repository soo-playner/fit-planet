<script>
    import EventNews_Tab from './EventNews_Tab';
    import NewsList from '../../components/data/NewsList';
    import EventList from '../../components/data/EventList';

    export default {
        name : 'EventNews',
        components : {
            EventNews_Tab, NewsList, EventList
        },
        data(){
            return {
                NewsListArray : [
                    { title : '개인정보처리방침 개정 안내1', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내2', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내3', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내4', date : '2023.07.01' },
                    { title : '개인정보처리방침 개정 안내5', date : '2023.07.01' },
                ],
                EventListArray : [
                    { image : require('@/assets/image/eventTest01.png') },
                    { image : require('@/assets/image/eventTest02.png') },
                    { image : require('@/assets/image/eventTest03.png') },
                    { image : require('@/assets/image/eventTest04.png') },
                    { image : require('@/assets/image/eventTest05.png') },
                ],
                tabs : ['공지', '이벤트'],
                targetTab : '공지'
            }
        }
    }
</script>

<template>
    <div class="EventNews_container main-layout">
        <EventNews_Tab :tabs="tabs" :targetTab="targetTab" @tabChange="targetTab = $event"></EventNews_Tab>
        <div class="EventNews_container_inner mob-inner">
            <ul class="news-list" v-if="targetTab == '공지'">
                <NewsList v-for="NewsListItem in NewsListArray" :key="NewsListItem" :data="NewsListItem"></NewsList>
            </ul>
            <ul class="event-list" v-if="targetTab == '이벤트'">
                <EventList v-for="EventListItem in EventListArray" :key="EventListItem" :data="EventListItem"></EventList>
            </ul>
        </div>
    </div>
</template>