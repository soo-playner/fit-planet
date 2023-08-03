<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'FindPW_Step2',
        components : {
            JoinCurrent
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container FindPW_Step2">
        <div class="member_container_inner mob-inner">
            <div class="findPW_form">
                <div class="form-group">
                    <input type="tel" id="mb_phone" name="mb_phone" value="01012345678">
                </div>
                <div class="form-group">
                    <input type="tel" id="mb_phone" name="mb_phone" placeholder="726506">
                    <span class="pass-time f-12-400">02:55</span>
                </div>
            </div> 
            <router-link to="/PW_Reset" class="next-step-btn f-16-700">인증 완료</router-link>
        </div>
    </div>
</template>