<script>
    export default {
        name : 'PlaceData',
        props : {
            data : Object
        }
    }
</script>

<template>
    <div class="PlaceData-form">
        <div class="top-column">
            <div class="left-row">
                <div class="place-txt-box">
                    <div class="place-info">
                        <p class="f-16-700">{{ data.placeName }}</p>
                        <div class="starBox">
                            <div class="star">★</div>
                            <p class="total-scope f-12-400">
                                <span>{{ data.placeScope }}</span>
                                <span>({{ data.placeTotalScope }})</span>
                            </p>
                        </div>
                    </div>
                    <div class="location-info f-12-400">서울 강남구 삼성로86길 11</div>
                </div>
                <ul class="place-filter-list">
                    <li>24시</li>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                </ul>
            </div>
            <div class="right-row place-img-box"></div>
        </div>
        <div class="bott-column place-comment f-12-400">운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.</div>
    </div>
</template>