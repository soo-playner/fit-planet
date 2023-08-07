<script>
    export default {
        name : 'PlaceData',
        props : {
            data : Object
        }
    }
</script>

<template>
    <div class="placeList-form">
        <div class="top-column">
            <div class="placeList-txt-box">
                <div class="placeList-info-1">
                    <div class="placeList-detail">
                        <p class="f-16-700">{{ data.placeName }}</p>
                        <div>
                            <img src="@/assets/image/scope.png" alt="별점">
                            <p class="f-12-400">
                                <span>{{ data.placeScope }}</span>
                                <span>({{ data.placeTotalScope }})</span>
                            </p>
                        </div>
                    </div>
                    <div class="placeList-add f-12-400">{{ data.placeLocation }}</div>
                </div>
                <ul class="placeList-info-2">
                    <li>24시</li>
                    <li>P.T</li>
                    <li>그룹 P.T</li>
                    <li>골프</li>
                </ul>
            </div>
            <div class="placeList-img-box"></div>
        </div>
        <div class="bott-column review">
            <p class="f-12-400">{{ data.placeComment }}</p>
        </div>
    </div>
</template>