<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinNickname',
        components : {
            JoinCurrent
        },
        
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container JoinNickname">
        <div class="member_container_inner mob-inner">
            <div class="member-form">
                <div class="member-form-inner">
                    <div class="join-third-step join-step">
                        <div class="nickname-guide f-14-400">핏플래닛에서 사용할 닉네임을 입력해주세요</div>
                        <div class="join-form-input1">
                            <div class="form-group">
                                <input type="text" id="mb_nickname" name="mb_nickname" placeholder="닉네임 입력">
                                <button class="f-14-700">중복 확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/JoinComplete" class="next-step-btn f-16-700">가입 완료</router-link>
        </div>
    </div>
</template>