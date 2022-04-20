import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ArticleCard from "./ArticleCard";
import ClipLoader from "react-spinners/ClipLoader";

const UserArticles = () => {
  const { user } = useContext(UserContext);
  const [userArticles, setUserArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articles) => {
      const articlesByUser = articles.filter(
        (article) => article.author === user
      );
      setUserArticles(articlesByUser);
      setIsLoading(false);
    });
  }, [user]);

  if (isLoading)
    return <ClipLoader color={"black"} loading={isLoading} size={100} />;

  return (
    <div>
      {userArticles.map(
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

export default UserArticles;
