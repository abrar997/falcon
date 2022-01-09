import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
const Products = ({ productst, videos }) => {
  return (
    <div className="products">
      <h1>
        {" "}
        <NavLink to="/Home" className="activeLink">
          الرئيسية
        </NavLink>
        / أعمالنا{" "}
      </h1>
      <>
        <div className="container">
          <div className="row">
            {" "}
            <>
              {productst.map((item) => {
                return (
                  <>
                    <div
                      className="card col-lg-4 col-xl-4 col-sm-12 col-xs-12 col-md-6"
                      key={item._id}
                    >
                      <div className="slide slide1">
                        <div className="content">
                          <div className="icon">
                            <img src={item.img} alt="/" />
                          </div>
                        </div>
                      </div>
                      <div className="slide slide2">
                        <div className="content">
                          <h3>{item.name}</h3>
                          <p>من عمل فريق فالكون </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              {videos.map((video, indexss) => {
                return (
                  <>
                    <div
                      className="card col-lg-4 col-xl-4 col-sm-12 col-xs-12 col-md-6"
                      key={indexss}
                    >
                      <div className="slide slide1">
                        <div className="content">
                          <div className="icon">
                            <video autoPlay muted controls>
                              <source src={video.video} />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="slide slide2">
                        <div className="content mt-3">
                          <h3> {video.name}</h3>
                          <p>من عمل فريق فالكون </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          </div>
        </div>
      </>
    </div>
  );
};

export default Products;
