<script>
    export default {
        name : 'CouponIssue',
        props : {
            couponIssuedFnc : Function
        },
    }
</script>

<template>
    <div class="coupon-issue-modal member_alert">
        <div class="overlay" @click="couponIssuedFnc"></div>
        <div class="coupon-issue-modal-inner member_alert_inner mob-inner">
            <div class="txt-box">
                <p class="f-18-700">쿠폰이 발급되었어요!</p>
                <span class="f-14-400">나에게 맞는 운동을 찾으러 떠나볼까요?</span>      
            </div>
            <div class="bott-btn"><button class="f-16-700" @click="couponIssuedFnc">확인</button></div>
        </div>
    </div>
</template>