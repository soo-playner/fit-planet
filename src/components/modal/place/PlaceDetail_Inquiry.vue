<script steup></script>

<template>
    <div class="work-inquiry-modal" :class="{ active: inquiryActive }">
        <div class="overlay" @click="toggleInquiry"></div>
        <div class="work-inquiry-modal-inner">
            <div class="inquiry-form">
                <router-link to="tel:010-1234-5678" class="f-14-700"><img src="@/assets/image/call.png" alt="전화 문의" />전화 문의</router-link>
                <router-link to="#" class="f-14-700"><img src="@/assets/image/talk.png" alt="카카오톡 문의" />카카오톡 문의</router-link>
            </div>
            <div class="work-inquiry-modal-close f-16-700" @click="toggleInquiry">다음에 하기</div>
        </div>
    </div>
</template>