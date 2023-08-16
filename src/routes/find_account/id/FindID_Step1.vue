<script>
    // 경로 - /find/id/step1
    export default {
        name : 'FindID_Step1',
    }
</script>

<template>
    <div class="member_container id-step1">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호(-제외)">
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner">인증번호 요청</button>
    </div>
</template>