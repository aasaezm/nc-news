import { Link } from "react-router-dom";

const ArticleCard = ({
  title,
  article_id,
  author,
  topic,
  votes,
  comment_count,
}) => {
  return (
    <div>
      <Link className="linking-card" to={`/articles/article/${article_id}`}>
        <article className="article_card">
          <p>
            <strong>{title}</strong>
          </p>
          <hr></hr>
          <p>Author: {author}</p>
          <p>Topic: {topic}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
        </article>
      </Link>
    </div>
  );
};

export default ArticleCard;
