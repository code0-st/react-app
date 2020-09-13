import { createStore, combineReducers, applyMiddleware } from "redux";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import authorsPageReducer from "./authorsPage-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profilePageReducer,
    authorsPage: authorsPageReducer,
    auth: authReducer,
    form: formReducer, 
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

