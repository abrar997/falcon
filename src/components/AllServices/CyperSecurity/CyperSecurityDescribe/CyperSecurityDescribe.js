import React from 'react'
import { Link } from "react-router-dom";
import "./CyperSecurityDescribe.css";
const CyperSecurityDescribe = () => {
    return (
      <div className="CyperSecurity">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 web-text">
              <h1> الأمن السيبراني </h1>
              <p>
                أيًّا كان احتياجاتك التصميمية، سيساعدك مصممو الجرافيك المحترفين
                في فالكون على توصيل رسالتك التسويقية للجمهور باستخدام تصاميم
                فنية رائعة
              </p>
              <h6>
                {" "}
                يتم تصميم الموقع حسب طلب الزبون من خلال اعطاء تفاصيل كاملة عن
                الموقع يكون جاهزا باسرع وقت ممكن يمكنك رؤية اعمالنا من{" "}
                <Link to="/">هنا</Link>
              </h6>

              <button>تواصل مع الفريق الان </button>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 web-image">
              <img src={require("../../images/2.png")} alt="/" />
            </div>
          </div>{" "}
        </div>
      </div>
    );
}

export default CyperSecurityDescribe
