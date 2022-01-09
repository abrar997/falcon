import React from "react";
import "./About.css";
const About = ({ about }) => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="image-about col-lg-12 col-xl-6 col-md-6 col-sm-12 col-xs-12">
            {/* <img src={require("./img/1.jpg")} width={"90%"} />{" "} */}
          </div>
          <div className="text-about col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 mt-4">
            <h1> من نحن </h1>
            <p>
              مجموعة من الشباب يعملون بمجالات مختلفة كالتصميم والتطوير والامن
              السيبراني وحل الثغرات التي تحدث في انظمة البرامج و المواقع
              <br />
              .يعملون بشكل حر دون الانتماء الى شركة معينة يبدعون بطريقتهم الخاصة
              يمكنك ان ترى ابداعهم من خلال العمل معهم
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
