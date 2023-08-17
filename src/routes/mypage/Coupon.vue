<script setup>
    import CouponList from '@/components/coupon/CouponList';
    import CouponIssueModal from '@/components/modal/coupon/CouponIssue';
    import { ref } from 'vue';

    const isCouponReceived = ref(false);
    const couponList = ref([
        {
            dueDate: '7일',
            couponName: '환영해요! 신규 회원가입 축하 쿠폰',
            discount: '5,000원 할인 (50,000원 이상 결제 시)',
            date: '2023.07.01 - 2023.07.31',
        },
        {
            dueDate: '7일',
            couponName: '환영해요! 신규 회원가입 축하 쿠폰',
            discount: '5,000원 할인 (50,000원 이상 결제 시)',
            date: '2023.07.01 - 2023.07.31',
        },
    ]);

    // 쿠폰번호 입력 후 받기 이벤트 핸들러
    const couponNumber = ref('');
    
    const redeemCoupon = () => {
        isCouponReceived.value = !isCouponReceived.value;
    };

    // 모달 닫기 핸들러
    const confirmCouponRedemption = () => {
        isCouponReceived.value = !isCouponReceived.value;
    }
</script>

<template>
  <div class="coupon_container main-layout">
    <div class="coupon_container_inner mob-inner">
      <div class="coupon-input">
        <div class="form-group">
          <input v-model="couponNumber" type="text" name="coupon-num" id="coupon-num" placeholder="쿠폰 번호 입력">
        </div>
        <button class="f-14-700" @click="redeemCoupon">받기</button>
      </div>
      <ul class="coupon-list">
        <CouponList v-for="couponItem in couponList" :key="couponItem" :data="couponItem"></CouponList>
      </ul>
    </div>

    <!-- 쿠폰 발급 모달창 -->
    <CouponIssueModal :class="{ active: isCouponReceived }" :closeModal="confirmCouponRedemption" />
  </div>
</template>