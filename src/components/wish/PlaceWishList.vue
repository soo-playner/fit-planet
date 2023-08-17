<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        data : Object,
    });
</script>

<template>
    <li class="place-wish-li wish-li">
        <div class="img-box">
            <img class="location" src="@/assets/image/quick-menu-icon-2-on.png" alt="위치">
        </div>
        <div class="txt-box">
            <div class="info">
                <div class="info-detail">
                    <div class="f-14-700 center-name">{{ props.data.center }}</div>
                    <div class="scope">
                        <div class="starBox">
                            <div class="star">★</div>
                        </div>
                        <p class="f-12-400">{{ props.data.scope }}<span>({{ props.data.totalScope }})</span></p>
                    </div>
                    <span class="f-12-400 location">{{ props.data.location }}</span>
                </div>
                <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="찜"></div>
            </div>
            <button class="pay-btn f-14-700">결제하기</button>
        </div>
    </li>
</template>