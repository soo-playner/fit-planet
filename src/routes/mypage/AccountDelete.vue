<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    import accountDeleteReason_Modal from '@/components/modal/mypage/AccountDeleteReason';
    import accountDeleteComplete_Modal from '@/components/modal/mypage/AccountDeleteComplete';

    const displayCategory = ref(false);
    const targetCategory = ref('탈퇴 이유를 선택해 주세요');
    const categoryItems = [
        { id: 1, reason: '탈퇴 이유를 선택해 주세요' },
        { id: 2, reason: '사용하기 불편해요' },
        { id: 3, reason: '잘 사용하지 않아요' },
        { id: 4, reason: '플레이스, 트레이너에 대해 불만족스러워요' },
        { id: 5, reason: '새 계정을 만들고 싶어요' },
        { id: 6, reason: '기타' },
    ];
    
    // 탈퇴 완료 모달창
    const isComplete = ref(false);
    const accountDeleteFnc = function(){
        isComplete.value = !isComplete.value;
    }

    // 탈퇴 이유 선택 모달창
    const isReason = ref(false);
    const deleteReasonFnc = function(){
        isReason.value = !isReason.value;
    }

    // 탈퇴 이유 선택
    const chooseReason = function(){
        displayCategory.value = !displayCategory.value;
    }
    
    const selectHandler = (reason) => {
        targetCategory.value = reason;
        chooseReason();
    };
</script>


<template>
    <div class="AccountDelete_container main-layout">
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
                        <li class="leave-select-li" @click="chooseReason">
                            {{ targetCategory }}<span class="arrow"></span>
                        </li>
                        <ul :class="{ active : displayCategory }">
                            <li 
                                v-for="cate in categoryItems" 
                                :key="cate.id" 
                                @click="selectHandler(cate.reason)">
                                    {{ cate.reason }}
                            </li>
                        </ul>
                    </ul>
                    <div class="form-group2" v-if="targetCategory === '기타'">
                        <textarea name="" id="" cols="30" rows="10" placeholder="이유를 작성해주세요"></textarea>
                    </div>
                </div>
            </div>
            <div class="bott-btn">
                <router-link to="/" class="f-16-700">뒤로가기</router-link>
                <button 
                    class="f-14-400" 
                    @click="accountDeleteFnc"
                    v-if="targetCategory != '탈퇴 이유를 선택해 주세요'">
                        탈퇴하기
                </button>
                <button 
                    class="f-14-400" 
                    @click="deleteReasonFnc"
                    v-if="targetCategory === '탈퇴 이유를 선택해 주세요'">
                        탈퇴하기
                </button>
            </div>
        </div>

        <!-- 탈퇴 이유 선택 모달창 -->
        <accountDeleteReason_Modal :class="{ active : isReason }" :confirmReason="deleteReasonFnc"/>

        <!-- 탈퇴 완료 모달창 -->
        <accountDeleteComplete_Modal :class="{ active : isComplete }"/>
    </div>
</template>