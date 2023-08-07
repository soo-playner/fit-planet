<script>
    import EventNews_Tab from './EventNews_Tab.vue';

    export default {
        name : 'Event',
        components : {
            EventNews_Tab
        }
    }
</script>

<template>
    <EventNews_Tab></EventNews_Tab>
    <div class="Event_container">
        <div class="Event_container_inner mob-inner">
            <ul class="event-list">
                <li v-for="eventItem in 6" :key="eventItem"></li>
            </ul>
        </div>
    </div>
</template>