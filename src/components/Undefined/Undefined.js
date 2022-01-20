import React from "react";
import { Link } from "react-router-dom";
import "./Undefined.css";
const style = { paddingTop: "100px" };

const Undefined = () => {
  return (
    <div className="Undefined" style={style}>
      <div className="container">
        <div className="row">
          <img src={require("./img.jpg")} alt="" />
          <h4>
           هذه الصفحة غير موجودة <Link to="/Home"> اضغط هنا  </Link> للعودة
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Undefined;
