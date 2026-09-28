import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { articles } from "../data/articles";
import { BsLayoutThreeColumns, BsGrid } from "react-icons/bs";

export default function FeaturedArticles() {

  const [currentPage, setCurrentPage] = useState(1);
   const [view, setView] = useState("horizontal");

  const articlesPerPage = 6;

  const startIndex = (currentPage - 1) * articlesPerPage;

  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const totalPages = Math.ceil(
    articles.length / articlesPerPage
  );

  return (
    <div>

      <div className="d-flex justify-content-end gap-2 mb-2 p-3">

  <button
    className="btn btn-outline-light"
    onClick={() => setView("horizontal")}
  >
    <BsLayoutThreeColumns size={20} />
  </button>

  <button
    className="btn btn-outline-light"
    onClick={() => setView("vertical")}
  >
    <BsGrid size={20} />
  </button>

</div>

      <div className="row p-3">

        {currentArticles.map((article) => (
          <div
  className={`mb-3 ${ view === "horizontal" ? "col-12" : "col-md-4"}`}
  key={article.id}
>
            <ArticleCard article={article} view={view}/>
          </div>
        ))}

      </div>


      <div className="d-flex justify-content-center gap-2 mt-4">

        {Array.from({ length: totalPages }, (value, index) => (

          <button key={index} onClick={() => setCurrentPage(index + 1)} className="btn btn-outline-warning mb-3" >
            {index + 1}
          </button>

        ))}

      </div>

    </div>
  );
}