import { USER_CHECK, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
    loading: false,
    Username: '',
    Password: '',
    isValid: null,
    Language: null
}

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {
        case USER_CHECK + START:
            return Object.assign({}, state, {
                loading: true
            })

        case USER_CHECK + SUCCESS:
            const userInfo = response.Auth === 'Logged' ? {
                Username: response.Username,
                Password: response.Password,
                isValid: true,
                Language: response.Language
            } : null

            return Object.assign({}, state, {
                loading: false,
                isValid: false
            }, userInfo)

        case USER_CHECK + FAIL:
            return Object.assign({}, state, { loading: false }, response)
        default:
            break
    }

    return state
}