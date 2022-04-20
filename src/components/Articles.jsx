import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { fetchArticlesByTopic } from "../api";
import Topics from "./Topics";
import ErrorPage from "./ErrorPage";
import ClipLoader from "react-spinners/ClipLoader";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [error, setError] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    //When going to home page, will get undefined as useParams won't return any topic property within the object
    if (topic === undefined) {
      setIsLoading(true);
      fetchArticles(sortBy, order)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
          setError(null);
        })

        .catch((err) => setError(err));
    } else {
      setIsLoading(true);
      fetchArticlesByTopic(sortBy, order, topic)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
          setError(null);
        })

        .catch((err) => setError(err));
    }
  }, [topic, sortBy, order]);

  const orderManager = () => {
    if (order === "ASC") {
      setOrder("DESC");
    } else {
      setOrder("ASC");
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading)
    return <ClipLoader color={"black"} loading={isLoading} size={100} />;

  return (
    <>
      <Topics />
      <div className="sort-bar">
        <select
          id="dropdown"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Number of comments</option>
        </select>
        <button onClick={orderManager}>{order}</button>
      </div>
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
