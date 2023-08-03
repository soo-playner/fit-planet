<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'Join',
        components : {
            JoinCurrent
        }
    }
</script>

<template> 
    <JoinCurrent/>
    <div class="member_container Join">
        <div class="member_container_inner mob-inner">
            <div class="member-form">
                <div class="member-form-inner">
                    <div class="join-first-step join-step">
                        <div class="join-form-input1">
                            <div class="form-group">
                                <input type="checkbox" id="join_all" name="join_all" value="약관 전체동의">
                                <label for="join_all" class="bold"><span></span>약관 전체동의</label>
                            </div>
                        </div>
                        <div class="join-form-input2">
                            <div class="form-group">
                                <input type="checkbox" id="join_1" name="join_1" value="만 14세 이상입니다." required>
                                <label for="join_1"><span></span>만 14세 이상입니다.</label>
                                <router-link to="/" class="arrow"></router-link>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" id="join_2" name="join_2" value="(필수) 서비스 이용약관" required>
                                <label for="join_2"><span></span>(필수) 서비스 이용약관</label>
                                <router-link to="/" class="arrow"></router-link>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" id="join_3" name="join_3" value="(필수) 개인정보 처리방침" required>
                                <label for="join_3"><span></span>(필수) 개인정보 처리방침</label>
                                <router-link to="/" class="arrow"></router-link>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" id="join_4" name="join_4" value="(선택) 마케팅 정보 수신동의">
                                <label for="join_4"><span></span>(선택) 마케팅 정보 수신동의</label>
                                <router-link to="/" class="arrow"></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/JoinAccount" class="next-step-btn f-16-700">다음</router-link>
        </div>
    </div>
</template>