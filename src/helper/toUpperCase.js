/*
This function uppercases the first letter of a string
It accepts an array of objects, being withing each object a description
slug properties for each topic
*/
export const toUpperCase = (str) => {
  let newStr = [];
  str.forEach(({ slug }) => {
    newStr.push(slug.slice(0, 1).toUpperCase() + slug.slice(1));
  });
  return newStr;
};
