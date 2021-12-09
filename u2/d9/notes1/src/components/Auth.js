import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../store/user";
const Auth = () => {
  const dispatch = useDispatch();
  const storeAuth = useSelector((state) => state.user.auth);
  const storeUsername = useSelector((state) => state.user.username);

  const [username, setUsername] = useState("");
  const loginUser = () => {
    dispatch(userActions.login(username));
  };
  const logoutUser = () => {
    dispatch(userActions.logout());
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="username">Username</label>
        </div>
        <div className="col-md-8">
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button onClick={loginUser} type="submit">
            Login
          </button>
          <button onClick={logoutUser} type="submit">
            Logout
          </button>
        </div>
        {storeAuth ? "logged in" : "logged out"}
        <br />
        {storeUsername}
      </div>
    </div>
  );
};

export default Auth;
