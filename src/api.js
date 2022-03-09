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

export const fetchArticlesByTopic = (param) => {
  return fetch(
    `https://quarki-nc-news.herokuapp.com/api/articles?topic=${param}`
  ).then((data) => data.json());
};

export const fetchArticleById = (id) => {
  return fetch(`https://quarki-nc-news.herokuapp.com/api/articles/${id}`).then(
    (data) => data.json()
  );
};

export const fetchCommentsByArticle = (id) => {
  return fetch(
    `https://quarki-nc-news.herokuapp.com/api/articles/${id}/comments`
  ).then((data) => data.json());
};
