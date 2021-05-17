
//constant filr

import {apiRequest} from "../../api_common";

export const getAllStatesAction =(dispatch)=>{
    const url = 'https://www.cowin.gov.in/api/v2/admin/location/states';
    return apiRequest(url).then(res => {
        dispatch({ type: 'GET_ALL_STATES', payload: res.data})
    });
}

export const getAllDistrictsAction = (dispatch, stateId) => {
    const url = 'https://www.cowin.gov.in/api/v2/admin/location/districts/' + stateId;
    return apiRequest(url).then(res => {
        dispatch({ type: 'GET_ALL_DISTRICTS', payload: res.data})
    })
}

export const searchCentersByDistrictAction = (dispatch, distIds) => {
    let date = new Date();
    let allData = {};
    distIds.map(dist =>  {
        // console.log('items')
        const url = 'https://www.cowin.gov.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=' + dist.district_id + '&date=' + date.toLocaleDateString().replace(/\//g, '-');
        apiRequest(url).then(res => {
            // console.log('Actionres--', res)
            if(allData && Object.keys(allData).length !== distIds.length) {
                allData[dist.district_id] = res.data;
            }
            if(allData && Object.keys(allData).length === distIds.length) {
                dispatch({ type: 'GET_CENTERS_BY_DISTRICT', payload: allData});
                // return;
            }
        })
    })
}

export const searchCentersByPincodeAction = (dispatch, pincode) => {
    let date = new Date();
    const url = 'https://www.cowin.gov.in/api/v2/appointment/sessions/public/calendarByPin?pincode=' + pincode + '&date=' + date.toLocaleDateString().replace(/\//g, '-');
    return apiRequest(url).then(res => {
        // console.log('res', res)
        dispatch({ type: 'GET_CENTERS_BY_PINCODE', payload: res.data})
    })
}

export const pollingIntervalChangeAction = (dispatch, val) => {
    console.log('test111')
    dispatch({ type: 'GET_POLLING_INTERVAL', payload: val})
}

export const ageGroup18ChangeAction = (dispatch, val) => {
    console.log('test111')
    dispatch({ type: 'GET_AGE_GROUP_18', payload: val})
}
export const ageGroup45ChangeAction = (dispatch, val) => {
    console.log('test111')
    dispatch({ type: 'GET_AGE_GROUP_45', payload: val})
}
