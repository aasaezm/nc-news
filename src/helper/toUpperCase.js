export const toUpperCase = (str) => {
  let newStr = [];
  str.forEach(({ slug }) => {
    newStr.push(slug.slice(0, 1).toUpperCase() + slug.slice(1));
  });
  return newStr;
};
