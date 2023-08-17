<script setup></script>

<template>
    <div class="alert-manage-modal member_alert" :class="{ active : alertCurrent }">
        <div class="overlay" @click="alertCurrentFnc"></div>
        <div class="alert-manage-modal-inner mob-inner member_alert_inner">
            <div class="manage-tit"><p class="f-16-700">알림 관리</p><button class="close" @click="alertCurrentFnc"></button></div>
            <ul class="manage-list">
                <li>
                    <input type="radio" id="alert_1_1" name="alert_1" value="모두 읽은 상태로 표시">
                    <label for="alert_1_1">
                        모두 읽은 상태로 표시
                        <span class="outSide">
                            <span></span>
                        </span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="alert_1_2" name="alert_1" value="모두 삭제하기">
                    <label for="alert_1_2">
                        모두 삭제하기
                        <span class="outSide">
                            <span></span>
                        </span>
                    </label>
                </li>
            </ul>
            <button class="bott-btn f-16-700" @click="alertCurrentFnc">확인</button>
        </div>
    </div>
</template>