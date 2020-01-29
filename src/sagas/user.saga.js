import { put, takeLatest } from "redux-saga/effects";
import { BASE_URL } from "../constants";

function* setUserAsync({ data }) {
  if (!data) {
    console.log("mock data....");
    data = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    };
  }
  const loginApi = `${BASE_URL}api/login`;

  let userToken;
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  yield fetch(loginApi, payload)
    .then(res => res.json())
    .then(res => {
      console.log("response is ,.....", res);
      return (userToken = res.token);
    });
  yield put({ type: "SET_TOKEN_ASYNC", data: { userToken } });
}

function* setUserData() {
  yield takeLatest("SET_LOGIN", setUserAsync);
}

export default setUserData;
