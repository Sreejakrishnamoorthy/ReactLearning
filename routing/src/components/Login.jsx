import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Login() {
  let { newUser } = useParams();
  let navigate=useNavigate();
  let handleNavigate = () => {
    navigate("/")
  };

  return (
    <div>
      Login-{newUser}
      <button onClick={handleNavigate}>move to head</button>
    </div>
  );
}

export default Login;
