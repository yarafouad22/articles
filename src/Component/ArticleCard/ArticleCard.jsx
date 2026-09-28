import { NavLink } from "react-router-dom";
import "./ArticaleCard.css";

export default function ArticleCard({ article ,view }) {
  return (
    <article className={`article-card ${view}`}>

      <div className="right position-relative">
        <img
          src={article.image}
          alt={article.title}
        />

        {article.featured && (
          <div className="article-card-image">
            <p>مميز</p>
          </div>
        )}
      </div>

      <div className="article-card-content m-2">

        <div className="article-card-top">

          <span className="article-card-category">
            {article.category}
          </span>

          <span className="article-read-time">
            {article.readTime}
          </span>

        </div>

        <h3>
          {article.title}
        </h3>

        <p className="text-white">
          {article.excerpt}
        </p>

        <div className="article-card-footer">

          <div className="article-author">

            <img
              src={article.author.avatar}
              alt={article.author.name}
            />

            <div>
              <span>{article.author.name}</span>
              <small>{article.author.role}</small>
            </div>

          </div>

        </div>

      <div className="text-start arti">

      <NavLink
  to="/blog"
  className=" text-decoration-none text-white-50"
>
  اقرأ المقال ←
</NavLink>
      </div>
      </div>
    </article>
  );
}