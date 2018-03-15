const objectToArray = (object) => {
  const keys = Object.keys(object);
  let result = [];
  keys.forEach((key) => {
    result = result.concat(object[key][0]);
  });
  return result;
};

module.exports = { objectToArray };
