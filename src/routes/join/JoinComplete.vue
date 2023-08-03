<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinComplete',
        components : {
            JoinCurrent
        },
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container last JoinComplete">
        <div class="member_container_inner mob-inner">
            <div class="intro-txt-box">
                <div class="f-16-400">핏플래닛 가입 완료!</div>
                <div class="f-24-700">
                    <p><span class="nickname">위즈위즈</span>님</p>
                    <p>환영합니다!</p>
                </div>
            </div>
            <router-link to="/Authority" class="next-step-btn f-16-700">핏플래닛 시작하기</router-link>
        </div>
    </div>
</template>