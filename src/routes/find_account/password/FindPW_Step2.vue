<script>
    // 경로 - /find/pw/step2
    export default {
        name : 'FindPW_Step2',
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container pw-step2">
        <div class="member_container_inner mob-inner">
            <div class="form-group">
                <input type="tel" id="mb_phone" name="mb_phone" value="01012345678">
            </div>
            <div class="form-group">
                <input type="text" id="pass_num" name="pass_num" placeholder="726506">
                <span class="pass-time f-12-400">02:55</span>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner" @click="$router.push('/pw/reset')">인증 완료</button>
    </div>
</template>