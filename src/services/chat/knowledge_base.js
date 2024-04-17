import request from '../../utils/request.js'
request.defaults.baseURL = "http://api.familystudy.cn:85"

const createKnowledgeBase = (data) => {
    return request({
        url: '/knowledge_base/create_knowledge_base',
        method: 'POST',
        data
    })
}

const removeKnowledgeBase = (data) => {
    return request({
        url: '/knowledge_base/delete_knowledge_base',
        method: 'POST',
        data
    })
}
request.defaults.baseURL = "https://api.familystudy.cn:8085"
