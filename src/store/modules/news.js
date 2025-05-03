import newsService from '@/services/newsService'

export default {
    namespaced: true,
    state: {
        latestNews: [],
        newsByCategory: {},
        currentNews: null,
        categories: [],
        totalPages: 1,
        currentPage: 1
    },
    getters: {
        latestNews: state => state.latestNews,
        newsByCategory: state => state.newsByCategory,
        currentNews: state => state.currentNews,
        categories: state => state.categories,
        totalPages: state => state.totalPages,
        currentPage: state => state.currentPage
    },
    mutations: {
        SET_LATEST_NEWS(state, news) {
            state.latestNews = news
        },
        SET_NEWS_BY_CATEGORY(state, { category, news }) {
            Vue.set(state.newsByCategory, category, news)
        },
        SET_CURRENT_NEWS(state, news) {
            state.currentNews = news
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_PAGINATION(state, { totalPages, currentPage }) {
            state.totalPages = totalPages
            state.currentPage = currentPage
        }
    },
    actions: {
        async fetchLatestNews({ commit, dispatch }, page = 1) {
            try {
                dispatch('setLoading', true, { root: true })
                const response = await newsService.getLatestNews(page)
                commit('SET_LATEST_NEWS', response.data.content)
                commit('SET_PAGINATION', {
                    totalPages: response.data.totalPages,
                    currentPage: response.data.number + 1
                })
                dispatch('setLoading', false, { root: true })
            } catch (error) {
                dispatch('setError', error.message || 'Failed to fetch latest news', { root: true })
                dispatch('setLoading', false, { root: true })
            }
        },
        async fetchNewsByCategory({ commit, dispatch }, { category, page = 1 }) {
            try {
                dispatch('setLoading', true, { root: true })
                const response = await newsService.getNewsByCategory(category, page)
                commit('SET_NEWS_BY_CATEGORY', {
                    category,
                    news: response.data.content
                })
                commit('SET_PAGINATION', {
                    totalPages: response.data.totalPages,
                    currentPage: response.data.number + 1
                })
                dispatch('setLoading', false, { root: true })
            } catch (error) {
                dispatch('setError', error.message || `Failed to fetch news for category: ${category}`, { root: true })
                dispatch('setLoading', false, { root: true })
            }
        },
        async fetchNewsById({ commit, dispatch }, id) {
            try {
                dispatch('setLoading', true, { root: true })
                const response = await newsService.getNewsById(id)
                commit('SET_CURRENT_NEWS', response.data)
                dispatch('setLoading', false, { root: true })
            } catch (error) {
                dispatch('setError', error.message || `Failed to fetch news with ID: ${id}`, { root: true })
                dispatch('setLoading', false, { root: true })
            }
        },
        async fetchCategories({ commit, dispatch }) {
            try {
                dispatch('setLoading', true, { root: true })
                const response = await newsService.getCategories()
                commit('SET_CATEGORIES', response.data)
                dispatch('setLoading', false, { root: true })
            } catch (error) {
                dispatch('setError', error.message || 'Failed to fetch categories', { root: true })
                dispatch('setLoading', false, { root: true })
            }
        }
    }
}
