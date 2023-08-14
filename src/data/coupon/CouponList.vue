<script>
    export default {
        name : 'CouponList',
        props : {
            data : Object
        },
    }
</script>

<template>
    <li>
        <div class="top-column">
            <div class="coupon-due-date"><span>{{ data.dueDate }}</span> 남음</div>
            <p class="f-16-700">{{ data.couponName }}</p>
        </div>
        <div class="bott-column f-12-400">
            <span class="coupon-con">{{ data.discount }}</span>
            <span class="coupon-date">{{ data.date }}</span>
        </div>
    </li>
</template>