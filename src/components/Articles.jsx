import { useState, useEffect } from "react";
import { fetchArticles } from "../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <section key={article.title} id="article_card">
            <p>
              <strong>{article.title}</strong>
            </p>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Articles;
