import Axios from "@/store/customAxios";

const state = () => ({
    joinData: {
        id: "",
        pw: "",
        name: "",
        email: "",
        phone: "",
        birthDate: "",
        gender: "",
        nickname: "",
        receiveAD: false,
    },
});

// getters
const getters = {};

// actions: 비동기식 로직
const actions = {};

// mutations: state 업데이트용 동기 트랜잭션
const mutations = {
    resetJoinData() {
        state.joinData = {
            id: "",
            pw: "",
            name: "",
            email: "",
            phone: "",
            birthDate: "",
            gender: "",
            nickname: "",
            receiveAD: false,
        };
    },
    updateJoinData(state, payload) {
        state.joinData = { ...state.joinData, ...payload };
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
