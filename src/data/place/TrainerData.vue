<script>
    export default {
        name : 'TrainerData',
        props : {
            data : Object
        }
    }
</script>

<template>
    <div class="TrainerData-form">
        <div class="top-column">
            <div class="left-row">
                <div class="trainer-info">
                    <p class="f-16-700">{{ data.trainerName }} 트레이너</p>
                    <div class="starBox">
                        <div class="star">★</div>
                        <p class="total-scope f-12-400">
                            <span>{{ data.trainerScope }}</span>
                            <span>({{ data.trainerTotalScope }})</span>
                        </p>
                    </div>
                </div>
                <div class="location-info f-12-400">
                    <p><img src="@/assets/image/place-map.png" alt="플레이스 위치">{{ data.trainerCenterName }}</p>
                    <p>{{ data.trainerLocation }}</p>
                </div>
            </div>
            <div class="right-row trainer-img-box"></div>
        </div>
        <div class="bott-column trainer-comment f-12-400">“{{ data.trainerCommnet }}"</div>
    </div>
</template>