import Axios from "@/store/customAxios"

const state = () => ({
    // 전체 트레이너
    trainers: [
        {
            name : '김위즈1',
            scope : '4.3',
            totalScope : '12',
            gymName : '위즈짐',
            address : '서울 강남구 대치동',
            comment : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요',
            pricePerSession: 50000,
        },
        {
            name : '박위즈4',
            scope : '4.0',
            totalScope : '12',
            gymName : '위즈짐',
            address : '서울 강남구 대치동',
            comment : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요',
            pricePerSession: 29900,
        },
        {
            name : '이위즈3',
            scope : '1.3',
            totalScope : '12',
            gymName : '위즈짐',
            address : '서울 강남구 대치동',
            comment : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요',
            pricePerSession: 75000,
        },
        {
            name : '김위즈4',
            scope : '2.3',
            totalScope : '12',
            gymName : '위즈짐',
            address : '서울 강남구 대치동',
            comment : '김위즈 트레이너님을 만나 10kg 감량에 성공했어요! 앞으로도 김위즈 트레이너님과 쭉 다이어트 성공길만 걷고싶어요',
            pricePerSession: 80000,
        },
    ],
    // 현재 보고 있는 트레이너 정보
    currentTrainer: {}
})


// getters
const getters = {
    getTrainers: (state, getters, rootState) => {
        return state.trainers
    },
}

// actions
const actions = {
    getTrainerDetail({commit, state}, {trainerId}) {
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