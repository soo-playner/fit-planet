<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'PW_Reset',
        components : {
            JoinCurrent, 
        },
        data(){
            return {
                ResetPW : false
            }
        },
        methods : {
            ResetPWFnc : function(){
                this.ResetPW = !this.ResetPW
            }
        }
    }
</script>

<template>
    <JoinCurrent/>
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
            <router-link to="#" class="next-step-btn f-16-700" @click="ResetPWFnc">확인</router-link>
        </div>
        <div class="member_alert ResetPW_Alert" v-bind:class="{ active : ResetPW }">
            <div class="overlay" @click="ResetPWFnc"></div>
            <div class="member_alert_inner mob-inner">
                <div class="f-18-700">
                    <p>비밀번호가</p>
                    <p>재설정 되었습니다</p>
                </div>
                <router-link to="/Login" @click="ResetPWFnc" class="next-step-btn">확인</router-link>
            </div>
        </div>
    </div>
</template>