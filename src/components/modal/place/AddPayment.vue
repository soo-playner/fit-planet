<script setup>
import {defineProps} from 'vue'

const {addPaymentFnc} = defineProps({
    addPaymentFnc : Function
})
</script>

<template>
    <div class="member_alert addPayment-modal">
        <div class="overlay" @click="addPaymentFnc"></div>
        <div class="member_alert_inner mob-inner addPayment-modal-inner">
            <div class="txt-box f-18-700">
                <p>진행하던 프로그램을</p>
                <p>추가 결제할까요?</p>
            </div>
            <div class="bott-btn">
                <button class="btn1" @click="addPaymentFnc">취소</button>
                <button class="btn1">결제하러 가기</button>
            </div>
        </div>
    </div>
</template>