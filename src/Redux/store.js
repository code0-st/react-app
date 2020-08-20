import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";

let reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profilePageReducer
});

let store = createStore(reducers);

export default store;

