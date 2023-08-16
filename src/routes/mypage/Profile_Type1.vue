<script setup>
    import { useStore } from 'vuex';

    const store = useStore();
    const {name, email, phone, birthDate, gender, nickname} = store.state.auth.user;
</script>

<template>
    <!-- 
        path : /Profile_sns_login
        간편 로그인일 경우 구글 로그인 / 닉네임 / 개인정보
        이메일 로그인일 경우 아이디(이메일) / 닉네임 / 비밀번호 / 개인정보
    -->
    <div class="profile_container main-layout">
        <div class="profile_container_inner mob-inner">
            <div class="profile-edit">
                <div class="profile-img">
                    <button class="album">
                        <img src="@/assets/image/album.png" alt="앨범 선택">
                        <input type="file" id="mb_profile" name="mb_profile">
                    </button>
                </div>
            </div>
            <ul class="profile-info-list">
                <li class="sns-login">
                    <div class="left-row">
                        <span class="f-12-400">구글 로그인</span>
                        <p class="f-14-400">{{email}}</p>
                    </div>
                    <div class="right-row sns-login-current"><img src="@/assets/image/google1.png" alt="구글 로그인"></div>
                </li>
                <li class="nickname">
                    <div class="left-row">
                        <span class="f-12-400">닉네임</span>
                        <p class="f-14-400">{{nickname}}</p>
                    </div>
                    <button class="right-row" @click="$router.push('/Change/Nickname')">변경</button>
                </li>
                <li class="person-info">
                    <div class="left-row">
                        <span class="f-12-400">개인정보</span>
                        <div class="person-info-inner">
                            <div class="name"><span>이름</span><p>{{name}}</p></div>
                            <div class="phone"><span>휴대폰 번호</span><p>{{phone}}</p></div>
                            <div class="phone"><span>생년월일</span><p>{{birthDate}}</p></div>
                            <div class="phone"><span>성별</span><p>{{gender === 'F' ? '여' : '남'}}</p></div>
                        </div>
                    </div>
                    <button class="right-row">본인인증</button>
                </li>
            </ul>
        </div>
        <div class="profile-other">
            <router-link to="/" class="f-12-400">로그아웃</router-link>
            <router-link to="/Account/Delete" class="f-12-400">회원탈퇴</router-link>
        </div>
    </div>
</template>