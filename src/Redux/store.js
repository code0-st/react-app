import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import authorsPageReducer from "./authorsPage-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profilePageReducer,
    authorsPage: authorsPageReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;

