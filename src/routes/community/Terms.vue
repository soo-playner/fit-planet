<script>
    export default {
        name : 'Terms',
        data(){
            return {
                termsList : [
                    { title : '이용약관' },
                    { title : '전자금융거래 이용약관' },
                    { title : '개인정보 처리방침' },
                    { title : '후기 운영 정책' },
                    { title : '소비자분쟁해결기준' },
                ]
            }
        }
    }
</script>

<template>
    <div class="Terms_container">
        <div class="Terms_container_inner mob-inner">
            <ul>
                <li v-for="termsItem in termsList" :key="termsItem">
                    <p>{{ termsItem.title }}</p>
                    <div class="arrow"></div>
                </li>
            </ul>
        </div>
    </div>
</template>