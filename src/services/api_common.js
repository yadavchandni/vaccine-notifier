const axios = require('axios');

export const apiRequest = (url, method = 'GET', body = null, extraParams = null) => {
    return axios({
        url,
        method,
        data: body
    }).then(response => {
        // console.log('response')
        return response;
    })
}