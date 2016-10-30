import { START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export default store => next => action => {
	const { callAPI, type, ...info } = action
	if (!callAPI) return next(action)

	next({
        type: type + START,
        ...info
	})

    const {userInfo} = info
        
    $.ajax({
            type: 'POST',
            url: callAPI,
            data: userInfo
        })
        .done(response => {
            next({type: type + SUCCESS, response, ...info})
        })
        .fail(error => next({type: type + FAIL, error, ...info}))
}