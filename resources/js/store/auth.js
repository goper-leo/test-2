import axios from 'axios'

export default {

    /**
     * Namespace module
     *
     * @type {Boolean}
     * @author {goper}
     */
    namespaced: true,

    /**
     * State
     *
     * @type {Object}
     * @author {goper}
     */
    state: {
        user: null,
        token: null
    },

    /**
     * Mutations
     *
     * @type {Object}
     * @author {goper}
     */
    mutations: {

        /**
         * Fill items
         *
         * @param  {State} state                                the state to use
         * @param  {Object} payload                             the payload
         * @return {void}
         * @author {goper}
         */
        fill(state, payload) {
            state.user = payload.user
            localStorage.setItem('user', JSON.stringify(payload))
            axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`
        },

        /**
         * Update user profile data
         * @param  {[type]} state
         * @param  {[type]} payload
         * @return {void}
         */
        fillUserData(state, payload) {
            state.user = payload
        },

        /**
         * Clear user data
         * @param  {[type]} state
         * @return {[type]}
         */
        clearUserData(state) {
            localStorage.removeItem('user')
            state.user = {}
            location.reload()
        },


    },

    /**
     * Actions
     *
     * @type {Object}
     * @author {goper}
     */
    actions: {

        /**
         * Fetch ip_whitelist
         *
         * @param  {Function} commit                        the commit method to use
         * @param  {Object} [payload={}]                    the payload
         * @return {Promise}
         * @author {goper}
         */
        async login({ commit }, credentials) {
            try {
                const { data: { data } } = await axios.post('/api/auth/login', credentials)
                commit('fill', data)
                return true
            } catch (err) {
                return false
            }

        },

        /**
         * Logout user
         * @param  {[type]} commit
         * @return {[type]}
         */
        logout({ commit }) {
            commit('clearUserData')
        },

        async fetchUserProfile({ commit }) {
            const { data: { data } } = await axios.get('/api/me')
            commit('fillUserData', data)
        },
    },

    /**
     * Getters
     *
     * @type {Object}
     * @author {goper}
     */
    getters: {

        /**
         * User getter
         *
         * @param  {State} state                            the state to use
         * @return {Array}
         * @author {goper}
         */
        user(state) {
            return state.user
        },

        /**
         * Check if this user is an admin
         * @param  {[type]}  state
         * @return {Boolean}
         */
        isAdmin(state) {
            return state.user ? state.user.is_admin : false
        },

        /**
         * Check user is logged in
         * @param  {[type]}  state
         * @return {Boolean}
         */
        isLogged: state => !!state.user

    }
};
