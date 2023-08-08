<script>
    export default {
        name : 'AccountDelete',
        data(){
            return {
                AccountDelete : false,
                displayCategory : false,
                targetCategory : '탈퇴 이유를 선택해 주세요',
                CategoryItems : [
                    { id : 1, reason : '탈퇴 이유를 선택해 주세요' },
                    { id : 2, reason : '사용하기 불편해요' },
                    { id : 3, reason : '잘 사용하지 않아요' },
                    { id : 4, reason : '플레이스, 트레이너에 대해 불만족스러워요' },
                    { id : 5, reason : '새 계정을 만들고 싶어요' },
                    { id : 6, reason : '기타' },
                ]
            }
        },
        methods : {
            // 모달창 노출
            AccountDeleteFnc : function(){
                this.AccountDelete = !this.AccountDelete;
            },
            reasonList : function(){
                this.displayCategory = !this.displayCategory;
            },
        }, 
        mounted() {
            const reasonTxt = document.querySelector('.leave-select-li');
            console.log(reasonTxt.textContent);
            if(reasonTxt.textContent === '기타'){
                console.log('i')
            }
        }
    }
</script>

<template>
    <div class="AccountDelete_container">
        <div class="AccountDelete_container_inner mob-inner">
            <div class="top-column">
                <div class="txt-box">
                    <div class="f-20-700">계정을 삭제하시겠어요?</div>
                    <p class="f-14-400">
                        <span>계정을 삭제하면 모든 활동정보가 삭제되며,</span>
                        <span>모든 데이터는 복구가 불가능합니다.</span>
                        <span>계정 삭제 후 7일간 다시 가입할 수 없어요.</span>
                    </p>
                </div>
                <div class="leave-select">
                    <p class="f-14-400"><span class="member-nick">위즈위즈</span>님의 탈퇴 이유가 궁금해요</p>
                    <ul class="leave-select-ul">
                        <li class="leave-select-li" @click="reasonList">{{ targetCategory }}<span class="arrow"></span></li>
                        <ul :class="{ active : displayCategory }">
                            <li 
                                v-for="cate in CategoryItems" 
                                :key="cate.id" 
                                @click="[targetCategory = cate.reason], [reasonList()]">{{ cate.reason }}
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="bott-btn">
                <router-link to="/" class="f-16-700">뒤로가기</router-link>
                <button class="f-14-400" @click="AccountDeleteFnc">탈퇴하기</button>
            </div>
        </div>
        <!-- 모달창 -->
        <div class="AccountDelete-modal member_alert" :class="{ active : AccountDelete }">
            <div class="overlay" @click="$router.push('/Login')"></div>
            <div class="AccountDelete-modal-inner member_alert_inner">
                <div class="txt-box">
                    <div class="f-18-700">탈퇴되었습니다.</div>
                    <p class="f-14-400">
                        <span>핏플래닛이 그리워지면</span>
                        <span>언제든지 다시 돌아와주세요!</span>
                        <span>더 멋진 모습으로 기다리고 있을게요</span>
                    </p>
                </div>
                <router-link to="/Login" class="f-16-700">See ya 핏플래닛!</router-link>
            </div>
        </div>
    </div>
</template>