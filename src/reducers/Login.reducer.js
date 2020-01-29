const initState = {
  signInstatus: false,
  userToken: "",
  finalObj: {}
};

const LoginReducer = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case "SET_TOKEN_ASYNC":
      const { userToken } = data;
      if(!userToken) {
          return { ...state, signInstatus: false };
      }
      return { ...state, userToken, signInstatus: true };

    default:
      return state;
  }
};

export default LoginReducer;
