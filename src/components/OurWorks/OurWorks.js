import axios from "axios";
import React, { useEffect, useState } from "react";
import Categeory from "./Categeory/Categeory";
import "./OurWorks.css";
import Products from "./Products/Products";
const OurWorks = () => {
  const [productst, setproductst] = useState([]);
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("JSon/data.json").then((res) => {
      setproductst(res.data.products);
      setVideos(res.data.videos);
    });
  }, []);
  return (
    <div className="OurWorks">
      <div className="container">
        <div className="row">
          <div className=" col-lg-4 col-xl-3 col-sm-12 col-xs-12 col-md-12 ">
            <h2>التصنيف</h2>
            <Categeory />
          </div>
          <div className=" col-lg-8 col-xl-9 col-sm-12 col-xs-12 col-md-12">
            <h1>أعمالنا</h1>
            <Products productst={productst} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
