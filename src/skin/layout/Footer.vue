<script setup>
    const quick = [
        { link : '/' , title : '홈' },
        { link : '/discover' , title : '발견' },
        { link : '/place/review' , title : '후기' },
        { link : '/wish' , title : '찜' },
    ]
</script>

<template>
    <footer class="at-footer">
        <div class="at-footer-inner">
            <ul>
                <li v-for="(quickItem, index) in quick" :key="quickItem">
                    <router-link :to=quickItem.link>
                        <div 
                            :class="[`quick-menu-icon quick-menu-icon-${index + 1}`]">
                        </div>
                        <p class="f-12-400">{{ quickItem.title }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
