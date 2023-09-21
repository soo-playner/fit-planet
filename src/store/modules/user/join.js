import Axios from "@/store/customAxios";

const state = () => ({
    joinData: {
        mb_email: "",
        password: "",
        password_repeat: "",
        mb_name: "",
        mb_phone: "",
        mb_birth: "",
        mb_gender: "",
        mb_nickname: "",
        mb_privacy_agree: false,
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
            mb_email: "",
            password: "",
            password_repeat: "",
            mb_name: "",
            mb_phone: "",
            mb_birth: "",
            mb_gender: "",
            mb_nickname: "",
            mb_privacy_agree: false,
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
