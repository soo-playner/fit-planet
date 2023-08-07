<script>
    export default {
        name : 'EventNews_Tab',
    }
</script>

<template>
    <div class="EventNewsTab_container">
        <div class="EventNewsTab_container_inner mob-inner">
            <ul class="tab-list">
                <li :class="{ active : $route.name === 'News' }"><button>공지</button></li>
                <li :class="{ active : $route.name === 'Event' }"><button>이벤트</button></li>
            </ul>
        </div>
    </div>
</template>