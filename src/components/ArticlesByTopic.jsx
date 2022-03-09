import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

const ArticlesByTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticlesByTopic(topic).then(({ articles }) => {
      setArticles(articles);
      console.log(articles);
    });
  }, [topic]);

  return (
    <div>
      {articles.map(
        ({ title, article_id, author, topic, votes, comment_count }) => {
          return (
            <ArticleCard
              key={article_id}
              title={title}
              article_id={article_id}
              author={author}
              topic={topic}
              votes={votes}
              comment_count={comment_count}
            />
          );
        }
      )}
    </div>
  );
};

export default ArticlesByTopic;
