import {combineReducers} from "redux";

//reducers
import fetchUsers from "./fetch_users";



//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    FETCH_USERS: fetchUsers,
});

export default reducers;