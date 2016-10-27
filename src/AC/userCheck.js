import { USER_CHECK } from '../constants'

export default function userCheck() {
    return {
        type: USER_CHECK,
        callAPI: '/login'
    }    
}