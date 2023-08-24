<script>
export default {
    name: "RangeBar",
    data() {
        return {
            thumbRightX: null,
            thumbLeftX: null,
            rangeRight: 1,
            rangeLeft: 1,
        };
    },
    props: {
        defaultRangeR: Number,
        defaultRangeL: Number,
        defaultMinValue: Number,
        defaultMaxValue: Number,
    },
    methods: {
        setLeftValue() {
            const _this = this.$refs.inputLeft;
            const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
            _this.value = Math.min(parseInt(_this.value), parseInt(this.$refs.inputRight.value) - 1);
            const percent = ((_this.value - min) / (max - min)) * 100;
            this.thumbLeftX = percent + "%";
            this.rangeLeft = percent + "%";
        },
        setRigthValue() {
            const _this = this.$refs.inputRight;
            const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
            _this.value = Math.max(parseInt(_this.value), parseInt(this.$refs.inputLeft.value) + 1);
            const percent = ((_this.value - min) / (max - min)) * 100;
            this.thumbRightX = 100 - percent + "%";
            this.rangeRight = 100 - percent + "%";
        },
    },
    mounted() {
        this.thumbRightX = (1 - this.defaultRangeR / this.defaultMaxValue) * 100 + "%";
        this.thumbLeftX = (this.defaultRangeL / this.defaultMaxValue) * 100 + "%";
        this.rangeRight = (1 - this.defaultRangeR / this.defaultMaxValue) * 100 + "%";
        this.rangeLeft = (this.defaultRangeL / this.defaultMaxValue) * 100 + "%";
    },
    watch: {
        rangeRight() {
            console.log("오른쪽:", this.$refs.inputRight.value, Math.round(this.defaultMaxValue * ((100 - Number(this.thumbRightX.split("%")[0])) / 100)));
            console.log("왼쪽:", this.$refs.inputLeft.value, Math.round(this.defaultMaxValue * (Number(this.thumbLeftX.split("%")[0]) / 100)));
            this.$emit("changeRange", { min: this.$refs.inputLeft.value, max: this.$refs.inputRight.value });
        },
        rangeLeft() {
            console.log("오른쪽:", this.$refs.inputRight.value, Math.round(this.defaultMaxValue * ((100 - Number(this.thumbRightX.split("%")[0])) / 100)));
            console.log("왼쪽:", this.$refs.inputLeft.value, Math.round(this.defaultMaxValue * (Number(this.thumbLeftX.split("%")[0]) / 100)));
            this.$emit("changeRange", { min: this.$refs.inputLeft.value, max: this.$refs.inputRight.value });
        },
    },
};
</script>

<style>
.range-wrap {
    margin: 18px 0;
    width: 100%;
    /* border: 1px solid red; */
}

.middle {
    position: relative;
    width: 100%;
    /* max-width: 500px; */
}

.slider {
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;
}

.slider > .track {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #000;
}

.slider > .range {
    position: absolute;
    z-index: 2;
    left: 25%;
    right: 25%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #000;
}

.slider > .thumb {
    position: absolute;
    z-index: 3;
    width: 24px;
    height: 24px;
    background-color: #f1f1f1;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
}

.slider > .thumb::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    background-color: #000;
    z-index: 10;
}

.slider > .thumb.left {
    left: 25%;
    transform: translate(-12px, -8px);
}
.slider > .thumb.right {
    right: 25%;
    transform: translate(12px, -8px);
}

input[type="range"] {
    position: absolute;
    /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 8px;
    width: 100%;
    opacity: 0;
}

input[type="range"]::-webkit-slider-thumb {
    /* 겹쳐진 두 thumb를 모두 활성화 */
    pointer-events: all;
    width: 24px;
    height: 24px;
    border-radius: 0;
    border: 0 none;
    background-color: red;
    cursor: pointer;
    /* appearance를 해야 위의 스타일들을 볼 수 있음 */
    -webkit-appearance: none;
}
</style>

<template>
    <div class="range-wrap">
        <!-- 사용예시 : <RangeBar :defaultMinValue="0" :defaultMaxValue="100" :defaultRangeL="25" :defaultRangeR="75"/> -->
        <!-- <input id="range" type="range" /> -->
        <div class="middle">
            <div class="multi-range-slider">
                <!-- 실제 슬라이더 -->
                <input
                    type="range"
                    :min="defaultMinValue"
                    :max="defaultMaxValue"
                    :value="thumbLeftX ? Math.round(defaultMaxValue * (Number(thumbLeftX.split('%')[0]) / 100)) : defaultRangeL"
                    ref="inputLeft"
                    :oninput="setLeftValue"
                />
                <input
                    type="range"
                    :min="defaultMinValue"
                    :max="defaultMaxValue"
                    :value="thumbRightX ? Math.round(defaultMaxValue * ((100 - Number(thumbRightX.split('%')[0])) / 100)) : defaultRangeR"
                    ref="inputRight"
                    :oninput="setRigthValue"
                />

                <!-- 커스텀 슬라이더 -->
                <div class="slider">
                    <div class="track"></div>
                    <div class="range" ref="range" v-bind:style="{ left: rangeLeft, right: rangeRight }"></div>
                    <div class="thumb left" ref="thumbLeft" v-bind:style="{ left: thumbLeftX }"></div>
                    <div class="thumb right" ref="thumbRight" v-bind:style="{ right: thumbRightX }"></div>
                </div>
            </div>
        </div>
    </div>
</template>
