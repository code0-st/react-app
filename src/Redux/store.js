import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import authorsPageReducer from "./authorsPage-reducer";

let reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profilePageReducer,
    authorsPage: authorsPageReducer,
});

let store = createStore(reducers);

window.state = store.getState();

export default store;

