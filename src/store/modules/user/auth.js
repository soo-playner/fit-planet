import Axios from "@/store/customAxios"

const state = () => ({
    user: {
        id: '',
        name: '김위즈',
        email: 'userwiz@gmail.com',
        phone: '01039392020',
        birthDate: '2020-02-10',
        gender: 'F',
        nickname: '위즈위즈',
    },
})

// getters
const getters = {
    getUser: (state, getters, rootState) => {
        return state.user
    }
}


// actions: 비동기식 로직
const actions = {
    login({commit, state}, user) {
        Axios.get(``)
        .then(({data}) => {

        }).catch(err => {
            
        })
    },
    // 닉네임 중복 확인
    checkDuplicateNickname({commit, state}, nickname) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("updateUser", nickname)
                resolve({isDuplicate: false})
            }, 1000)
        })
    }
}

// mutations: state 업데이트용 동기 트랜잭션
const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    // payload: [Object] 유저가 기입한 정보
    updateUser(state, payload) {
        state.user = {...state.user, ...payload};
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}