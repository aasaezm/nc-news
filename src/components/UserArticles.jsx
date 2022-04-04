import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const UserArticles = () => {
  const { user, setUser } = useContext(UserContext);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      //   const filteredArticles = articles.filter(
      //     (article) => article.author === user
      //   );
      //   console.log(filteredArticles, "articles by author");
      setUserArticles(articles.filter((article) => article.author === user));
    });
  }, []);

  console.log(userArticles);

  return (
    <div>
      {userArticles.map((article) => {
        return (
          <>
            <Link to={`/articles/article/${article.article_id}`}>
              <article key={article.article_id} className="article_card">
                <p>
                  <strong>{article.title}</strong>
                </p>
                <hr></hr>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
              </article>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default UserArticles;
