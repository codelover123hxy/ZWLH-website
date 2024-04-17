import request from '../../utils/request.js'
request.defaults.baseURL = "http://api.familystudy.cn:85"

export const chatAPI = (data) => {
    return request({
        url: '/chat/chat',
        method: 'POST',
        data
    })
}

request.defaults.baseURL = "https://api.familystudy.cn:8085"
