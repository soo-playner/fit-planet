<script>
    export default {
        name : 'FAQ',
        data(){
            return {
                active : '회원정보',
                faqList : ['회원정보', '결제', '환불', '후기', '오류', '기타'],
            }
        }
    }
</script>

<template>
    <div class="FAQ_container main-layout">
        <div class="FAQ_container_inner mob-inner">
            <ul class="faq-tab-list">
                <!-- 질문 리스트는 후에 추가될 수 있음 -->
                <li 
                    v-for="faqItem in faqList" 
                    :key="faqItem"
                    @click="active = faqItem"
                    :class="{active : active == faqItem}">
                        <button>{{ faqItem }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>