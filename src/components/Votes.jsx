import { useState } from "react";
import { patchVote } from "../api";

const Votes = ({ votes, article_id }) => {
  const [handleVotes, setHandleVotes] = useState(0);
  const [voteIsDisabled, setVoteIsDisabled] = useState(false);
  const [unvoteIsDisabled, setUnvoteIsDisabled] = useState(false);

  const updatingVotes = (increase) => {
    setHandleVotes(increase);

    patchVote(article_id, increase)
      .then((res) => console.log(res, "messsage"))
      .catch(console.log("There was an error"));
  };
  console.log(handleVotes, "handlevotes");
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
