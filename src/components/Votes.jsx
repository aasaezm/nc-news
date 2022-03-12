import { useState } from "react";
import { patchVote } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Votes = ({ votes, article_id, author }) => {
  const { user, setUser } = useContext(UserContext);
  const [handleVotes, setHandleVotes] = useState(0);
  const [voteIsDisabled, setVoteIsDisabled] = useState(false);
  const [unvoteIsDisabled, setUnvoteIsDisabled] = useState(true);

  const updatingVotes = (increase) => {
    if (user === author) {
      return alert("Sorry, you cannot vote on your own comment");
    } else {
      setHandleVotes(increase);

      patchVote(article_id, increase)
        .then((res) => console.log(res, "messsage"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <section>
      Votes {handleVotes === 1 ? votes + 1 : votes}
      <button
        onClick={() => {
          updatingVotes(1);
          setVoteIsDisabled(true);
          setUnvoteIsDisabled(false);
        }}
        disabled={voteIsDisabled}
      >
        ✔️
      </button>
      <button
        onClick={() => {
          updatingVotes(-1);
          setUnvoteIsDisabled(true);
          setVoteIsDisabled(false);
        }}
        disabled={unvoteIsDisabled}
      >
        ❌
      </button>
    </section>
  );
};

export default Votes;
