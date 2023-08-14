<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinStep2',
        components : {
            JoinCurrent
        },
        data(){
            return {
                pwExposure1 : false,
                pwExposure2 : false,
                signup : {
                    id : null,
                }
            }
        },
        methods : {
            pwExposureFnc1 : function(){
                this.pwExposure1 = !this.pwExposure1
            },
            pwExposureFnc2 : function(){
                this.pwExposure2 = !this.pwExposure2
            }
        },
        
    }
</script>

<template>
    <JoinCurrent/>
    <div class="join_container step2">
        <div class="join_container_inner mob-inner">
            <div class="form-group">
                <input type="email" v-model="signup.id" name="mb_id" id="mb_id" maxlength="20" placeholder="아이디(이메일)" required>
                
                <div>유효하지 않은 아이디입니다.</div>
                <!-- 
                    확인 완료 시 이미지 검정색
                    ㄴ 확인 완료 시 check-confirm active 클래스 추가 -> 이미지 검정색으로 변경
                    ㄴ 비밀번호 노출 여부 pw-exposure도 마찬가지
                -->
                <div class="etc">
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부"></span>
                </div>
            </div>
            <div class="form-group">
                <input type="password" name="mb_password1" id="mb_password1" placeholder="비밀번호" required>
                <div class="etc">
                    <span class="pw-exposure" @click="pwExposureFnc1" :class="{ active : pwExposure1 }"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부"></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부"></span>
                </div>
            </div>
            <div class="form-group">
                <input type="password" name="mb_password2" id="mb_password2" placeholder="비밀번호 확인" required>
                <div class="etc">
                    <span class="pw-exposure" @click="pwExposureFnc2" :class="{ active : pwExposure2 }"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부"></span>
                    <span class="check-confirm"><img src="@/assets/image/check.png" alt="확인 여부"></span>
                </div>
            </div>
            <div class="password-guide f-12-400">
                <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner">다음</button>
    </div>
</template>