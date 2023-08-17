<script setup>
    const reportList = [
        { title : '마음에 들지 않습니다' },
        { title : '스팸' },
        { title : '나체 이미지 또는 성적 행위' },
        { title : '사기 또는 거짓' },
        { title : '혐오 발언 또는 상징' },
        { title : '거짓 정보' },
        { title : '따돌림 또는 괴롭힘' },
        { title : '폭력 또는 위험한 단체' },
        { title : '지식재산권 침해' }
    ]
</script>

<template>
    <div class="review-report-modal member_alert">
        <div class="overlay" @click="confirmDeletion"></div>
        <div class="review-report-modal-inner mob-inner member_alert_inner">
            <div class="top-column">
                <p class="f-16-700">이 게시글을 신고하는 이유</p>
                <div class="close"></div>
            </div>
            <ul class="report-list">
                <li v-for="(reportItem, idx) in reportList" :key="reportItem">
                    <input type="radio" :name="`reportItem`" :id="reportItem + idx" >
                    <label :for="reportItem + idx">
                        <div class="txt-box f-14-400">{{ reportItem.title }}</div>
                        <span class="outSide"><span></span></span>
                    </label>
                </li>
            </ul>
            <button class="next-step-btn f-16-700">신고하기</button>
        </div>
    </div>
</template>