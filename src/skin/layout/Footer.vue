<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["slideType"]);
const quick = [
    { link: "/", title: "홈" },
    { link: "/discover", title: "발견" },
    { link: "/review", title: "후기" },
    { link: "/wish", title: "찜" },
];

const exceptPage = ["/place/pay"];
</script>

<template>
    <footer class="at-footer" v-if="!exceptPage.includes($route.fullPath)">
        <div class="at-footer-inner">
            <ul>
                <li v-for="(quickItem, index) in quick" :key="quickItem">
                    <router-link :to="quickItem.link" @click="emit('slideType', index)">
                        <div :class="[`quick-menu-icon quick-menu-icon-${index + 1}`]"></div>
                        <p class="f-12-400">{{ quickItem.title }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
