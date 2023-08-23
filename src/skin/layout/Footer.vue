<script setup>
const quick1 = ["/", "Class", "NotClass"];
const quick2 = ["/Place/List", "/Place/Detail"];
</script>

<template>
    <footer class="at-footer">
        <div class="at-footer-inner">
            <ul>
                <li>
                    <router-link :to="quick1[0]">
                        <div class="quick-menu-icon quick-menu-icon-1"></div>
                        <p class="f-12-400">홈</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="quick2[0]">
                        <div class="quick-menu-icon quick-menu-icon-2"></div>
                        <p class="f-12-400">발견</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="quick2[1]">
                        <div class="quick-menu-icon quick-menu-icon-3"></div>
                        <p class="f-12-400">후기</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/wish">
                        <div class="quick-menu-icon quick-menu-icon-4"></div>
                        <p class="f-12-400">찜</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
