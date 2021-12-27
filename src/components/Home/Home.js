import React, { useState } from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Services from "./Services/Services";
import img1 from "./Services/img/1.jpg";
import img2 from "./Services/img/2.jpg";
import img3 from "./Services/img/3.jpg";
import Team from "./Team/Team";

const Home = () => {
  const [servicesCard] = useState([
    {
      h: "تطوير مواقع ",
      p: "تطوير مواقع من البداية او تعديل موقع معد مسبقا حسب ما يطلبه الزبون ",
      img: img1,
    },
    {
      h: "تصميم",
      p: "تصميم مواقع و كل مايخص الشركات او الافراد من بطاقات عمل او موكاب او اعلانات ,لةستات ,بوسترات ...الخ",
      img: img2,
    },
    {
      h: "الامن السيبراني",
      p: "ايجاد ثغرات في المواقع او البرامج واصلاحها ............",
      img: img3,
    },
  ]);
  const [team] = useState([
    { name: "فاطمة ", job: "backend web development", img: "" },
    { name: "فاطمة ", job: "backend web development", img: "" },
    { name: "فاطمة ", job: "backend web development", img: "" },
    { name: "فاطمة ", job: "backend web development", img: "" },
    { name: "فاطمة ", job: "backend web development", img: "" },
    { name: "حسن الصفار", job: "backend web development", img: "" },
    { name: "سهى حعفر", job: "frontend web development", img: "" },
    { name: "أبرار مثنى ", job: "React frontend ", img: "" },
    { name: "فاطمة مثنى ", job: "graphic designer", img: "" },
    { name: "أحمد الشمري", job: "backend web development", img: "" },
    { name: "محمد", job: " cyper security", img: "" },
    { name: "فارس", job: "cyper security", img: "" },
  ]);

  return (
    <div>
      <Header />
      <About />
      <Services servicesCard={servicesCard} />
      <Team team={team} />
    </div>
  );
};

export default Home;
