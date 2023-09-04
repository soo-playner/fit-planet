<script setup>
import { ref } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const mb_id = ref("");
const mb_password = ref("");

const login = async () => {
    const res = await axios.post("api", { mb_id, mb_password });
    if (res.data.result) return;
};
</script>

<template>
    <div class="login_container member_container">
        <div class="login_container_inner mob-inner">
            <div class="intro-txt-box">
                <div class="img-box"><img src="@/assets/image/login_logo.png" alt="핏플래닛 로고" /></div>
                <p class="f-16-700">소셜 운동 플랫폼, 핏플래닛</p>
            </div>
            <div class="login-form">
                <div class="login-form-input1">
                    <div class="form-group">
                        <input type="text" placeholder="아이디(이메일)" name="mb_id" v-model="mb_id" />
                    </div>
                    <div class="form-group password">
                        <input type="password" placeholder="비밀번호" name="mb_password" v-model="mb_password" />
                        <div class="etc">
                            <span class="pw-exposure"><img src="@/assets/image/eye.png" alt="비밀번호 노출 여부" /></span>
                        </div>
                    </div>
                    <RouterLink to="" class="login-btn f-16-500" @click="login">이메일 로그인</RouterLink>
                </div>
                <div class="login-form-input2 social-login">
                    <button to="/" title="카카오 로그인"><img src="@/assets/image/social-login-kakao.png" alt="카카오 로그인"></button>
                    <button to="/" title="네이버 로그인"><img src="@/assets/image/social-login-naver.png" alt="네이버 로그인"></button>
                    <button to="/" title="구글 로그인"><img src="@/assets/image/social-login-google.png" alt="구글 로그인"></button>
                    <button to="/" title="애플 로그인"><img src="@/assets/image/social-login-apple.png" alt="애플 로그인"></button>
                </div>
                <div class="login-form-input3">
                    <ul>
                        <li><RouterLink to="/join/step1">회원가입</RouterLink></li>
                        <li><RouterLink to="/find/id/step1">아이디 찾기</RouterLink></li>
                        <li><RouterLink to="/find/pw/step1">비밀번호 찾기</RouterLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
