import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import Votes from "./Votes";
import Comments from "./Comments";
import Topics from "./Topics";
import ErrorPage from "./ErrorPage";

const DetailedArticleCard = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        const articleArray = [article];
        setArticle(articleArray);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id]);

  if (error) return <ErrorPage error={error} />;
  return (
    <>
      <Topics />
      <div>
        {article.map(
          ({
            title,
            article_id,
            author,
            votes,
            topic,
            comment_count,
            body,
            created_at,
          }) => {
            return (
              <section key={article_id}>
                <article className="detailed_article_card">
                  <h2>{title}</h2>
                  <p>
                    Posted by {author} on {created_at}
                  </p>
                  <p>{body}</p>
                  <Votes
                    votes={votes}
                    article_id={article_id}
                    author={author}
                  />
                </article>
                <Comments
                  article_id={article_id}
                  comment_count={comment_count}
                />
              </section>
            );
          }
        )}
      </div>
    </>
  );
};

export default DetailedArticleCard;
