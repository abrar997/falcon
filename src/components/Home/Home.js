import React, { useState } from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Team from "./Team/Team";
import CustomerSay from "./CustomerSay/CustomerSay";
// images
import img1 from "./Services/img/1.jpg";
import img2 from "./Services/img/2.jpg";
import img3 from "./Services/img/3.jpg";
// ---------
import imgt1 from "./Team/imageTeam/1.jpg";
import imgt2 from "./Team/imageTeam/2.jpg";
// --------
import imgC1 from "./CustomerSay/image/2.jpg";

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
    { name: "حسن الصفار", job: "backend web development", img: imgt2 },
    { name: "أحمد الشمري", job: "backend web development", img: imgt2 },
    { name: "أبرار مثنى ", job: "React frontend ", img: imgt1 },
    { name: "فاطمة مثنى ", job: "graphic designer", img: imgt1 },
    { name: "سهى جعفر", job: "frontend web development", img: imgt1 },

    { name: "محمد", job: " cyper security", img: imgt2 },
    { name: "فارس", job: "cyper security", img: imgt2 },
    { name: "فاطمة ", job: "backend web development", img: imgt1 },
    { name: "فاطمة ", job: "backend web development", img: imgt1 },
    { name: "فاطمة ", job: "backend web development", img: imgt1 },
    { name: "فاطمة ", job: "backend web development", img: imgt1 },
    { name: "فاطمة ", job: "backend web development", img: imgt1 },
  ]);

  const [customer] = useState([
    {
      name: "  محمد ماهر ",
      service: "تصميم موقع لشركة ",
      image: imgC1,
      text: "المنتج جميل جدا سأكون زبونكم الدائم",
    },
    {
      name: "سامي أحمد",
      service: "حل ثغرة لموقع ",
      image: imgC1,
      text: "المنتج جميل جدا سأكون زبونكم الدائم",
    },
    {
      name: " حميد عامر",
      service: "تصميم لوكو و موكاب لشركة ",
      image: imgC1,
      text: "المنتج جميل جدا سأكون زبونكم الدائم",
    },
    {
      name: "حامد سلام",
      service: "تصميم بطاقة عمل",
      image: imgC1,
      text: "المنتج جميل جدا سأكون زبونكم الدائم",
    },
  ]);

  return (
    <div>
      <Header />
      <About />
      <Services servicesCard={servicesCard} />
      <Team team={team} />
      <CustomerSay customer={customer} />
    </div>
  );
};

export default Home;
