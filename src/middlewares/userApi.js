import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
	const { callAPI, type, ...rest } = action
	if (!callAPI) return next(action)

	next({
        type: type + START,
        ...rest
	})

	fetch(callAPI)
        .then(response => {
            response.json().then(function(data) {    
                next({type: type + SUCCESS, data, ...rest})
            });
        })
        .catch(error => next({type: type + FAIL, error, ...rest})))
}