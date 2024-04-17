import request from '../../utils/request.js'
export const submitAPI = (data) => {
    return request({
        url: '/api/student/question/submit',
        method: 'POST',
        data
    })
}

export const getFilesAPI = (params, courseId) => {
    return request({
        url: `/api/file/query/${courseId}`,
        method: 'GET',
        params: params
    })
}