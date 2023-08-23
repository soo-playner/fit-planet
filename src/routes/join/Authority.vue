<script setup>
const authorityList = [
    {
        title: "기기 및 앱 기록",
        description: "서비스 개선 및 오류 확인",
        class: "authority-con-1",
    },
    {
        title: "사진/카메라",
        subTitle : "(선택)",
        description: "플레이스&트레이너에 대한\n 사진 리뷰 업로드",
        class: "authority-con-2",
    },
    {
        title: "위치",
        subTitle : "(선택)",
        description: "현재 위치 주변의 플레이스&트레이너 검색",
        class: "authority-con-3",
    },
    {
        title: "알림",
        subTitle : "(선택)",
        description: "운동 일정 및 이벤트 알림 수신",
        class: "authority-con-4",
    },
];

</script>

<template>
    <div class="member_container authority">
        <div class="member_container_inner mob-inner">
            <div class="intro-txt-box">
                <div class="f-20-700">
                    <p>앱 사용을 위해</p>
                    <p>권한을 허용해 주세요</p>
                </div>
                <div class="f-14-400">
                    <p>위즈위즈님의 소중한 권한은</p>
                    <p>이런 용도로 쓰여요</p>
                </div>
            </div>
            <ul class="authority-list">
                <li v-for="(item, index) in authorityList" :key="index">
                    <div class="txt-box">
                        <p class="f-16-700">{{ item.title }}<span class="f-14-400">{{ item.subTitle }}</span></p>
                        <span class="f-12-400" v-html="item.description.replace('\n', '<br />')"></span>
                    </div>
                    <div :class="['authority-con', item.class]"></div>
                </li>
            </ul>
        </div>
        <div class="bott-btn-box">
            <div class="authority-guide f-12-400">
                <p>권한을 허용하지 않아도 이용이 가능하지만</p>
                <p>일부 서비스가 제한될 수 있어요</p>
            </div>
            <router-link to="/login" class="next-step-btn f-16-700 mob-inner">확인</router-link>
        </div>
    </div>
</template>
