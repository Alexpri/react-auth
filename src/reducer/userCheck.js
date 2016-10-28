import { USER_CHECK, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
    loading: false,
    user: '',
    password: '',
    isValid: null
}

export default (state = defaultState, action) => {
    const { type, payload } = action

    console.log(action)

    switch (type) {
        case USER_CHECK + START:
            return Object.assign({}, state, {
                loading: true
            })

        case USER_CHECK + SUCCESS:
            if (payload.Auth == 'Denied') {
                
            }
            return Object.assign({}, state, {
                loading: false,
                isValid: payload.Auth == 'Denied' ? false :
                         payload.Auth == 'Logged' ? true : false
            })
    }

    return state
}