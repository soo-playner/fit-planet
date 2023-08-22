import Axios from "@/store/customAxios"

const state = () => ({
    // 전체 플레이스
    places: [
        { 
            id: "test1",
            name : '위즈짐1', 
            scope : '4.3',
            totalScope : '12',
            location : '서울 강남구 삼성로86길 11',
            comment : '1운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
        },
        { 
            id: "test2",
            name : '위즈짐2', 
            scope : '4.3',
            totalScope : '12',
            location : '서울 강남구 삼성로86길 11',
            comment : '2운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
        },
        { 
            id: "test3",
            name : '위즈짐3', 
            scope : '4.3',
            totalScope : '12',
            location : '서울 강남구 삼성로86길 11',
            comment : '3운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
        },
        { 
            id: "test4",
            name : '위즈짐4', 
            scope : '4.3',
            totalScope : '12',
            location : '서울 강남구 삼성로86길 11',
            comment : '4운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.4운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.'
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
    namespaced: true,   // 유일 속성명
    state,
    getters,
    actions,
    mutations,
}