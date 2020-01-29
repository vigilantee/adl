import React from "react";
import { connect } from "react-redux";

function Login(props) {
  const { login } = props;
  console.log("props are...", props);
  return <button onClick={login}>Login</button>;
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch({ type: "SET_LOGIN" })
  };
};

export default connect(null, mapDispatchToProps)(Login);
