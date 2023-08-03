<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';
    import ResetPW_Alert from '../../components/modal/ResetPW_Alert';

    export default {
        name : 'PW_Reset',
        components : {
            JoinCurrent, ResetPW_Alert
        },
        data(){
            return {
                Reset_modalOpen : false
            }
        }
    }
</script>

<template>
    <JoinCurrent/>
    <ResetPW_Alert v-if="Reset_modalOpen" @Reset_modalClose = 'Reset_modalOpen = false'/>
    <div class="member_container PW_Reset">
        <div class="member_container_inner mob-inner">
            <div class="FindPW_form">
                <div class="form-group">
                    <input type="password" id="mb_re_password" name="mb_re_password" placeholder="새 비밀번호">
                </div>
                <div class="form-group">
                    <input type="password" id="mb_re_password" name="mb_re_password" placeholder="새 비밀번호 확인">
                </div>
                <div class="password-guide f-12-400">
                    <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                    <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
                </div>
            </div>
            <router-link to="#" class="next-step-btn f-16-700" @click="Reset_modalOpen = true">확인</router-link>
        </div>
    </div>
</template>