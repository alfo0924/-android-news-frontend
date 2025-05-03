import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        error: null
    },
    getters: {
        isLoading: state => state.isLoading,
        hasError: state => state.error !== null,
        error: state => state.error
    },
    mutations: {
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading
        },
        SET_ERROR(state, error) {
            state.error = error
        },
        CLEAR_ERROR(state) {
            state.error = null
        }
    },
    actions: {
        setLoading({ commit }, isLoading) {
            commit('SET_LOADING', isLoading)
        },
        setError({ commit }, error) {
            commit('SET_ERROR', error)
        },
        clearError({ commit }) {
            commit('CLEAR_ERROR')
        }
    },
    modules: {
        news
    }
})
