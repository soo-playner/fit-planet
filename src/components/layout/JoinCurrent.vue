<script>
    export default {
        name : 'JoinCurrent',
        data : () => ({
            joinValue : ['서비스 이용 동의', '회원가입', '본인 인증', '닉네임 등록'],
        }),
        methods : {
            toLogin(){this.$router.push('/Login')},
            toJoin(){this.$router.push('/Join')}, 
            toJoinStep1(){this.$router.push('/JoinStep1')},
            toJoinPass(){this.$router.push('/JoinPass')},
            toJoinStep3(){this.$router.push('/JoinNickname')},
            toMain(){this.$router.push('/MainPage')}
        }
    }

</script>

<template>
    <div class="join_current">
        <div class="step-value first" v-if="$route.name == 'Join'"><span></span></div>
        <div class="step-value second" v-if="$route.name == 'JoinStep1'"><span></span></div>
        <div class="step-value third" v-if="$route.name == 'JoinPass'"><span></span></div>
        <div class="step-value four" v-if="$route.name == 'JoinNickname'"><span></span></div>

        <div class="top-current mob-inner">
            <button class="back-btn" v-if="$route.name == 'Join'" @click="toLogin"><span></span></button>
            <button class="back-btn" v-if="$route.name == 'JoinStep1'" @click="toJoin"><span></span></button>
            <button class="back-btn" v-if="$route.name == 'JoinPass'" @click="toJoinStep1"><span></span></button>
            <button class="back-btn" v-if="$route.name == 'JoinNickname'" @click="toJoinPass"><span></span></button>
            <button class="back-btn" v-if="$route.name == 'JoinComplete'" @click="toJoinStep3"><span></span></button>
            <button class="back-btn toMain" v-if="$route.name == 'Authority'" @click="toMain"><span></span></button>

            <p class="current-txt f-16-400" v-if="$route.name == 'Join'" v-text="joinValue[0]"></p>
            <p class="current-txt f-16-400" v-if="$route.name == 'JoinStep1'" v-text="joinValue[1]"></p>
            <p class="current-txt f-16-400" v-if="$route.name == 'JoinPass'" v-text="joinValue[2]"></p>
            <p class="current-txt f-16-400" v-if="$route.name == 'JoinNickname'" v-text="joinValue[3]"></p>

            <div class="current-step f-14-400">
                <span>1</span>
                /
                <span>4</span>
            </div>
        </div>
    </div>
</template>