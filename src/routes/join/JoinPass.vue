<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinPass',
        components : {
            JoinCurrent
        },
        
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container JoinPass">
        <div class="member_container_inner mob-inner">
            <div class="member-form">
                <div class="member-form-inner">
                    <div class="join-third-step join-step">
                        <div class="join-form-input1">
                            <div class="form-group">
                                <input type="email" id="mb_name" name="mb_name" placeholder="이름">
                            </div>
                            <div class="form-group codeNum">
                                <input type="tel" id="mb_phone" name="mb_phone" placeholder="휴대폰 번호 (-제외)">
                            </div>
                            <div class="form-group">
                                <input type="text" id="mb_codeNum" name="mb_codeNum" placeholder="726506">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/JoinStep3" class="next-step-btn f-16-700">인증번호 요청</router-link>
        </div>
    </div>
</template>