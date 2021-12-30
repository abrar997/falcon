import React from "react";
import "./Team.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Pagination
} from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// install Swiper modules
SwiperCore.use([FreeMode,Pagination]);



const Team = ({ team }) => {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <h1> فريق العمل </h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
          >
            {team.map((item,inde) => {
              return (
                <SwiperSlide
                  className="col-lg-4 col-xl-4 col-md-3 col-sm-12 col-xs-12"
                  key={inde}
                >
                  <div className="card ">
                    <img src={item.img} alt="" />
                    <h3> {item.name}</h3>
                    <h5>{item.job} </h5>
                    <div className="icon-team">
                      <a href="." className="team-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="." className=" team-icon ">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="." className=" team-icon ">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
