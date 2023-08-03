<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinAccount',
        components : {
            JoinCurrent
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container JoinAccount">
        <div class="member_container_inner mob-inner">
            <div class="member-form">
                <div class="member-form-inner">
                    <div class="form-group">
                        <input type="text" name="mb_id" id="mb_id" placeholder="아이디(이메일)">
                    </div>
                    <div class="form-group">
                        <input type="password" name="mb_password" id="mb_password" placeholder="비밀번호">
                    </div>
                    <div class="form-group">
                        <input type="password" name="mb_password" id="mb_password" placeholder="비밀번호 확인">
                    </div>
                    <div class="password-guide f-12-400">
                        <p>영문, 숫자, 특수문자 조합 8자리 이상</p>
                        <p>특수문자는 ~’!@#$%^&*()-만 사용 가능합니다.</p>
                    </div>
                </div>
            </div>
            <router-link to="/JoinPass" class="next-step-btn f-16-700">다음</router-link>
        </div>
    </div>
</template>