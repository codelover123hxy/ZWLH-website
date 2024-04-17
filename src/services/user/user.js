import request from '../../utils/request.js'
export const chatAPI = (data) => {
    return request({
        url: '/api/chat/chat',
        method: 'POST',
        data
    })
}

export const registerAPI = (data) => {
    return request({
        url: '/api/register',
        method: 'POST',
        data
    })
}

export const loginAPI = (data) => {
    return request({
        url: '/api/login',
        method: 'POST',
        data
    })
} 

export const logoutAPI = () => {
    return request({
        url: '/api/logout',
        method: 'GET'
    })
}

export const changePwdAPI = (data) => {
    return request({
        url: '/api/changePwd',
        method: 'POST',
        data
    })
}

export const getSelf = () => {
    return request({
        url: '/api/user/query',
        method: 'GET'
    })
}

export const getUserByIdAPI = (id) => {
    return request({
        url: `/api/admin/user/query/${id}`,
        method: 'GET'
    })
}

export const getUserAPI = () => {
    return request({
        url: '/api/admin/user/query',
        method: 'GET'
    })
}

export const updateUserByIdAPI = (data) => {
    return request({
        url: 'api/admin/user/update',
        method: 'GET',
        data
    })
}

export const removeUserByIdAPI = (id) => {
    return request({
        url: `/api/admin/user/remove/${id}`,
        method: 'GET'
    })
}