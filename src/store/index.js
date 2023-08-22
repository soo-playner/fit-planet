import Vuex from 'vuex'
import auth from './modules/user/auth'
import trainer from './modules/services/trainer'
import place from './modules/services/place'
import review from './modules/services/review'

// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    auth,
    trainer,
    place,
    review,
  },
//   strict: debug,
})