import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { fetchArticlesByTopic } from "../api";
import Topics from "./Topics";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    //When going to home page, will get undefined as useParams won't return any topic property within the object
    if (topic === undefined) {
      setIsLoading(true);
      fetchArticles().then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      fetchArticlesByTopic(topic).then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Topics />
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
    </>
  );
};

export default Articles;
