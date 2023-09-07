<script setup>
import {defineProps} from 'vue'

const { closeModal } = defineProps({
    closeModal : Function,
});
</script>

<template>
    <div class="discover-sorting-modal member_alert comm_modal_layout" style="opacity:1; visibility:visible;">
        <div class="overlay" @click="closeModal"></div>
        <div class="discover-sorting-modal-inner mob-inner member_alert_inner comm_modal_layout-inner">
            <div class="sorting-tit comm_modal_layout_tit">
                <p class="f-14-700">정렬 기준</p>
                <button class="close" @click="closeModal"></button>
            </div>
            <ul class="sorting-list comm_modal_layout_tit_list">
                <li>
                    <input type="radio" id="d_sorting_1_1" name="d_sorting" value="거리순" checked>
                    <label for="d_sorting_1_1">
                        최신순
                        <span class="outSide"></span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="d_sorting_1_2" name="d_sorting" value="별점 높은 순">
                    <label for="d_sorting_1_2">
                        좋아요 순
                        <span class="outSide"></span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="d_sorting_1_3" name="d_sorting" value="최신순">
                    <label for="d_sorting_1_3">
                        별점 높은 순
                        <span class="outSide"></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>