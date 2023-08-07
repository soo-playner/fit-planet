<script>
    export default {
        name : 'EventNews_Tab',
    }
</script>

<template>
    <div class="EventNewsTab_container">
        <div class="EventNewsTab_container_inner mob-inner">
            <ul class="tab-list">
                <li :class="{ active : $route.name === 'News' }">공지</li>
                <li :class="{ active : $route.name === 'Event' }">이벤트</li>
            </ul>
        </div>
    </div>
</template>