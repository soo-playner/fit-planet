<script setup>
import axios from "axios";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

const store = useStore();

const joinResult = ref("requesting");

// Variables
let canvas, confetti;
const rectangles = ref([]);
const bgColor = ["#ffafb0", "#ffafd8", "#eeb7b4", "#fdfa87", "#b5c7ed", "#afffba", "#f2cfa5", "#fcc6f7"];

// Functions
function createRectangle() {
    const x = Math.random() * window.innerWidth;
    const y = -10;
    const width = 5;
    const height = Math.random() + 10;
    const speed = Math.random() * 3;
    const delay = Math.random() * 3000;
    const rotation = Math.random() * 360;
    const color = bgColor[Math.floor(Math.random() * bgColor.length)];

    rectangles.value.push({ x, y, width, height, color, speed, delay, rotation });
}

function drawRectangle(x, y, width, height, color) {
    confetti.fillStyle = color;
    confetti.fillRect(x, y, width, height);
}

function clearRect() {
    confetti.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    clearRect();

    for (let i = 0; i < rectangles.value.length / 3; i++) {
        const rect = rectangles.value[i];

        if (rect.delay <= 0) {
            confetti.save();

            confetti.translate(rect.x + rect.width / 2, rect.y + rect.height / 2);
            confetti.rotate((rect.rotation * Math.PI) / 180);

            drawRectangle(rect.width * Math.floor(Math.random() + 2), -rect.height, rect.width, rect.height, rect.color);
            confetti.restore();

            rect.y += rect.speed;
            rect.rotation += rect.speed;

            if (rect.y > canvas.height) {
                rectangles.value.splice(i, 5);
            }
        } else {
            rect.delay -= 5;
        }
    }
    createRectangle();
    requestAnimationFrame(animate);
}

function windowOnResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    rectangles.value = [];
    location.reload();
}

onMounted(async () => {
    // const res = await axios.post("api", { ...store.state.join.joinData });
    // if (!res.data.result) return (joinResult.value = "fail");
    joinResult.value = "success";

    canvas = document.querySelector(".complete-canvas");
    if (canvas == null || canvas.getContext == null) return;
    confetti = canvas.getContext("2d");

    const canvasSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    animate();
    window.addEventListener("resize", windowOnResize, false);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", windowOnResize, false);
});
</script>

<template>
    <div class="member_container complete">
        <canvas class="complete-canvas"></canvas>
        <div class="member_container_inner mob-inner">
            <div class="txt-box" v-show="joinResult === 'success'">
                <div class="f-16-400">핏플래닛 가입 완료!</div>
                <div class="f-24-700">
                    <!-- <p>위즈위즈님</p>
                    <p>환영합니다!</p> -->
                    위즈위즈님<br />
                    환영합니다!
                </div>
            </div>
            <div class="txt-box" v-show="joinResult === 'fail'">
                <div class="f-16-400">핏플래닛 가입 실패</div>
                <div class="f-24-700">
                    <!-- <p>위즈위즈님</p>
                    <p>환영합니다!</p> -->
                    회원가입에 실패하였습니다.<br />
                    다시 시도해주세요.
                </div>
            </div>
        </div>
        <button class="btn1 mob-inner" @click="$router.push('/authority')">핏플래닛 시작하기</button>
    </div>
</template>
