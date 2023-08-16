<script>
import Matter from "matter-js";

export default {
    name: "IntroPage",
    mounted() {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;

        var engine = Engine.create();

        var canvasSize = {
            width: 500,
            height: window.innerHeight,
        };

        var render = Render.create({
            element: document.querySelector(".matter_wrap"),
            engine: engine,
            options: {
                ...canvasSize,
                wireframes: false,
                background: "black",
            },
        });

        function rectangle(width, height) {
            // 요소의 크기 지정
            width = 150;
            height = 50;

            const loadImage = (url, onSuccess) => {
                // 이미지 노출 안 되어 추가
                const image = new Image();
                image.src = url;
                image.onload = () => {
                    onSuccess(image.src);
                };
            };

            for (let i = 0; i < 15; i++) {
                // 요소가 떨어지는 지점을 랜덤으로 구함
                let x = Math.random() * 250 + 200;
                let y = (Math.random() * canvasSize.width) / 2;

                setTimeout(() => {
                    loadImage(require(`@/assets/image/test${i + 1}.png`), (url) => {
                        var square = Bodies.rectangle(x, y, width, height, {
                            render: {
                                sprite: {
                                    texture: url,
                                },
                            },
                        });
                        World.add(engine.world, [square]);
                    });
                }, i * 150);
            }

            var leftWall = Bodies.rectangle(0, window.innerHeight - 200, 30, canvasSize.height, {
                isStatic: true,
                render: {
                    fillStyle: "black",
                },
            });
            var rightWall = Bodies.rectangle(500, window.innerHeight - 200, 30, canvasSize.height, {
                isStatic: true,
                render: {
                    fillStyle: "black",
                },
            });
            var bottomWall = Bodies.rectangle(510, window.innerHeight - 100, 1000, 50, {
                isStatic: true,
                render: {
                    fillStyle: "black",
                },
            });

            World.add(engine.world, [bottomWall, leftWall, rightWall]);
            Matter.Runner.run(engine);
            Render.run(render);
        }
        rectangle();

        function windowOnResize() {
            document.querySelector("canvas").width = document.querySelector(".matter_wrap").width;
            document.querySelector("canvas").height = window.innerHeight;
            location.reload();
        }
        window.addEventListener("resize", windowOnResize, false);
    },
};
</script>

<template>
    <div class="intro_container">
        <div class="matter_wrap"></div>
        <div class="intro_container-inner mob-inner">
            <div class="intro-txt-box">
                <p class="f-20-700">운동으로 연결되는 공간</p>
                <div class="img-box"><img src="@/assets/image/logo_w.png" alt="핏플래닛 로고" /></div>
            </div>
            <router-link to="/Login" class="f-16-700">시작하기</router-link>
        </div>
    </div>
</template>
