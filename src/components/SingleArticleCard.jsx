import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsByArticle } from "../api";
import Votes from "./Votes";

const SingleArticleCard = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  // const [votes, setVotes] = useState(0);

  const { article_id } = useParams();
  //   console.log(article_id, "id");

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      const articleArray = [article];
      console.log(articleArray, "articleArray");
      setArticle(articleArray);
      // setVotes(articleArray[0].votes);
    });

    fetchCommentsByArticle(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
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
            <article key={article_id}>
              <h2>{title}</h2>
              <p>
                Posted by {author} on {created_at}
              </p>
              <p>{body}</p>
              <Votes votes={votes} article_id={article_id} />
            </article>
          );
        }
      )}
    </div>
  );
};

export default SingleArticleCard;
