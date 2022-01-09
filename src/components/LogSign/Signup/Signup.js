import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  // to identify value for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-4 col-sm-12 col-xs-12">
              <img src={require("./sign.jpg")} alt="login" />
            </div>
            <form className="col-lg-6 col-xl-6 col-md-4 col-sm-12 col-xs-12">
              <h1> انشئ حسابك </h1>
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
              <div className="buttons">
                <button className="btn btn-primary btn-signup ">
                  التسجيل{" "}
                </button>
                <button className="btn btn-primary mt-4 btn-google">
                  {" "}
                  تسجيل الدخول من google account{" "}
                </button>
              </div>{" "}
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Signup;
