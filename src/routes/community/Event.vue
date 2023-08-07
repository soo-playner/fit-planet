<script>
    import EventNews_Tab from './EventNews_Tab.vue';
    import EventList from '../../components/data/EventList';

    export default {
        name : 'Event',
        components : {
            EventNews_Tab, EventList
        },
        data(){
            return {
                EventListArray : [
                    { image : require('@/assets/image/eventTest01.png') },
                    { image : require('@/assets/image/eventTest02.png') },
                    { image : require('@/assets/image/eventTest03.png') },
                    { image : require('@/assets/image/eventTest04.png') },
                    { image : require('@/assets/image/eventTest05.png') },
                ]
            }
        }
    }
</script>

<template>
    <EventNews_Tab></EventNews_Tab>
    <div class="Event_container">
        <div class="Event_container_inner mob-inner">
            <ul class="event-list">
                <EventList v-for="(EventListItem, idx) in EventListArray" :key="idx" :data="EventListItem"></EventList>
            </ul>
        </div>
    </div>
</template>