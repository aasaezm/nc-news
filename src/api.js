import { toUpperCase } from "./helper/toUpperCase";

export const fetchArticles = () => {
  return fetch("https://quarki-nc-news.herokuapp.com/api/articles").then(
    (data) => data.json()
  );
};

export const fetchTopics = () => {
  return fetch("https://quarki-nc-news.herokuapp.com/api/topics")
    .then((data) => data.json())
    .then((topics) => {
      return toUpperCase(topics);
    });
};
