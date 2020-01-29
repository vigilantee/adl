import React, { useState } from "react";
import { connect } from "react-redux";

function useInput({ type }) {
  const [value, setValue] = useState("");
  const input = (
    <input value={value} onChange={e => setValue(e.target.value)} type={type} />
  );
  return [value, input];
}

function Login(props) {
  const {
    login,
    loginReducer: { signInstatus }
  } = props;
  const [username, userInput] = useInput({ type: "text" });
  const [password, passwordInput] = useInput({ type: "text" });
  if (!signInstatus)
    return (
      <>
        {userInput} <br />
        {passwordInput}
        <button onClick={() => login(username, password)}>Login</button>
      </>
    );
  return <div>SignedIn Successfully</div>;
}

const mapStateToProps = state => {
  return {
    loginReducer: state.LoginReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({ type: "SET_LOGIN", data: { username, password } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
