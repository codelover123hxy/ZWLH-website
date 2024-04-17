import request from '../../utils/request.js'
export const getCourseListAPI = () => {
    return request({
        url: '/api/course/query',
        method: 'GET'
    })
}

export const getCourseByIdAPI = (id) => {
    return request({
        url: `/api/course/query/${id}`,
        method: 'GET'
    })
}

export const updateCourseByIdAPI = (data) => {
    return request({
        url: '/api/course/update',
        method: 'POST',
        data
    })
}

export const removeCourseByIdAPI = (id) => {
    return request({
        url: `/api/course/remove/${id}`,
        method: 'GET'
    })
}

export const addCourseAPI = (data) => {
    return request({
        url: '/api/course/add',
        method: 'data'
    })
}