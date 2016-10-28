import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    console.log(action)
	const { callAPI, type, ...info } = action
	if (!callAPI) return next(action)

	next({
        type: type + START,
        ...info
	})

	fetch(callAPI)
        .then(response => {
            // console.log(response.json())
            // response.json().then(function() {
            //     console.log(payload)
            //     next({type: type + SUCCESS, payload, ...info})
            // });
            const payload = {
                Auth: "Denied"
            }
            next({type: type + SUCCESS, payload, ...info})
        })
        .catch(error => next({type: type + FAIL, error, ...info}))
}