import React from "react";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categeory.css";
const Categeory = () => {
  return (
    <div className="Categeory">
      {/* ~~~~~~~~~~~type~~~~~~~~~ */}
      <h4>
        <FontAwesomeIcon icon={faStarOfLife} />
        حسب النوع
      </h4>
      <div className="categeory-btns">
        <button>تطوير مواقع</button>
        <br />
        <button>تصميم </button>
        <br />
        <button>الأمن السيبراني</button>
      </div>

      {/* ~~~~~~~~~~price ~~~~~~~~~~~~~~~~~~~~~~ */}
      <h4 className="mt-5">
        <FontAwesomeIcon icon={faStarOfLife} />
        حسب السعر{" "}
      </h4>
      <div className="categeory-btns">
        <button>الاغلى </button>
        <br />
        <button>الارخص</button>
        <br />

        <button>الوسط</button>
      </div>
      {/* ~~~~~~~~~~~~~~~~~~discount~~~~~~~~~~~~~~~~~~~ */}
      <h4 className="mt-5">
        <FontAwesomeIcon icon={faStarOfLife} />
        العروض
      </h4>
      <div className="categeory-btns">
        <button>10% </button>
        <br />
        <button>25%</button>
        <br />

        <button>40%</button>
      </div>
    </div>
  );
};

export default Categeory;
