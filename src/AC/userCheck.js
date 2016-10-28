import { USER_CHECK } from '../constants'

export function userCheck(info) {
    return {
        type: USER_CHECK,
        callAPI: '/login',
        userInfo: info
    }    
}