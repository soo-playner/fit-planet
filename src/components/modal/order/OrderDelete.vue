<script setup>
    import {defineProps} from 'vue'

    const {confirmDeletion} = defineProps({
        confirmDeletion: Function
    })
</script>

<template>
    <div class="order-delete-modal member_alert">
        <div class="overlay" @click="confirmDeletion"></div>
        <div class="order-delete-modal-inner mob-inner member_alert_inner">
            <div class="txt-box1">
                <p class="f-16-500 b-txt">주문내역을 삭제할까요?</p>
                <span class="f-12-400">
                    <span>주문내역을 삭제할 경우</span>
                    <span>운동기록도 함께 사라져요.</span>
                    <span>삭제 후에는 복구할 수 없습니다.</span>
                </span>
            </div>
            <div class="bott-btn">
                <button class="btn1" @click="confirmDeletion">취소</button>
                <button class="btn1">삭제</button>
            </div>
        </div>
    </div>
</template>