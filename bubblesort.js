function bubblesort(array, asc = true) {
  let swap;
  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (getAscExpression(array[i], array[i + 1], asc)) {
        swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        sorted = false;
      }
    }
  } while (!sorted);
  return array;
}

function getAscExpression(first, secound, asc) {
  if (asc) {
    return first > secound;
  } else {
    return secound > first;
  }
}

module.exports = bubblesort;
