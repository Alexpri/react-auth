import { USER_CHECK, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
    loading: false,
    loaded: false,
    user: '',
    password: ''
}

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {
        case USER_CHECK + START:
            return Object.assign({}, state, response)
    }

    return state
}