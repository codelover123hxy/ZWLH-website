import request from '../../utils/request.js'
export const submitResponseAPI = (data) => {
    return request({
        url: '/api/response/submit',
        method: 'POST',
        data
    })
}

export const updateResponseAPI = (id) => {
    return request({
        url: `/api/response/update/${id}`,
        method: 'GET'
    })
}

export const getQuestionAPI = () => {
    return request({
        url: '/question/query',
        method: 'GET'
    })
}