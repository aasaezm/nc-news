import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";

const SortedArticles = () => {
  fetchArticles("comment_count", "ASC").then((response) =>
    console.log(response)
  );
  // const params = useParams();
  // console.log(params);
  return <p>Hello!!!</p>;
};

export default SortedArticles;
