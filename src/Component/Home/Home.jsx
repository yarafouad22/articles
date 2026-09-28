import Boxs from "../pages/boxs"
import Hero from "../Hero/Hero"
import { MdArticle, MdPeople, MdCategory, MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Home() {
   const stats = [
  {
    pre: <MdArticle />,
    title: " +50",
    subtitle: "مقالة",
  },
  {
    pre: <MdPeople />,

    title: "+10ألف",
    subtitle: "قارئ",
  },
  {
    pre: <MdCategory />,
    title: "4",
    subtitle: "تصنيفات",
  },
  {
    pre: <MdPerson />,
    title: "6",
    subtitle: "كاتب",
  },
];
  return (
    <div>
        <Hero 
        pre="
مرحباً بك في عدسة"
       title={
  <>
    اكتشف <span className="highlight">فن</span>
    <br />
    التصوير الفوتوغرافي
  </>
}
        subtitle="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير." >
          <div className="d-flex justify-content-center gap-3">
          <NavLink to="/blog" >
          <button className="btn button1" > استكشف المقالات</button>
          </NavLink>
          <NavLink to="/us">

          <button className="btn button2" > اعرف المزيد</button>
          </NavLink>
          </div>
          <div className="mt-5">
          <Boxs stats={stats}/>
          </div>
        </Hero>
    </div>
  )
}
