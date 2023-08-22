import Axios from "@/store/customAxios"

const state = () => ({
    // 전체 플레이스
    reviewsByPlaces: [
        {
            id: "test1",
            writer: "위즈위즈",
            rating: 4,
            date: "3개월 전",
            likeCnt: 6,
            comment: "운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.",
            reply: "위즈위즈 회원님 후기 감사합니다! 앞으로도 저희 플레이스 많이 이용해주세요!",
            replyDate: "10시간 전",
        },
        {
            id: "test2",
            writer: "즈위즈위",
            rating: 5,
            date: "2개월 전",
            likeCnt: 100,
            comment: "운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.",
            reply: "위즈위즈 회원님 후기 감사합니다! 앞으로도 저희 플레이스 많이 이용해주세요!",
            replyDate: "10시간 전",
        },
        {
            id: "test3",
            writer: "빗소리",
            rating: 3,
            date: "1개월 전",
            likeCnt: 3,
            comment: "운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.",
            reply: "위즈위즈 회원님 후기 감사합니다! 앞으로도 저희 플레이스 많이 이용해주세요!",
            replyDate: "10시간 전",
        },
        {
            id: "test4",
            writer: "타닥타닥",
            rating: 2,
            date: "15시간 전",
            likeCnt: 3,
            comment: "운동기구도 다양하고 운동복, 수건도 쓸 수 있어서 너무 만족스러웠습니다. 집 근처라 꾸준히 이용하게 될 것 같아요.",
            reply: "위즈위즈 회원님 후기 감사합니다! 앞으로도 저희 플레이스 많이 이용해주세요!",
            replyDate: "10시간 전",
        },
    ],
})


// getters
const getters = {
}

// actions
const actions = {
    getReviews({commit, state}, {placeId}) {
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