<script>
    import AlertCheck from "../data/AlertCheck";

    export default {
        name : 'AlertSetting',
        data(){
            return {
                데이터1: [
                    {
                        title : '운동 알림',
                        dsec1 : '운동을 꾸준히 진행할 수 있도록',
                        dsec2 : '운동 일정에 맞춰 알림을 보내드려요'
                    },
                    {
                        title : '활동 알림',
                        dsec1 : '쿠폰과 후기 작성 기간이' ,
                        dsec2 : '얼마 남지 않았을 때 알림을 보내드려요'
                    },
                ],
                데이터2:[
                    {
                        title : '이벤트 알림',
                        dsec1 : '핏플래닛의 놓치면 안될',
                        dsec2 : '이벤트 및 혜택 정보를 알려드려요'
                    },
                    {
                        title : '공지 알림',
                        dsec1 : '핏플래닛의 새 소식을 알려드려요',
                        dsec2 : ''
                    }
                ]
            }
        },
        components : {
            AlertCheck
        }
    }
</script>

<template>
    <div class="AlertSetting_container">
        <div class="AlertSetting_container_inner mob-inner">
            <div class="alert-setting-guide">
                <p class="f-12-400">알림이 오지 않을 경우 휴대폰 알림을 켜주세요</p>
                <button class="f-12-700">설정하기</button>
            </div>
            <!-- 마이 알림 -->
            <div class="my-alert-setting AlertSetting-box">
                <div class="my-alert-setting-tit AlertSetting-box-tit f-14-700">마이 알림</div>
                <ul class="my-alert-setting-ul AlertSetting-box-ul">
                    <AlertCheck v-for="(el, idx) in 데이터1" :key="idx" :data="el" />
                </ul>
            </div>
            <!-- 핏플래닛 알림 -->
            <div class="flt-planet-setting AlertSetting-box">
                <div class="flt-planet-setting-tit AlertSetting-box-tit f-14-700">핏플래닛 알림</div>
                <ul class="flt-planet-setting-ul AlertSetting-box-ul">
                    <AlertCheck v-for="(el, idx) in 데이터2" :key="idx" :data="el" />
                </ul>
            </div>
        </div>
    </div>
</template>

