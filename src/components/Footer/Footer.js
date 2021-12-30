import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-4 col-xl-4 item">
              <h3>الخدمات</h3>
              <ul>
                <li>
                  <Link to="/WebDevelopment">تطوير مواقع</Link>
                </li>
                <li>
                  <Link to="/Design">تصميم</Link>
                </li>
                <li>
                  <Link to="/">الامن السيبراني </Link>
                </li>
              </ul>{" "}
              <h3>عن</h3>
              <ul>
                <li>
                  <Link to="/">الفريق</Link>
                </li>
                <li>
                  <Link to="/">اهداف الفريق </Link>
                </li>
                <li>
                  <Link to="/">.....</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-4 item text footer-contact">
              تواصل معنا
              <div className="form form-primary">
                <textarea
                  row={12}
                  className="textarea-footer"
                  placeholder="يمكنك كتابة رسالتك هنا"
                ></textarea>
                <br />
                <div>
                  {" "}
                  <button className="btn-primary">ارسل </button>
                </div>
              </div>
            </div>

            <>
              <div className="col-lg-4 col-xl-4  item social ">
                <img
                  src={require("./footerimg/logo falcon.png")}
                  alt="/"
                  width={"80%"}
                />
                <br />
                <div className="social-col">
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />{" "}
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                  </a>
                  <p className="copyright">network falcon Team © 2021</p>
                </div>{" "}
              </div>
            </>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
