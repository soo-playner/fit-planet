<script>
    export default {
        name : 'MyPage',
        data(){
            return {
                quick1 : [
                    { id : '1', Name : '주문목록', Link : '/Orderinquiry' },
                    { id : '2', Name : '마이쿠폰', Link : '/Coupon' },
                    { id : '3', Name : '마이후기', Link : '/' },
                    { id : '4', Name : '찜', Link : '/' },
                ],
                quick2 : [
                    { Name : '공지/이벤트', Link : '/' },
                    { Name : '자주 묻는 질문', Link : '/' },
                    { Name : '이메일 문의', Link : '/' },
                    { Name : '신고 내역', Link : '/' },
                    { Name : '약관 및 정책', Link : '/' },
                    { Name : '현재 버전 1.0', Link : '/' },
                ],
            }
        }
    }
</script>

<template>
    <div class="mypage_container">
        <div class="mypage_container_inner mob-inner">
            <div class="my-profile">
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
                    <li v-for="(quickItem1, idx) in quick1" :key="idx">
                        <router-link :to="quickItem1.Link">
                            <span :class="'my-quick-icon my-quick-icon-' + quickItem1.id"></span>
                            <p class="f-14-400">{{ quickItem1.Name }}</p>
                        </router-link>
                    </li>
                </ul>
                <div class="review-guide f-14-700">아직 작성하지 않은 후기가 있어요!</div>
            </div>
            <ul class="quick-link">
                <li v-for="(quickItem2, idx) in quick2" :key="idx">
                    <router-link :to="quickItem2.Link">
                        <p>{{ quickItem2.Name }}</p>
                        <span class="arrow"></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>