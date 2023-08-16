<script>
    // 경로 - /find/id/step2
    export default {
        name : 'FindID_Step2',
    }
</script>

<template>
    <div class="member_container id-step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="tel" name="mb_phone" id="mb_phone" value="01012345678">
            </div>
            <div class="form-group">
                <input type="text" name="pass_num" id="pass_num" placeholder="726506">
                <span class="pass-time f-12-400">02:55</span>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner">인증 완료</button>
    </div>
</template>