<script>
    import reviewTab from './Review_Tab';

    export default {
        name : 'MyReview',
        components : {
            reviewTab
        },
    }
</script>

<template>
    <div class="MyReview_container main-layout">
        <div class="MyReview_container_inner mob-inner">
            <reviewTab></reviewTab>
        </div>
    </div>
</template>