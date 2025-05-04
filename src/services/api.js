import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

// 請求攔截器
api.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 響應攔截器
api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        // 統一處理錯誤
        if (error.response) {
            // 伺服器回應錯誤
            console.error('API Error:', error.response.data)
        } else if (error.request) {
            // 請求未收到回應
            console.error('Network Error:', error.request)
        } else {
            // 請求設置出錯
            console.error('Request Error:', error.message)
        }
        return Promise.reject(error)
    }
)

export default api
