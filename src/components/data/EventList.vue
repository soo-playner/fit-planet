<script>
    export default {
        name : 'EventList',
        props : {
            data : Object
        }
    }
</script>

<template>
    <li><img :src="data.image" alt="{{ data.image }}"></li>
</template>