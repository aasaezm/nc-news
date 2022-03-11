import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../api";
import AddComment from "./AddComment";

const Comments = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then(({ comments }) => {
      // console.log(comments, "comments in Comments");
      setComments(comments);
    });
  }, [article_id]);
  console.log("hello");
  return (
    <div>
      <AddComment
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />

      <h2>{comments.length} Comments </h2>
      <ul>
        {comments.map(({ body, author, created_at, comment_id }) => {
          return (
            <li className="li-comments" key={comment_id}>
              <p>
                <strong>{author}</strong> {created_at}
              </p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
