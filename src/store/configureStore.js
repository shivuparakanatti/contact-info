import { createStore,combineReducers } from "redux";
import conatctReducer from "../reducers/contactReducer";

const configureStore =()=>{
    const store = createStore(combineReducers({
        contacts : conatctReducer,
        
    }))

    return store
}


export default configureStore