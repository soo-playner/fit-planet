<script>
    import JoinCurrent from '../../components/layout/JoinCurrent';

    export default {
        name : 'JoinComplete',
        components : {
            JoinCurrent
        },
        mounted(){
            var canvas, confetti;
            var rectangles = [];

            window.onload = function(){
                canvas = document.querySelector('.complete-canvas');
                if(canvas == null || canvas.getContext == null) return;
                confetti = canvas.getContext('2d');
                
                // 캔버스 사이즈 조정
                const canvasSize = {
                    width : window.innerWidth,
                    height : window.innerHeight
                }
                canvas.width = canvasSize.width;
                canvas.height = canvasSize.height;

                // 사각형 생성
                function createRectangle(){
                    var bgColor = ['#ffafb0', '#ffafd8', '#eeb7b4', '#fdfa87', '#b5c7ed', '#afffba', '#f2cfa5', '#fcc6f7'];
                    let x = Math.random() * window.innerWidth;
                    let y = -10;
                    let width = 5;
                    let height = Math.random() + 10;
                    let speed = Math.random() * 3;
                    let delay = Math.random() * 3000;
                    let rotation = Math.random() * 360;
                    let color = bgColor[Math.floor(Math.random() * bgColor.length)];

                    rectangles.push({ x, y, width, height, color, speed, delay, rotation });
                }

                // 사각형 그리기
                function drawRectangle(x, y, width, height, color){
                    confetti.fillStyle = color;
                    confetti.fillRect(x, y, width, height);
                }

                // animate 루프 함수 실행 시 rect 초기화
                function clearRect(){
                    confetti.clearRect(0, 0, canvas.width, canvas.height);
                }

                function animate(){
                    clearRect();

                    for(var i=0; i <rectangles.length / 3; i++){            
                        let rect = rectangles[i];

                        if(rect.delay <= 0){
                            confetti.save();

                            confetti.translate(rect.x + rect.width / 2, rect.y + rect.height / 2);
                            confetti.rotate((rect.rotation * Math.PI) / 180);
                
                            drawRectangle(rect.width * Math.floor(Math.random() + 2), -rect.height, rect.width, rect.height, rect.color);
                            confetti.restore();
                
                            rect.y += rect.speed;
                            rect.rotation += rect.speed;

                            if (rect.y > canvas.height) {
                                rectangles.splice(i, 5);
                            }
                        }else{
                            rect.delay -= 5;
                        }
                    }
                    createRectangle();
                    requestAnimationFrame(animate);
                }
                animate();
            }

            function windowOnResize(){
                canvas.width = canvasSize.width;
                canvas.height = canvasSize.height;
                location.reload();
            }
            window.addEventListener('resize', windowOnResize, false);
        }
    }
</script>

<template>
    <JoinCurrent/>
    <div class="member_container last JoinComplete">
        <canvas class="complete-canvas"></canvas>
        <div class="member_container_inner mob-inner">
            <div class="intro-txt-box">
                <div class="f-16-400">핏플래닛 가입 완료!</div>
                <div class="f-24-700">
                    <p><span class="nickname">위즈위즈</span>님</p>
                    <p>환영합니다!</p>
                </div>
            </div>
            <router-link to="/Authority" class="next-step-btn f-16-700">핏플래닛 시작하기</router-link>
        </div>
    </div>
</template>