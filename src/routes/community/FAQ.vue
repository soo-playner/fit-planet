<script setup>
import faqTab from './components/FAQ_Tab';

const faqList = ["회원정보", "결제", "환불", "후기", "오류", "기타"];
//const faqList2 = ["memberInfo", "payment", "refund", "review", "error", "etc"];
</script>

<template>
    <div class="FAQ_container main-layout">
        <div class="FAQ_container_inner mob-inner">
            <faqTab />
            <ul 
                v-for="faqItem in faqList"
                :id="faqItem">
                <li>{{ faqItem }}</li>
            </ul>
            <!-- <ul id="memberInfo">
                <li>회원정보</li>
            </ul>
            <ul id="payment">
                <li>결제</li>
            </ul>
            <ul id="refund">
                <li>환불</li>
            </ul>
            <ul id="review">
                <li>후기</li>
            </ul>
            <ul id="error">
                <li>오류</li>
            </ul>
            <ul id="etc">
                <li>기타</li>
            </ul> -->
        </div>
    </div>
</template>
