import Axios from "@/store/customAxios"

const state = () => ({
    // 전체 플레이스
    places: [
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
    ],
    // 현재 보고 있는 플레이스 정보
    currentPlace: {}
})


// getters
const getters = {
    getPlaces: (state, getters, rootState) => {
        return state.places
    },
}

// actions
const actions = {
    getPlaceDetail({commit, state}, {placeId}) {
        Axios.get(``)
        .then(({data}) => {

        }).catch(err => {
            
        })
    }
}

// mutations
const mutations = {
}

export default {
    state,
    getters,
    actions,
    mutations,
}