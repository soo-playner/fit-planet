<script setup>
    import {defineProps} from 'vue'

    const {reportConfirm} = defineProps({
        reportConfirm : Function
    })
</script>

<template>
    <div class="member_alert report-confirm-modal">
        <div class="overlay" @click="reportConfirm"></div>
        <div class="member_alert_inner report-confirm-modal-inner mob-inner">
            <div class="txt-box1">
                <div class="f-16-500 b-txt">알려주셔서 감사합니다!</div>
                <div class="f-12-400">
                    <p>사용자님의 소중한 의견은</p>
                    <p>핏플래닛을 안전하게 유지하는 것에</p>
                    <p>큰 도움이 됩니다.</p>
                </div>
            </div>
            <button @click="reportConfirm">확인</button>
        </div>
    </div>
</template>