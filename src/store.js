import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            test:1 ,
            placeInfo : [
                { 
                    placeName : '위즈짐1', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '1운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
                },
                { 
                    placeName : '위즈짐2', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '2운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
                },
                { 
                    placeName : '위즈짐3', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '3운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
                },
                { 
                    placeName : '위즈짐4', 
                    placeScope : '4.3',
                    placeTotalScope : '12',
                    placeLocation : '서울 강남구 삼성로86길 11',
                    placeComment : '4운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
                },
            ]
        }
    },
})

export default store