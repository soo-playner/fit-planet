<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'FindID_Step1',
        components : {
            JoinCurrent
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container findID_Step1">
        <div class="member_container_inner mob-inner">
            <div class="findID_form">
                <div class="form-group">
                    <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호(-제외)">
                </div>
            </div>
            <router-link to="/FindID_Step2" class="next-step-btn f-16-700">인증번호 요청</router-link>
        </div>
    </div>
</template>