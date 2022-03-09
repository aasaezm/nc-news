import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsByArticle } from "../api";

const SingleArticleCard = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();
  //   console.log(article_id, "id");

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      const articleArray = [article];
      setArticle(articleArray);
    });

    fetchCommentsByArticle(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

  console.log(comments);
  return (
    <div>
      {article.map(
        ({
          title,
          article_id,
          author,
          topic,
          votes,
          comment_count,
          body,
          created_at,
        }) => {
          return (
            <article>
              <h2>{title}</h2>
              <p>
                Posted by {author} on {created_at}
              </p>
              <p>{body}</p>
              <p>
                Votes {votes} <button>↑</button>
                <button>↓</button>
              </p>
            </article>
          );
        }
      )}
    </div>
  );
};

export default SingleArticleCard;
