import React from "react";
import { updateUsername, updatePassword } from "../redux/slice/loginSlice";
import { updateLogValue } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleChangeUN = (e) => {
    dispatch(updateUsername(e.target.value));
  };
  const handleChangePW = (e) => {
    dispatch(updatePassword(e.target.value));
  };
  return (
    <div className="loginpage container">
      <h1 className="heading my-4">User Login</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          value={state.username}
          onChange={handleChangeUN}
          className="form-control"
          id="exampleInputEmail1"
        />
        <div id="emailHelp" className="form-text">
          Username and Password should be the same and more than 7 characters.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={state.password}
          onChange={handleChangePW}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          if (state.password === "" && state.username === "") {
            alert("Enter Credentials");
          } else if (
            state.password === state.username &&
            state.password.length >= 7
          ) {
            dispatch(updateLogValue(true));
            setTimeout(() => {
              dispatch(updateUsername(""));
              dispatch(updatePassword(""));
            }, 1000);
          } else {
            alert("Username and Password should be more than 7 characters");
            dispatch(updateUsername(""));
            dispatch(updatePassword(""));
          }
        }}
        className="btn loginbtn btn-outline-light"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
