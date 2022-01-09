import React from "react";
import { Link } from "react-router-dom";
import "./NAv.css";
import Modal from "react-modal/lib/components/Modal";

const NAv = () => {
  Modal.setAppElement("#root");
  return (
    <div className="navbar-light ">
      <div className="container ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              {/* فالكون */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/Home" className="nav-link active">
                  الرئيسية
                </Link>

                <Link to="/" className="nav-link">
                  <div className="dropdown">
                    <button
                      className=" dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      خدماتنا
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="/WebDevelopment" className="dropdown-item">
                          تطوير مواقع
                        </Link>
                      </li>
                      <li>
                        <Link to="/design" className="dropdown-item">
                          تصميم
                        </Link>
                      </li>
                      <li>
                        <Link to="/CyperSecurity" className="dropdown-item">
                          خدمات اخرى
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Link>
                <Link to="/OurWorks" className="nav-link">
                  أعمالنا
                </Link>
                <Link to="/" className="nav-link ">
                  الاكاديمية التعليمية
                </Link>
                <div className="icons ">
                  <Link to="/Login" className="btn btn-primary icon-btn">
                    {/* <FontAwesomeIcon icon={faPhone} />{" "} */}
                    تسجيل دخول
                  </Link>
                  <Link to="/Signup" className="btn  btn-primary icon-btn">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    حساب جديد
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NAv;
