import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../api";

const ArticlesByTopic = () => {
  const { topic: param } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticlesByTopic(param).then(({ articles }) => {
      setArticles(articles);
      console.log(articles);
    });
  }, [articles]);

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

export default ArticlesByTopic;
