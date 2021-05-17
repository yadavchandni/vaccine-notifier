// combine reducer

import { combineReducers } from 'redux';
import {countryStuffReducer} from "./countryStuffReducer";




const rootReducer = combineReducers({

    countryStuffReducer: countryStuffReducer,

});

export default rootReducer;