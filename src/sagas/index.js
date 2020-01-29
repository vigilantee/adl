import { all } from 'redux-saga/effects';
// import login from '../pages/Login/Login.saga';
import setUserData from './user.saga';


export default function* rootSaga() {
    yield all([
        // login(),
        setUserData()
    ])
}