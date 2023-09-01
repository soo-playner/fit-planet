<script setup>
import { ref, watch } from "vue";
import useAjaxRequest from "@/composables/useAjaxRequest";
import useUploadFile from "../../composables/useUploadFile";

const reviewText = ref("");
const wordCount = ref(0);
const scope = ref(1);

const allowType = ["jpg", "jpeg", "png", "gif"];
const { fileData, uploadFile, deleteFile } = useUploadFile(allowType, 8, 3);
const { postData, resData } = useAjaxRequest();

const updateWordCount = () => {
    wordCount.value = reviewText.value.length;
};

const scopeHandler = (e) => {
    scope.value = Number(e.target.dataset.idx);
};

const submitData = async () => {
    if (wordCount.value < 50) return alert("50자 이상 작성해 주세요.");
    const formData = new FormData();
    formData.append("review_text", reviewText.value);
    formData.append("review_scope", scope.value);
    fileData.forEach((el) => {
        formData.append("review_image", el.file);
    });
    const res = await postData("api", formData);
    alert(res.msg);
    if (res.code !== 200) return;
};
</script>

<template>
    <div class="ReviewWrite_container main-layout">
        <div class="ReviewWrite_container_inner mob-inner">
            <!-- 결제 상품 -->
            <div class="product">
                <div class="left-column">
                    <p class="f-14-700"><span class="trainer-name">김위즈</span>트레이너<span class="center-name">(위즈짐)</span></p>
                    <span class="class-name f-14-400">바디 프로필 프로젝트 30회</span>
                </div>
                <div class="right-column center-img"></div>
            </div>
            <!-- 운동은 만족스러웠나요? -->
            <div class="scope-select">
                <div class="scope-select-tit f-14-700">운동은 만족스러웠나요?</div>
                <span class="scope-current f-12-400">만족해요</span>
                <div class="starBox">
                    <div class="star" v-for="(star, idx) in scope" :key="star" :data-idx="idx + 1" @click="scopeHandler">★</div>
                    <div class="star" v-for="(star_empty, idx) in 5 - scope" :key="star_empty" :data-idx="scope + (idx + 1)" @click="scopeHandler">☆</div>
                </div>
            </div>
            <!-- 사진을 게시해 주세요 -->
            <div class="album">
                <div class="album-tit f-14-700">사진을 게시해 주세요</div>
                <span class="f-12-400">
                    <span>이미지가 구매한 운동상품과 관련이 없을 경우</span>
                    <span>쿠폰이 지급되지 않습니다.</span>
                </span>
                <div class="album-select">
                    <button class="album-plus" :class="{ none: !fileData[0] }">
                        <span class="plus-shape"></span>
                        <input type="file" id="mb-review" name="mb-review" multiple @change="uploadFile" />
                        <img v-show="fileData[0]" :src="fileData[0] && fileData[0].url" />
                    </button>
                    <div class="album-select-img" :class="{ none: !fileData[1] }">
                        <img v-show="fileData[1]" :src="fileData[1] && fileData[1].url" />
                    </div>
                    <div class="album-select-img" :class="{ none: !fileData[2] }">
                        <img v-show="fileData[2]" :src="fileData[2] && fileData[2].url" />
                    </div>
                </div>
            </div>
            <!-- 후기를 작성해 주세요 -->
            <div class="review-input">
                <div class="review-input-tit f-14-700">후기를 작성해 주세요</div>
                <div class="review-textarea">
                    <textarea v-model="reviewText" cols="30" rows="10" placeholder="50자 이상 작성해주세요." @input="updateWordCount"></textarea>
                    <span class="word-count f-12-400">{{ wordCount }}</span>
                </div>
            </div>
            <!-- 경고 문구 -->
            <div class="review-warning">
                <ul class="warning-list">
                    <li>
                        <span></span>
                        <p>상품과 무관하거나 비속어가 포함된 리뷰, 그 외 후기 운영정책에 위배되는 후기는 고지 없이 블라인드 후 경고조치 됩니다. <router-link to="/">후기 운영정책 보기</router-link></p>
                    </li>
                    <li><span></span>경고 누적 시 후기 작성이 제한될 수 있습니다.</li>
                </ul>
                <button class="next-step-btn f-16-700" @click="submitData">후기 업로드 하기</button>
            </div>
        </div>
    </div>
</template>
