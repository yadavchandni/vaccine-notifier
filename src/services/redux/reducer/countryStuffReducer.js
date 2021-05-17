
const initialState = {
    states: null
}

export const countryStuffReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_ALL_STATES':
            console.log('here--', payload)
            return {
                ...state, states: payload.states
            }
        case 'GET_ALL_DISTRICTS':
            console.log('here--')
            return {
                ...state, districts: payload.districts
            }
        case 'GET_CENTERS_BY_DISTRICT':
            console.log('here--')
            return {
                ...state, centersByDistrict: payload
            }
        case 'GET_CENTERS_BY_PINCODE':
            console.log('here--', payload)
            return {
                ...state, centersByPincode: payload.centers
            }
        case 'GET_POLLING_INTERVAL':
            console.log('GET_POLLING_INTERVAL--', payload)
            return {
                ...state, pollingInterval: payload || 20
            }
        case 'GET_AGE_GROUP_18':
            console.log('GET_AGE_GROUP_18--', payload)
            return {
                ...state, ageGroup18: payload
            }
        case 'GET_AGE_GROUP_45':
            console.log('GET_AGE_GROUP_45--', payload)
            return {
                ...state, ageGroup45: payload
            }
        default:
            return state
    }
}






