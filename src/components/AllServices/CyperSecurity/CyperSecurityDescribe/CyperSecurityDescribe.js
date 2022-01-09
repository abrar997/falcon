import React from "react";
import { Link } from "react-router-dom";
import "./CyperSecurityDescribe.css";
const CyperSecurityDescribe = () => {
  return (
    // top of cypersecurity sevices
    <div className="CyperSecurity">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 other-text">
            <h1> خدمات اخرى </h1>
            <p>
              ايا كان احتياك من خدمات تخص امن المواقع ومايحدث فيه من مشاكل
              فريقنا سيتكفل فريقنا بكل ما يضمن موقعك
            </p>
            <h6>
              <Link to="/OurWorks">يمكنك رؤية اعمالنا من هنا </Link>
            </h6>
            <button>تواصل مع الفريق الان </button>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 other-image">
            <img src={require("../cyperimage/cyper.png")} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyperSecurityDescribe;
