<script setup>
import {defineProps} from 'vue'

const { InquiryClose } = defineProps({
    InquiryClose : Function,
});
</script>

<template>
    <div class="work-inquiry-modal">
        <div class="overlay" @click="InquiryClose"></div>
        <div class="work-inquiry-modal-inner">
            <div class="inquiry-form">
                <router-link to="tel:010-1234-5678" class="f-14-500"><img src="@/assets/image/call.png" alt="전화 문의" />트레이너에게 전화</router-link>
                <router-link to="#" class="f-14-500"><img src="@/assets/image/message.png" alt="카카오톡 문의" />트레이너에게 카톡</router-link>
            </div>
            <button class="work-inquiry-modal-close f-16-500" @click="InquiryClose">다음에 하기</button>
        </div>
    </div>
</template>