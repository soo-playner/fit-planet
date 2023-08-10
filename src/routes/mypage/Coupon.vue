<script>
    import CouponList from '../../components/data/CouponList';

    export default {
        name : 'Coupon',
        data(){
            return {
                couponReceive : false,
                CouponList : [
                    { 
                        dueDate : '7일',
                        couponName : '환영해요! 신규 회원가입 축하 쿠폰',
                        discount : '5,000원 할인 (50,000원 이상 결제 시)',
                        date : '2023.07.01 - 2023.07.31'
                    },
                    { 
                        dueDate : '7일',
                        couponName : '환영해요! 신규 회원가입 축하 쿠폰',
                        discount : '5,000원 할인 (50,000원 이상 결제 시)',
                        date : '2023.07.01 - 2023.07.31'
                    }
                ]
            }
        },
        methods : {
            couponIssuedFnc : function(){
                this.couponReceive = !this.couponReceive
            }
        },
        components : {
            CouponList
        }
    }
</script>

<template>
    <div class="coupon_container main-layout">
        <div class="coupon_container_inner mob-inner">
            <div class="coupon-input">
                <div class="form-group"><input type="text" name="coupon-num" id="coupon-num" placeholder="쿠폰 번호 입력"></div>
                <button class="f-14-700" @click="couponIssuedFnc">받기</button>
            </div>
            <ul class="coupon-list">
                <CouponList v-for="couponItem in CouponList" :key="couponItem" :data="couponItem"></CouponList>
            </ul>
        </div>
        <!-- 모달창 -->
        <div class="coupon-issue-modal member_alert" v-bind:class="{ active : couponReceive }">
            <div class="overlay" @click="couponIssuedFnc"></div>
            <div class="coupon-issue-modal-inner member_alert_inner">
                <div class="txt-box">
                    <p class="f-18-700">쿠폰이 발급되었어요!</p>
                    <span class="f-14-400">나에게 맞는 운동을 찾으러 떠나볼까요?</span>      
                </div>
                <div class="bott-btn"><button class="f-16-700" @click="couponIssuedFnc">확인</button></div>
            </div>
        </div>
    </div>
</template>