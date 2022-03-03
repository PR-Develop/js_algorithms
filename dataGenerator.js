function generateSortedIntArray(length) {
  let array = [];
  for (let index = 0; index < length; index++) {
    array.push(index + 1);
  }
  return array;
}

function generateUnsortedIntArray(length) {
  let array = generateSortedIntArray(length);

  array.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  return array;
}

module.exports = {
  generateSortedIntArray,
  generateUnsortedIntArray,
};
