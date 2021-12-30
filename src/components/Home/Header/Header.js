import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 header-text">
         <h1>network <span>folcan</span>  Team</h1>   
         <p>  كن الافضل مع الأفضل</p>
         <button className="btn-primary">ابدأ معنا  </button>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 header-image " >
           <img src={require ('./Images/3.png')} width={'80%'}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
