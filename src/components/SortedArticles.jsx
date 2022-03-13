import { useParams } from "react-router-dom";

const SortedArticles = () => {
  const params = useParams();
  console.log(params);
  return <p>Hello!!!</p>;
};

export default SortedArticles;
