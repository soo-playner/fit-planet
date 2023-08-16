<script setup>
import EventNews_Tab from "./EventNews_Tab.vue";
import NewsList from "@/components/community/NewsList.vue";
import EventList from "@/components/community/EventList.vue";
import { ref } from "vue";

const tabs = ["공지", "이벤트"];
const targetTab = ref("공지");
const newsListArray = ref([
    { title: "개인정보처리방침 개정 안내1", date: "2023.07.01" },
    { title: "개인정보처리방침 개정 안내2", date: "2023.07.01" },
    { title: "개인정보처리방침 개정 안내3", date: "2023.07.01" },
    { title: "개인정보처리방침 개정 안내4", date: "2023.07.01" },
    { title: "개인정보처리방침 개정 안내5", date: "2023.07.01" },
]);
const eventListArray = ref([
    { image: require("@/assets/image/eventTest01.png") },
    { image: require("@/assets/image/eventTest02.png") },
    { image: require("@/assets/image/eventTest03.png") },
    { image: require("@/assets/image/eventTest04.png") },
    { image: require("@/assets/image/eventTest05.png") },
]);

const changeTab = (newTab) => {
    targetTab.value = newTab;
};
</script>

<template>
    <div class="EventNews_container main-layout">
        <EventNews_Tab :tabs="tabs" :targetTab="targetTab" @tabChange="changeTab"></EventNews_Tab>
        <div class="EventNews_container_inner mob-inner">
            <ul class="news-list" v-if="targetTab === '공지'">
                <NewsList v-for="newsItem in newsListArray" :key="newsItem.title" :data="newsItem"></NewsList>
            </ul>
            <ul class="event-list" v-if="targetTab === '이벤트'">
                <EventList v-for="eventItem in eventListArray" :key="eventItem.image" :data="eventItem"></EventList>
            </ul>
        </div>
    </div>
</template>
