import api from './api'

export default {
    getLatestNews(page = 1, size = 10) {
        return api.get(`/news?page=${page - 1}&size=${size}&sort=publishDate,desc`)
    },

    getNewsByCategory(category, page = 1, size = 10) {
        return api.get(`/news/category/${category}?page=${page - 1}&size=${size}&sort=publishDate,desc`)
    },

    getNewsById(id) {
        return api.get(`/news/${id}`)
    },

    getCategories() {
        return api.get('/categories')
    },

    searchNews(query, page = 1, size = 10) {
        return api.get(`/news/search?query=${encodeURIComponent(query)}&page=${page - 1}&size=${size}`)
    }
}
