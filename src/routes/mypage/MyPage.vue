<script setup>
    const personalMenu = [
        { id : '1', name : '주문목록', link : '/orderinquiry' },
        { id : '2', name : '마이쿠폰', link : '/coupon' },
        { id : '3', name : '마이후기', link : '/my-review' },
        { id : '4', name : '찜', link : '/' },
    ]

    const generalMenu = [
        { name : '공지/이벤트', link : '/News' },
        { name : '자주 묻는 질문', link : '/' },
        { name : '이메일 문의', link : '/Inquiry' },
        { name : '신고 내역', link : '/' },
        { name : '약관 및 정책', link : '/Terms' },
        { name : '현재 버전 1.0', link : '/' },
    ]
</script>

<template>
    <div class="mypage_container main-layout">
        <div class="mypage_container_inner mob-inner">
            <div class="my-profile" @click="$router.push('/profile_email_login')">
                <div class="my-profile-info">
                    <div class="profile-img"></div>
                    <div>
                        <p class="f-20-700">위즈위즈<span class="login-current"></span></p>
                        <span class="f-12-400 member-email">userwiz@gmail.com</span>
                    </div>
                </div>
                <router-link to="/" class="arrow"></router-link>
            </div>
            <div class="my-quick">
                <ul>
                    <li v-for="(pMenu, idx) in personalMenu" :key="idx">
                        <router-link :to="pMenu.link">
                            <span :class="'my-quick-icon my-quick-icon-' + pMenu.id"></span>
                            <p class="f-14-400">{{ pMenu.name }}</p>
                        </router-link>
                    </li>
                </ul>
                <div class="review-guide f-14-700">아직 작성하지 않은 후기가 있어요!</div>
            </div>
            <ul class="quick-link">
                <li v-for="(gMenu, idx) in generalMenu" :key="idx">
                    <router-link :to="gMenu.link">
                        <p>{{ gMenu.name }}</p>
                        <span class="arrow"></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>