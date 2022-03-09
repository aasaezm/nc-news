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
      {articles.map(
        ({ title, article_id, author, topic, votes, comment_count }) => {
          return (
            <section key={article_id} id="article_card">
              <p>
                <strong>{title}</strong>
              </p>
              <p>Author: {author}</p>
              <p>Topic: {topic}</p>
              <p>Votes: {votes}</p>
              <p>Comments: {comment_count}</p>
            </section>
          );
        }
      )}
    </div>
  );
};

export default Articles;
