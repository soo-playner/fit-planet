<script>
    export default {
        name : 'ReviewList', 
        props : {
            data : Object
        }
    }
</script>

<template>
    <li>
        <div class="center-img"></div>
        <div class="txt-box">
            <div class="writer-info">
                <p>{{ data.write }}</p>
                <div class="starBox">
                    <div class="star" v-for="star in 4" :key="star">★</div>
                    <div class="star">☆</div>
                </div>
            </div>
            <div class="review-con">{{ data.comment }}</div>
            <div class="trainer-info"><span>{{ data.name }}</span>트레이너</div>
        </div>
    </li>
</template>