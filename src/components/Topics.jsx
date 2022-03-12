import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      {topics.map((topic) => {
        return (
          <Link
            className="link"
            key={topic}
            to={`/articles/${topic.toLowerCase()}`}
          >
            {topic}
          </Link>
        );
      })}
    </>
  );
};

export default Topics;
