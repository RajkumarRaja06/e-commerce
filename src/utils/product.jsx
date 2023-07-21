const removeDuplicate = (array) => {
  const unique = [];
  array.forEach((ele) => {
    if (!unique.includes(ele)) {
      unique.push(ele);
    }
  });
  return unique;
};
export { removeDuplicate };
