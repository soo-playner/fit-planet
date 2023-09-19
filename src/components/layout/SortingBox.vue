<script setup>
import { ref, defineProps, defineEmits } from "vue";
const { closeModal, typeList, currentType, id } = defineProps({
    closeModal: Function,
    typeList: Array,
    id: Number,
    currentType: String,
});
const emit = defineEmits(["sorting", "close"]);
const selected = ref("");
const selectType = (e) => {
    console.log(e.target);
    selected.value = e.target.value;
    emit("sorting", e.target.value);
    closeModal();
};
</script>

<template>
    <div class="discover-sorting-modal member_alert comm_modal_layout" style="opacity: 1; visibility: visible">
        <div class="overlay"></div>
        <div class="discover-sorting-modal-inner mob-inner member_alert_inner comm_modal_layout-inner">
            <div class="sorting-tit comm_modal_layout_tit">
                <p class="f-14-700">정렬 기준</p>
                <button class="close" @click="closeModal"></button>
            </div>
            <ul class="sorting-list comm_modal_layout_tit_list">
                <li v-for="(type, idx) in typeList" :key="idx" @click="selectType">
                    <input type="radio" :id="'d_sorting_' + id + idx" :name="'d_sorting_' + id" :value="type" :checked="type === currentType" />
                    <label :for="'d_sorting_' + id + idx">
                        {{ type }}
                        <span class="outSide"></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>
