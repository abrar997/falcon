import React from 'react'
import { Link } from 'react-router-dom';
import "./DescribDesign.css";

const DescribDesign = () => {
    return (
      <div className="DescribDesign">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 design-text">
              <h1> تصميم </h1>
              <p>
                أيًّا كان احتياجاتك التصميمية، سيساعدك مصممو الجرافيك المحترفين
                في فالكون على توصيل رسالتك التسويقية للجمهور باستخدام تصاميم
                فنية رائعة
              </p>
              <h6>
                {" "}
                يتم تصميم الموقع حسب طلب الزبون من خلال اعطاء تفاصيل كاملة عن
                الموقع يكون جاهزا باسرع وقت ممكن  و يمكنك رؤية اعمالنا من{" "}
                <Link to="/OurWorks">هنا</Link>
              </h6>

              <button>تواصل مع الفريق الان </button>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 design-image">
              <img src={require("../../images/2.png")} alt="/" />
            </div>
          </div>{" "}
        </div>
      </div>
    );
}

export default DescribDesign
