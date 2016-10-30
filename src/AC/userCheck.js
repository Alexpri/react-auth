import { USER_CHECK } from '../constants'

export function userCheck(info) {
    return {
        type: USER_CHECK,
        callAPI: 'http://localhost:8080/login',
        userInfo: info
    }    
}