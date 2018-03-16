const objectToArray = (object) => {
  const keys = Object.keys(object);
  let result = [];
  keys.forEach((key) => {
    object[key].forEach((item) => {
      result = result.concat(item);
    });
  });
  return result;
};

const groupDataBasedOnKey = (data, key) => {
  const groupedData = {};
  data.forEach((element) => {
    if (groupedData[element[key]] === undefined) {
      groupedData[element[key]] = [];
    }
    groupedData[element[key]].push(element);
  }, this);
  return groupedData;
};

module.exports = { objectToArray, groupDataBasedOnKey };
