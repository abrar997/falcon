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
          <div className=" categ ">
            {/* <Categeory/> */}
          </div>
          <div className=" col-lg-12 col-xl-12 col-sm-12 col-xs-12 col-md-12">
            <Products productst={productst} videos={videos} />
          </div>
        </div>

  );
};

export default OurWorks;
