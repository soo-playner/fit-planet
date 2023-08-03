<script>
    export default {
        name : 'Profile',
        data(){
            return {
                profileTag : ['닉네임', '이름', '휴대폰 번호'],
                profileCon : ['위즈위즈', '김위즈', '010-0000-0000']
            }
        }
    }
</script>

<template>
    <div class="profile_container">
        <div class="profile_container_inner mob-inner">
            <div class="profile-edit">
                <div class="profile-img">
                    <button class="album">
                        <img src="@/assets/image/album.png" alt="앨범">
                        <input type="file" id="mb_profile" name="mb_profile">
                    </button>
                </div>
            </div>
            <ul class="profile-info-list">
                <!-- 간편로그인일 경우 - 구글 로그인 / 닉네임 / 이름 / 휴대폰 번호 -->
                <!--  이메일 로그인일 경우 - 아이디(이메일) / 닉네임 / 이름 / 휴대폰 번호 / 비밀번호 변경 -->
                <li>
                    <div>
                        <span class="f-12-400">구글 로그인</span>
                        <p class="f-16-400">userwiz@gmail.com</p>
                    </div>
                    <div class="login-route"><img src="@/assets/image/google.png" alt="구글 로그인"></div>
                </li>
                <li>
                    <div>
                        <span class="f-12-400">아이디(이메일)</span>
                        <p class="f-16-400">userwiz@gmail.com</p>
                    </div>
                    <div class="arrow"></div>
                </li>
                <li>
                    <div>
                        <span class="f-12-400">닉네임</span>
                        <p class="f-16-400">위즈위즈</p>
                    </div>
                    <div class="arrow"></div>
                </li>
                <li>
                    <div>
                        <span class="f-12-400">이름</span>
                        <p class="f-16-400">김위즈</p>
                    </div>
                    <div class="arrow"></div>
                </li>
                <li>
                    <div>
                        <span class="f-12-400">휴대폰 번호</span>
                        <p class="f-16-400">010-0000-0000</p>
                    </div>
                    <div class="arrow"></div>
                </li>
                <li>
                    <div>
                        <span class="f-12-400">비밀번호 변경</span>
                        <p class="f-16-400">*******</p>
                    </div>
                    <div class="arrow"></div>
                </li>
            </ul>
            <div class="profile-other">
                <router-link to="/" class="f-12-400">로그아웃</router-link>
                <router-link to="/" class="f-12-400">회원탈퇴</router-link>
            </div>
        </div>
    </div>
</template>