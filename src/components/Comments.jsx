import { useEffect, useState, useContext } from "react";
import { fetchCommentsByArticle } from "../api";
import AddComment from "./AddComment";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../api";

const Comments = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((comments) => {
      console.log(comments, "comments in Comments");
      setComments(comments);
    });
  }, [article_id]);

  const handleRemoveComment = (comment_id) => {
    const commentsWithoutRemovedComment = comments.filter(
      (comment) => comment_id !== comment.comment_id
    );
    setComments(commentsWithoutRemovedComment);

    deleteComment(comment_id);
  };

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
          let isHidden = author === user ? false : true;

          return (
            <li className="li-comments" key={comment_id}>
              <p>
                <strong>{author}</strong> {created_at}
              </p>
              <p>{body}</p>
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete your comment?"
                    ) === true
                  ) {
                    handleRemoveComment(comment_id);
                  }
                }}
                hidden={isHidden}
              >
                Delete comment
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
