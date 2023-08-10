<script>
    export default {
        name : 'InquiryComplete'
    }
</script>

<template>
    <!-- 이메일에 답변이 전송되면 문자를 통해 사용자에게 알려주기 -->
    <div class="InquiryComplete_container">
        <div class="InquiryComplete_container_inner mob-inner">
            <div class="top-row">
                <div class="complete-img-box"><img src="@/assets/image/complete.png" alt="전송 완료"></div>
                <div class="complete-txt-box f-20-700 ">
                    <p>userwiz@gmail.com</p>
                    <p>이메일 전송 완료!</p>
                </div>
                <div class="complete-guide-box f-14-400">
                    <p>작성하신 문의가 핏플래닛에 전송되었어요.</p>
                    <p>답변은 평균 7일 정도 소요됩니다.</p>
                </div>
            </div>
            <button class="bott-btn f-16-700">확인</button>
        </div>
    </div>
</template>