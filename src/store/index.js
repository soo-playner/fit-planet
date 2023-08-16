import Vuex from 'vuex'
import auth from './modules/user/auth'
import trainer from './modules/services/trainer'
import place from './modules/services/place'

// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    auth,
    trainer,
    place,
  },
//   strict: debug,
})