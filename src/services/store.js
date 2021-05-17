import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducer/rootReducer";

//Reducer
// import {rootReducer} from './reducer'

let store;
if(process.env.NODE_ENV !== "production"){
    const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store= createStore (rootReducer, composeEnhancer(applyMiddleware(thunk)))

}
else{
    store=createStore(rootReducer,applyMiddleware(thunk));
}

export default store;