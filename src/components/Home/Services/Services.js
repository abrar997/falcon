import React from "react";
import "./Services.css";

const Services = ({ servicesCard }) => {
  return (
    <div className="Services">
      <div className="container">
        <div className="row">
          <div>
            <h1>خدماتنا</h1>
          </div>
          <>
            {servicesCard.map((item, ind) => {
              return (
                <div className="card col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12" key={ind}>
                  <img src={item.img} alt="img_card" />
                  <div className="card-contain">
                    <h3 className="card-title">{item.h} </h3>
                    <h6>{item.p} </h6>
                    <button className="btn">المزيد </button>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Services;
