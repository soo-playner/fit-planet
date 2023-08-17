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
    }
}

// mutations: state 업데이트용 동기 트랜잭션
const mutations = {
    setUser(state, user) {
        state.user = user;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}