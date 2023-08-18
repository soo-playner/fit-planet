<script setup></script>

<template>
    <div class="place-sorting-modal member_alert comm_modal_layout">
        <div class="overlay"></div>
        <div class="place-sorting-modal-inner mob-inner member_alert_inner">
            <div class="sorting-tit comm_modal_layout_tit">
                <p class="f-16-700">정렬 기준</p>
                <button class="close"></button>
            </div>
            <ul class="sorting-list comm_modal_layout_tit_list">
                <li>
                    <input type="radio" id="t_sorting_1_1" name="t_sorting" value="최신순">
                    <label for="t_sorting_1_1">
                        최신순
                        <span class="outSide">
                            <span></span>
                        </span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="t_sorting_1_2" name="t_sorting" value="별점 높은 순">
                    <label for="t_sorting_1_2">
                        별점 높은 순
                        <span class="outSide">
                            <span></span>
                        </span>
                    </label>
                </li>
            </ul>
            <button class="bott-btn f-16-700" >확인</button>
        </div>
    </div>
</template>