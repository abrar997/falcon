import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  col-md-4 col-sm-12 col-xs-12">
            <img src={require("./login.png")} alt="login" />
          </div>
          <form className="col-lg-6 col-xl-6 col-md-4 col-sm-12 col-xs-12">
            <h1> تسجيل دخول </h1>
            <div>
              <h3>الايميل </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="الايميل"
              />
            </div>

            <div>
              <h3>الباسورد </h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="الباسورد"
              />
            </div>

            <button className="btn btn-primary">تسجيل دخول</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
