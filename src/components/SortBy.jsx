import { Link } from "react-router-dom";

const SortBy = ({ topic }) => {
  console.log(topic, "Topic in Sort by");

  const sorts = ["Date", "Votes", "Comment count"];

  if (topic === undefined) {
    return (
      <div>
        {/* <p>Sort by:</p>

        {sorts.map((sort) => {
          return (
            <Link
              key={sort}
              to={`/articles?sort_by=${sort.toLowerCase()}`}
            ></Link>
          );
        })} */}
        <p>Sort by:</p>
        <Link to="/articles?sort_by=date">Date</Link>
        <Link to="/articles?sort_by=votes">Votes</Link>
        <Link to="/articles?sort_by=comment_count">Number of comments</Link>
      </div>
    );
  } else {
    return (
      <>
        <p>Sort by:</p>
        {/* {sorts.map((sort) => {
          return (
            <div key={sort}>
              <Link to={`/articles/${topic}?sort_by=${sort}`}></Link>
            </div>
          );
        })} */}

        <Link to={`/articles/${topic}?sort_by=date`}>Date</Link>
        <Link to={`/articles/${topic}?sort_by=votes`}>Votes</Link>

        <Link to={`/articles/${topic}?sort_by=comment_count`}>
          Number of comments
        </Link>
      </>
    );
  }
};

export default SortBy;
