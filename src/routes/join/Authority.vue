<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'Authority',
        components : {
            JoinCurrent
        },
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container Authority">
        <div class="member_container_inner mob-inner">
            <div class="intro-txt-box">
                <div class="f-20-700">
                    <p>앱 사용을 위해</p>
                    <p>권한을 허용해 주세요</p>
                </div>
                <div class="f-14-400">
                    <p><span class="nickname">위즈위즈</span>님의 소중한 권한은</p>
                    <p>이런 용도로 쓰여요</p>
                </div>
            </div>
            <ul class="authority-list">
                <li>
                    <div class="txt-box">
                        <p class="f-16-700">기기 및 앱 기록</p>
                        <span class="f-12-400">서비스 개선 및 오류 확인</span>
                    </div>
                    <div class="authority-con authority-con-1"></div>
                </li>
                <li>
                    <div class="txt-box">
                        <p class="f-16-700">사진/카메라<span class="f-14-400">(선택)</span></p>
                        <span class="f-12-400">
                            <span>플레이스&트레이너에 대한</span>
                            <span>사진 리뷰 업로드</span>
                        </span>
                    </div>
                    <div class="authority-con authority-con-2"></div>
                </li>
                <li>
                    <div class="txt-box">
                        <p class="f-16-700">위치<span class="f-14-400">(선택)</span></p>
                        <span class="f-12-400">
                            <span>현재 위치 주변의</span>
                            <span>플레이스&트레이너 검색</span>
                        </span>
                    </div>
                    <div class="authority-con authority-con-3"></div>
                </li>
                <li>
                    <div class="txt-box">
                        <p class="f-16-700">알림<span class="f-14-400">(선택)</span></p>
                        <span class="f-12-400">
                            <span>운동 일정 및 이벤트 알림 수신</span>
                        </span>
                    </div>
                    <div class="authority-con authority-con-4"></div>
                </li>
            </ul>
            <div class="authority-guide f-12-400">
                <p>권한을 허용하지 않아도 이용이 가능하지만</p>
                <p>일부 서비스가 제한될 수 있어요</p>
            </div>
            <router-link to="/MainPage" class="next-step-btn f-16-700">확인</router-link>
        </div>
    </div>
</template>