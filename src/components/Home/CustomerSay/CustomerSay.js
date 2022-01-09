import React from "react";
import "./CustomerSay.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const CustomerSay = ({ customer }) => {
  return (
    <div className="CustomerSay">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-xs-12 col-sm-12 col-md-6 text-CustomerSay">
            <h1>يقول الزبون </h1>

            <Swiper
              //   pagination={{
              //     type: "progressbar",
              //   }}
              navigation={true}
              className="mySwiper"
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
            >
              {customer.map((item, index) => {
                return (
                  <SwiperSlide
                    className="col-lg-8 col-xl-8 col-md-12 col-sm-12 col-xs-7"
                    key={index}
                  >
                    <img src={item.image} alt="/" />

                    <h2> {item.name}</h2>
                    <h6>{item.service} </h6>

                    <h5> {item.text} </h5>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="col-lg-4 col-xl-4 col-xs-7 col-sm-12 col-md-4  image">
            <img src={require("./image/111.png")} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
