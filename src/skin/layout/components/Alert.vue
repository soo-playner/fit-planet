<!-- <script>
    export default {
        name : 'Alert',
        data(){
            return {
                alertCurrent : false,
            }
        },
        methods : {
            alertCurrentFnc : function(){
                this.alertCurrent = !this.alertCurrent
            }
        }
    }
</script> -->

<script setup>
    import AlertManage_Modal from '@/components/modal/alert/AlertManage';

    var alertCurrent = false;
    const alertCurrentFnc = () => {
        alertCurrent = !alertCurrent
    }
</script>

<template>
    <!-- 
        각 알림 컨텐츠들 좌측으로 드래그 시 삭제 버튼 노출
        읽지 않은 알림들은 회색 배경 처리 -> 클래스명 notConfirm
    -->
    <div class="Alert_container">
        <div class="Alert_container_inner mob-inner">
            <div class="alert-tit">
                <p>읽지 않은 알림 <span class="alert-count">2</span>개</p>
                <button class="alert-manage" @click="alertCurrentFnc">관리</button>
            </div>
            <ul class="alert-list">
                <!-- 아침 8시 알림, 탭하면 홈으로 이동 -->
                <li class="notConfirm">
                    <div class="txt-box">
                        <div class="top-column">
                            <p class="alert-name f-14-700">운동 일정 알림</p><span class="time">3분전</span>
                        </div>
                        <div class="bott-column">
                            <div class="txt-box">
                                <div class="alert-con">오늘 운동, 잊지 않으셨죠? 오늘도 열심히 파이팅 해보자구요!</div>
                                <div class="f-14-400 place-info">
                                    <p><span class="trainer-name">김위즈</span>트레이너</p>
                                    <p class="work-name">바디프로필 프로젝트 30회</p>
                                </div>
                            </div>
                            <div class="alert-img"></div>
                        </div>    
                    </div>
                    <div class="test"><img src="@/assets/image/trash.png" alt=""></div>
                </li>
                <!-- 전날 저녁 10시 알림, 탭하면 홈으로 이동 -->
                <li class="notConfirm">
                    <div class="top-column">
                        <p class="alert-name f-14-700">운동 시작 알림</p><span class="time">07.02</span>
                    </div>
                    <div class="bott-column">
                        <div class="txt-box">
                            <div class="alert-con">운동 시작일이 바로 내일, 코앞으로 다가왔어요! 운동할 준비는 되었나요?</div>
                            <div class="f-14-400 place-info">
                                <p><span class="trainer-name">김위즈</span>트레이너</p>
                                <p class="work-name">바디프로필 프로젝트 30회</p>
                            </div>
                        </div>
                        <div class="alert-img"></div>
                    </div>
                </li>
                <!-- 운동 마지막 날 알림, 탭하면 후기 작성 페이지로 이동 -->
                <li class="reviewInduce">
                    <div class="top-column">
                        <p class="alert-name f-14-700">운동 후기 작성</p><span class="time">07.01</span>
                    </div>
                    <div class="bott-column">
                        <div class="txt-box">
                            <div class="alert-con">운동 후기를 작성할 수 있어요! 후기를 작성하면 1,000원 쿠폰이 지급됩니다.</div>
                            <div class="f-14-400 place-info">
                                <p><span class="trainer-name">김위즈</span>트레이너</p>
                                <p class="work-name">바디프로필 프로젝트 30회</p>
                            </div>
                        </div>
                        <div class="alert-img"></div>
                    </div>
                </li>
                <!-- 저녁 8시 알림, 탭하면 쿠폰함 페이지로 이동 -->
                <li class="couponAlert">
                    <div class="top-column">
                        <p class="alert-name f-14-700">쿠폰 기한 임박</p><span class="time">07.01</span>
                    </div>
                    <div class="bott-column">
                        <div class="txt-box">
                            <div class="alert-con">서둘러요! 보유하신 쿠폰이 곧 사라져요! 쿠폰 만료 후 재발급은 불가능합니다.</div>
                            <p>환영해요! 신규 회원가입 축하 쿠폰 (~07.01 자정 전까지)</p>
                        </div>
                        <div class="alert-img"></div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 알림창 관리 모달창 -->
        <AlertManage_Modal :class="{ active : alertCurrent }"/>
    </div>
</template>