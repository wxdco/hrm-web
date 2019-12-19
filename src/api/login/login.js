import request from '@/utils/request'


export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username, // username: username
            password
        }
    })
}

export function getUser(token){
    return request({
        url: `/user/info/${token}`,
        method: 'get'
    })
}