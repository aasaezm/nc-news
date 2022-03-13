import { toUpperCase } from "./helper/toUpperCase";
import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://quarki-nc-news.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchTopics = () => {
  return newsApi.get("topics").then((response) => {
    return toUpperCase(response.data);
  });
};

export const fetchArticlesByTopic = (param) => {
  return newsApi.get(`articles?topic=${param}`).then((response) => {
    return response.data.articles;
  });
};

export const fetchArticleById = (id) => {
  return newsApi.get(`articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchCommentsByArticle = (id) => {
  return newsApi.get(`articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchVote = (article_id, votes) => {
  return newsApi
    .patch(`articles/${article_id}`, { inc_votes: votes })
    .then((response) => {
      return response.data.patchedArticle;
    });
};

export const fetchUsers = () => {
  return newsApi.get("users").then((response) => {
    return response.data.users;
  });
};

export const postComment = (article_id, author, body) => {
  return newsApi
    .post(`articles/${article_id}/comments`, { username: author, body: body })
    .then((response) => {
      return response.data.postedComment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`);
};

//FETCHING WITH FETCH API

// export const fetchArticles = () => {
//   return fetch("https://quarki-nc-news.herokuapp.com/api/articles").then(
//     (data) => data.json()
//   );
// };

// export const fetchTopics = () => {
//   return fetch("https://quarki-nc-news.herokuapp.com/api/topics")
//     .then((data) => data.json())
//     .then((topics) => {
//       return toUpperCase(topics);
//     });
// };

// export const fetchArticlesByTopic = (param) => {
//   return fetch(
//     `https://quarki-nc-news.herokuapp.com/api/articles?topic=${param}`
//   ).then((data) => data.json());
// };

// export const fetchArticleById = (id) => {
//   return fetch(`https://quarki-nc-news.herokuapp.com/api/articles/${id}`).then(
//     (data) => data.json()
//   );
// };

// export const fetchCommentsByArticle = (id) => {
//   return fetch(
//     `https://quarki-nc-news.herokuapp.com/api/articles/${id}/comments`
//   ).then((data) => data.json());
// };

// export const fetchUsers = () => {
//   return fetch("https://quarki-nc-news.herokuapp.com/api/users").then((data) =>
//     data.json()
//   );
// };

// export const postComment = (article_id, author, body) => {
//   return fetch(
//     `https://quarki-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
//     {
//       method: "POST",
//       body: JSON.stringify({ username: author, body: body }),

//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }
//   )
//     .then((response) => response.json())
//     .then((obj) => {
//       return obj.postedComment;
//     });
// };

// export const patchVote = (article_id, votes) => {
//   return fetch(
//     `https://quarki-nc-news.herokuapp.com/api/articles/${article_id}`,
//     {
//       method: "PATCH",
//       body: JSON.stringify({ inc_votes: votes }),

//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }
//   ).then((response) => response.json());
// };

// export const deleteComment = (comment_id) => {
//   return fetch(
//     `https://quarki-nc-news.herokuapp.com/api/comments/${comment_id}`,
//     {
//       method: "DELETE",
//       // body: JSON.stringify({ comment_id: comment_id })
//     }
//   );
// };
