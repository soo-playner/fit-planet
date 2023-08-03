<script>
export default {
  name: "RangeBar",
  data() {
    return {
      thumbRightX: null,
      thumbLeftX: null,
      rangeRight: 0,
      rangeLeft: 0,
    };
  },
  props: {
    defaultRangeR: Number,
    defaultRangeL: Number,
    defaultMinValue: Number,
    defaultMaxValue: Number,
  },
  methods: {
    setLeftValue(e) {
      const _this = this.$refs.inputLeft;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
      _this.value = Math.min(parseInt(_this.value), parseInt(this.$refs.inputRight.value) - 1);
      const percent = ((_this.value - min) / (max - min)) * 100;
      this.thumbLeftX = percent + "%";
      this.rangeLeft = percent + "%";
      console.log(e.target.value);
    },
    setRigthValue(e) {
      const _this = this.$refs.inputRight;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
      _this.value = Math.max(parseInt(_this.value), parseInt(this.$refs.inputLeft.value) + 1);
      const percent = ((_this.value - min) / (max - min)) * 100;
      this.thumbRightX = 100 - percent + "%";
      this.rangeRight = 100 - percent + "%";
      console.log(e.target.value);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
}

.middle {
  position: relative;
  width: 50%;
  max-width: 500px;
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
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 50%;
}

.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}

input[type="range"] {
  position: absolute;
  /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;
}

input[type="range"]::-webkit-slider-thumb {
  /* 겹쳐진 두 thumb를 모두 활성화 */
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  cursor: pointer;
  /* appearance를 해야 위의 스타일들을 볼 수 있음 */
  -webkit-appearance: none;
}
</style>

<template>
  <!-- 사용예시 : <RangeBar :defaultMinValue="0" :defaultMaxValue="100" :defaultRangeR="75" :defaultRangeL="25" /> -->
  <input id="range" type="range" />
  <div class="middle">
    <div class="multi-range-slider">
      <!-- 실제 슬라이더 -->
      <input type="range" :min="defaultMinValue" :max="defaultMaxValue" :value="defaultRangeL" ref="inputLeft" :oninput="setLeftValue" />
      <input type="range" :min="defaultMinValue" :max="defaultMaxValue" :value="defaultRangeR" ref="inputRight" :oninput="setRigthValue" />

      <!-- 커스텀 슬라이더 -->
      <div class="slider">
        <div class="track"></div>
        <div class="range" ref="range" v-bind:style="{ left: rangeLeft, right: rangeRight }"></div>
        <div class="thumb left" ref="thumbLeft" v-bind:style="{ left: thumbLeftX }"></div>
        <div class="thumb right" ref="thumbRight" v-bind:style="{ right: thumbRightX }"></div>
      </div>
    </div>
  </div>
</template>
