import request from '../../utils/request.js'

export const getConnectedNodesAPI = (params) => {
    return request({
        url: '/api/graph/connectedNodes',
        params: params,
        method: 'GET'
    })
}
