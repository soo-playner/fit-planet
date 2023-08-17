<script setup>
</script>

<template>
    <div class="PlaceTrainer_container main-layout">
        <div class="PlaceTrainer_container_inner mob-inner">
            <div class="place-trainer-list" v-for="placeTrainerItem in 5" :key="placeTrainerItem">
                <div class="trainer-info">
                    <span class="rank">센터장</span>
                    <div>
                        <p><span>김위즈</span>트레이너</p>
                        <span class="arrow"></span>
                    </div>
                </div>
                <div class="trainer-comment">“김위즈 트레이너 님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요"</div>
            </div>
        </div>
    </div>
</template>