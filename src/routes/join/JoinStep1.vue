<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinStep1',
        components : {
            JoinCurrent
        }
    }
</script>

<template> 
    <JoinCurrent/>
    <div class="join_container step1">
        <div class="join_container_inner mob-inner">
            <div class="form-group rep">
                <input type="checkbox" name="wr_1" id="wr_1" value="약관 전체동의">
                <label for="wr_1" class="f-14-700"><span></span>약관 전체동의</label>
            </div>
            <div class="check-list">
                <div class="form-group">
                    <input type="checkbox" name="wr_1_1" id="wr_1_1" value="약관 전체동의">
                    <label for="wr_1_1" class="f-14-400"><span></span>만 14세 이상입니다.</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" name="wr_1_2" id="wr_1_2" value="약관 전체동의" required>
                    <label for="wr_1_2" class="f-14-400"><span></span>(필수) 서비스 이용약관</label>
                    <button class="arrow"></button>
                </div>
                <div class="form-group">
                    <input type="checkbox" name="wr_1_3" id="wr_1_3" value="약관 전체동의" required>
                    <label for="wr_1_3" class="f-14-400"><span></span>(필수) 개인정보 처리방침</label>
                    <button class="arrow"></button>
                </div>
                <div class="form-group">
                    <input type="checkbox" name="wr_1_4" id="wr_1_4" value="약관 전체동의">
                    <label for="wr_1_4" class="f-14-400"><span></span>(선택) 마케팅 정보 수신동의</label>
                    <button class="arrow"></button>
                </div>
            </div>
        </div>
        <button class="next-step-btn f-16-700 mob-inner">다음</button>
    </div>
</template>