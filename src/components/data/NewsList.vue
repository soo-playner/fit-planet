<script>
    export default {
        name : 'NewsList',
        props : {
            data : Object
        }
    }
</script>

<template>
    <li>
        <div class="txt-box">
            <p class="f-14-400">{{ data.title }}</p>
            <span class="f-12-400">{{ data.date }}</span>
        </div>
        <div class="arrow"></div>
    </li>
</template>