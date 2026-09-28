import Boxs from "../pages/Boxs.jsx";
import Hero from "../Hero/Hero.jsx";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import { articles } from "../data/articles.js";
import { MdArticle, MdPeople, MdCategory, MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Home() {

  const stats = [
    {
      pre: <MdArticle />,
      title: "+50",
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
        pre="مرحباً بك في عدسة"
        title={
          <>
            اكتشف <span className="highlight">فن</span>
            <br />
            التصوير الفوتوغرافي
          </>
        }
        subtitle="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
      >

        <div className="d-flex justify-content-center gap-3">

          <NavLink to="/blog">
            <button className="btn button1">
              استكشف المقالات
            </button>
          </NavLink>

          <NavLink to="/us">
            <button className="btn button2">
              اعرف المزيد
            </button>
          </NavLink>

        </div>

        <div className="mt-5">
          <Boxs stats={stats} />
        </div>

      </Hero>


      <div className="bg-dark">

        <div className="container pt-5">

          <div className="d-flex justify-content-between">

            <div>
              <span className="text-white">مميز</span>
              <h2 className="text-white">مقالات مختارة</h2>
              <p className="text-white">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <NavLink to="/blog">
              <button className="btn button1">
                عرض الكل
              </button>
            </NavLink>

          </div>


          <div className="row mt-4">
            
            {articles.slice(0, 3).map((article) => (
              <div className="col-12" key={article.id}>
                <ArticleCard article={article} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}