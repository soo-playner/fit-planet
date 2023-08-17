<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        data : Object,
    });
</script>

<template>
    <li class="trainer-wish-li wish-li">
        <div class="img-box"></div>
        <div class="txt-box">
            <div class="info">
                <div class="info-detail">
                    <div class="f-14-700 trainer-name">{{ props.data.name }} 트레이너</div>
                    <div class="scope">
                        <div class="starBox">
                            <div class="star">★</div>
                        </div>
                        <p class="f-12-400">{{ props.data.scope }}<span>({{ props.data.totalScope }})</span></p>
                    </div>
                </div>
                <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="찜"></div>
            </div>
            <button class="pay-btn f-14-700">결제하기</button>
        </div>
    </li>
</template>