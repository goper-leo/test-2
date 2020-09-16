import Vue from 'vue'
import Vuex from 'vuex'
// Modules
import auth from '@js/store/auth'

Vue.use(Vuex)

const Store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        auth,
    }
})

export default Store
