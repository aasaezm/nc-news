import { postComment } from "../api";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ article_id, setComments, comments }) => {
  const { user, setUser } = useContext(UserContext);
  const [textValue, setTextValue] = useState();
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event) => {
    // const comment = document.getElementById("input_comment").value;

    if (user === "Sign in") {
      return alert("Sorry, you need to sign in to post a comment");
    } else {
      postComment(article_id, user, textValue).then((comment) => {
        console.log(comment, "comment in AddComment");
        setComments((comments) => {
          const newComments = [comment, ...comments];
          setTextValue("");
          setIsPosting(false);
          return newComments;
        });
      });

      event.preventDefault();
    }
  };

  if (isPosting) return <p>Posting your comment...</p>;

  return (
    <>
      <form onSubmit={handleSubmit} id="post-form">
        <textarea
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          rows="5"
          cols="50"
          id="input_comment"
          required
        ></textarea>
        <br></br>
        <button> Post your comment </button>
      </form>
    </>
  );
};

export default AddComment;
