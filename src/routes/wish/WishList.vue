<script>
    export default {
        name : 'WishList'
    }
</script>

<template>
    <div class="Wish_container main-layout">
        <div class="Wish_container_inner mob-inner">
            <!-- 플레이스 -->
            <ul class="place-wish-ul wish-ul">
                <li class="place-wish-li wish-li" v-for="placeWishItem in 4" :key="placeWishItem">
                    <div class="img-box">
                        <img class="location" src="@/assets/image/quick-menu-icon-2-on.png" alt="위치">
                    </div>
                    <div class="txt-box">
                        <div class="info">
                            <div class="info-detail">
                                <div class="f-14-700 center-name">위즈짐</div>
                                <div class="scope">
                                    <div class="starBox">
                                        <div class="star">★</div>
                                    </div>
                                    <p class="f-12-400">4.3<span>(12)</span></p>
                                </div>
                                <span class="f-12-400 location">서울 강남구 대치동</span>
                            </div>
                            <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="찜"></div>
                        </div>
                        <button class="pay-btn f-14-700">결제하기</button>
                    </div>
                </li>
            </ul>
            <!-- 트레이너 -->
            <ul class="place-wish-ul wish-ul">
                <li class="place-wish-li wish-li" v-for="TrainerWishItem in 4" :key="TrainerWishItem">
                    <div class="img-box"></div>
                    <div class="txt-box">
                        <div class="info">
                            <div class="info-detail">
                                <div class="f-14-700 trainer-name">김위즈 트레이너</div>
                                <div class="scope">
                                    <div class="starBox">
                                        <div class="star">★</div>
                                    </div>
                                    <p class="f-12-400">4.3<span>(12)</span></p>
                                </div>
                            </div>
                            <div class="heart"><img src="@/assets/image/quick-menu-icon-4-on.png" alt="찜"></div>
                        </div>
                        <button class="pay-btn f-14-700">결제하기</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>