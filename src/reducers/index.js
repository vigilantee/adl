import { combineReducers } from 'redux';
import LoginReducer from './Login.reducer';
// import UserReducer from './user.reducer';

export const rootReducer = combineReducers(
    {
        LoginReducer,
        // UserReducer
    }
)
