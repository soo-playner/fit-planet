<script setup>
    import { defineProps } from 'vue'

    const { confirmManage } = defineProps({
        confirmManage: Function
    })
</script>

<template>
    <div class="alert-manage-modal member_alert comm_modal_layout">
        <div class="overlay" @click="confirmManage"></div>
        <div class="alert-manage-modal-inner mob-inner member_alert_inner comm_modal_layout-inner">
            <div class="manage-tit comm_modal_layout_tit">
                <p class="f-16-700">알림 관리</p>
                <button class="close" @click="confirmManage"></button>
            </div>
            <ul class="manage-list comm_modal_layout_tit_list">
                <li>
                    <input type="radio" id="alert_1" name="alert" value="모두 읽은 상태로 표시" checked>
                    <label for="alert_1">
                        모두 읽은 상태로 표시
                        <span class="outSide"></span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="alert_2" name="alert" value="모두 삭제하기">
                    <label for="alert_2">
                        모두 삭제하기
                        <span class="outSide"></span>
                    </label>
                </li>
            </ul>
            <button class="next-step-btn bott-btn f-16-700"  @click="confirmManage">확인</button>
        </div>
    </div>
</template>