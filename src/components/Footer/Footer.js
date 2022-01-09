import React, { useState } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import emailjs from "emailjs-com";

const Footer = () => {
  const [ask, setAsk] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b3gqo19",
        "template_zunsjdw",
        e.target,
        "user_SNPTszdvRiyww8wHwfkEQ"
      )
      .then((res) => {
        console.log(res);
      });
  };
  const handleName = (e) => {
    setAsk({ name: e.target.value });
  };

  const { name } = ask;

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
                  <Link to="/CyperSecurity">خدمات اخرى </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-4 item text footer-contact">
              تواصل معنا
              <div className="form form-primary">
                <form onSubmit={handleSubmit}>
                  <textarea
                    type="text"
                    className="textarea-footer"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="your name"
                    name="name"
                    onChange={handleName} //for get name from inpt and print in heaer pargraph
                    value={name}
                  />
                  <br />
                  <div>
                    {" "}
                    <button type="submit" className="btn-primary">
                      ارسل{" "}
                    </button>
                  </div>
                </form>
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
