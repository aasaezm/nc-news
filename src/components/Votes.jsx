import { useState } from "react";
import { patchVote } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Votes = ({ votes, article_id, author }) => {
  const { user, setUser } = useContext(UserContext);
  const [handleVotes, setHandleVotes] = useState(votes);
  const [voteIsDisabled, setVoteIsDisabled] = useState(false);
  const [unvoteIsDisabled, setUnvoteIsDisabled] = useState(false);

  const updatingVotes = (increase) => {
    patchVote(article_id, increase)
      // .then((res) => console.log(res, "message"))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      Votes {handleVotes}
      <button
        onClick={() => {
          if (user !== author) {
            setHandleVotes(handleVotes + 1);
            updatingVotes(1);
            unvoteIsDisabled === true
              ? setUnvoteIsDisabled(false)
              : setVoteIsDisabled(true);
          } else {
            alert("Sorry, you cannot vote on your own comment");
          }
        }}
        disabled={voteIsDisabled}
      >
        👍
      </button>
      <button
        onClick={() => {
          if (user !== author) {
            setHandleVotes(handleVotes - 1);
            updatingVotes(-1);
            voteIsDisabled === true
              ? setVoteIsDisabled(false)
              : setUnvoteIsDisabled(true);
          } else {
            alert("Sorry, you cannot vote on your own comment");
          }
        }}
        disabled={unvoteIsDisabled}
      >
        👎
      </button>
    </section>
  );
};

export default Votes;
