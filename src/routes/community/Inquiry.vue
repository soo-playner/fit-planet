<script setup>
import { ref } from "vue";

const selected = ref("회원정보문의");
const inquiryList = ["회원정보문의", "결제문의", "환불문의", "후기문의", "오류문의", "이벤트문의", "기타문의"];

// 필수 입력란이 모두 작성되었는지 확인하는 함수
const isFormComplete = ref(false);

// 체크박스 동의 여부 확인
const agreeCheckbox = ref(false);

const changeSelected = (item) => {
    selected.value = item;
};

const submitInquiry = () => {
    if (selected.value && agreeCheckbox.value) {
        // 필수 입력란 모두 작성되고 체크박스에 동의한 경우 처리
        isFormComplete.value = true;
    } else {
        isFormComplete.value = false;
    }
};
</script>

<template>
    <div class="Inquiry_container main-layout">
        <div class="Inquiry_container_inner mob-inner">
            <div class="inquiry-guide">
                <div class="txt-box">
                    <p>빠른 문제 해결을 위해</p>
                    <p><span>자주 묻는 질문</span>에서 해당 내용을 찾아볼까요?</p>
                </div>
                <router-link to="/FAQ" class="f-12-400">바로가기</router-link>
            </div>
            <div class="inquiry-list">
                <div class="inquiry-list-tit f-16-700">어떤 걸 문의하시나요?</div>
                <ul class="inquiry-list-ul">
                    <li v-for="inquiryItems in inquiryList" :key="inquiryItems" @click="selected = inquiryItems" :class="{ selected: selected == inquiryItems }">
                        <button>{{ inquiryItems }}</button>
                    </li>
                </ul>
            </div>
            <!-- 
                문의종류를 누르면 그에 맞게 제목이 자동 완성되며,
                사용자가 직접 제목 변경 가능함(상세내용은 후에 추가)
            -->
            <div class="inquiry-form">
                <div class="inquiry-form-tit">
                    <p class="f-16-700">문의 제목과 내용을 작성해주세요<span class="f-12-400">*필수작성</span></p>
                </div>
                <div class="form-group2">
                    <input type="text" name="" id="" placeholder="제목*" required />
                </div>
                <!-- 문의종류에 따라 내용 기본 양식이 변경됨(상세내용은 후에 추가) -->
                <div class="form-group2">
                    <textarea name="" id="" placeholder="내용*" required></textarea>
                </div>
                <!-- 첨부파일 클릭 시 [ 사진 보관함 / 사진 찍기 / 파일 선택 ] 오픈 -->
                <div class="form-group2">
                    <input type="file" />
                    <label for=""><span>첨부파일+</span></label>
                </div>
            </div>
            <div class="inquiry-receive">
                <div class="inquiry-receive-tit f-16-700">답변받을 이메일 주소를 작성해주세요</div>
                <!-- 회원정보에 맞게 자동완성 되지만, 사용자가 직접 내용 변경 가능 -->
                <div class="form-group2">
                    <input type="text" name="mb-name" id="mb-name" placeholder="김위즈" />
                </div>
                <div class="form-group2">
                    <input type="email" name="mb-email" id="mb-email" placeholder="userwiz@gmail.com" />
                </div>
                <div class="inquiry-receive-guide">
                    <p>문의 답변은 작성하신 이메일 주소로 전송됩니다.</p>
                    <p>답변은 평균 7일 정도 소요됩니다.</p>
                </div>
            </div>
        </div>
        <div class="bott-btn">
            <div class="form-group">
                <input type="checkbox" name="wr_1" id="wr_1" />
                <label for="wr_1"><span></span>개인정보 수집 및 이용 동의</label>
            </div>
            <!-- 필수 입력란 모두 작성 시 전송 버튼 활성화 -->
            <button class="f-16-700">이메일 문의 전송</button>
        </div>
    </div>
</template>
