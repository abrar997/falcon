import React from "react";
import { Link } from "react-router-dom";
import "./DescribeWeb.css";
const DescribeWeb = () => {
  return (
    <div className="DescribeWeb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 web-text">
            <h1> تطوير مواقع </h1>
            <p>
              تتضمن عدة مجالات منها تصميم ونشر وبرمجة الويب وإدارة قاعدة
              البيانات. تتراوح من تطوير أبسط صفحة مؤلفة من نصٍ فقط إلى أكثر
              التطبيقات المستندة على الويب تعقيدًا، بالإضافة إلى الأعمال
              الإلكترونية وخدمات الشبكة الاجتماعية.
            </p>
            <h6>
              {" "}
              يتم تصميم الموقع حسب طلب الزبون من خلال اعطاء تفاصيل كاملة عن
              الموقع يكون جاهزا باسرع وقت ممكن يمكنك رؤية اهم اعمالنا من{" "}
              <Link to="/">هنا</Link>
            </h6>

            <button>تواصل مع الفريق الان </button>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 web-image">
            <img src={require("../../images/web.png")} />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DescribeWeb;
