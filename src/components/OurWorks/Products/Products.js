import React  from "react";
import "./Products.css";
const Products = ({ productst, videos }) => {
  return (
    <div className="products">
      <div className="row">
        <>
          {productst.map((item) => {
            return (
              <>
                <div className="card col-lg-4" key={item._id}>
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
                      <p>تصميم شعار لشركة مبيعات</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {videos.map((video,indexss) => {
            return (
              <>
                <div className="card col-lg-4" key={indexss}>
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
                    <div className="content">
                      <p>تصميم شعار لشركة مبيعات</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Products;
