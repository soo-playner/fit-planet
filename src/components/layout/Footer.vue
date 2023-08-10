<script>
    export default {
        name : 'Footer',
        data() {
            return {
                quick1 : ['/', 'Class', 'NotClass'],
                quick2 : ['/Place/List', '/Place/Detail', ]
            }
        }
    }
</script>

<template>
    <footer class="at-footer">
        <div class="at-footer-inner">
            <ul>
                <li>
                    <router-link to="/">
                        <div class="quick-menu-icon quick-menu-icon-1"></div>
                        <p class="f-12-400">홈</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div class="quick-menu-icon quick-menu-icon-2"></div>
                        <p class="f-12-400">발견</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div class="quick-menu-icon quick-menu-icon-3"></div>
                        <p class="f-12-400">후기</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div class="quick-menu-icon quick-menu-icon-4"></div>
                        <p class="f-12-400">찜</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>