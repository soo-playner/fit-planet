<script setup>
//import EventNews_Tab from "./components/EventNews_Tab";
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

//
import { onMounted } from "vue";
import useTabAnimation from "@/composables/useTabAnimation";

const { li, nav, tabContentWrap, clickLiFnc, touchStart, touchEnd } = useTabAnimation();
const eventNewsList = ["공지", "이벤트"];

onMounted(() => {
    clickLiFnc();
});
</script>

<template>
    <div class="EventNews_container main-layout slide-wrap">
        <div class="EventNews_container_inner mob-inner slide-wrap-inner">
            <ul class="tab-list slide-ul">
                <li ref="li" class="tab-li slide-li active" v-for="eventNewsItem in eventNewsList" :key="eventNewsItem" @click="clickLiFnc">
                    {{ eventNewsItem }}
                </li>
                <span ref="nav" class="nav-indicator"></span>
            </ul>
            <!-- <EventNews_Tab :tabs="tabs" :targetTab="targetTab" @tabChange="changeTab"/> -->
            <div class="tabContentWrap" ref="tabContentWrap" @touchstart="touchStart" @touchend="touchEnd">
                <ul class="news-list">
                    <NewsList v-for="newsItem in newsListArray" :key="newsItem.title" :data="newsItem"></NewsList>
                </ul>
                <ul class="event-list">
                    <EventList v-for="eventItem in eventListArray" :key="eventItem.image" :data="eventItem"></EventList>
                </ul>
            </div>
        </div>
    </div>
</template>
