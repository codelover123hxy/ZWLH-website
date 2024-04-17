import axios from 'axios'
import request from '../../utils/request.js'
 
request.defaults.baseURL = "http://api.familystudy.cn:85"

export const getLlmsAPI = (params) => {
    return request({
        url: '/llm_model/list_running_models',
        method: 'POST',
        data: params
    })
}

request.defaults.baseURL = "https://api.familystudy.cn:8085"
