<script setup>
// 필요한 경우 import 문을 사용하여 다른 모듈을 가져올 수 있습니다.
</script>

<template>
    <div class="member_container id-step3">
        <div class="member_container_inner mob-inner">
            <div class="id-guide">
                <div class="f-20-700">1개의 아이디를 찾았어요</div>
                <p class="f-14-400">개인정보 보호를 위해 아이디는 일부만 제공합니다.</p>
            </div>
            <ul class="id-list">
                <li>
                    <div class="user-profile-img"><img src="@/assets/image/profile.png" alt="프로필"></div>
                    <div class="user-info">
                        <p class="user-email f-14-400">wizz***@naver.com</p>
                        <p class="f-12-400"><span class="login-history">23년 7월 26일</span> 마지막 로그인</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bott-btn-box mob-inner">
            <router-link to="/FindPW_Step1" class="FindPW line f-14-400">비밀번호 찾기</router-link>
            <button @click="$router.push('/login')" class="btn-44-black f-16-700">로그인 하러가기</button>
        </div>
    </div>
</template>
