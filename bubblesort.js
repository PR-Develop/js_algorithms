function bubblesort(array) {
  let swap;
  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        sorted = false;
      }
    }
  } while (!sorted);
  return array;
}

module.exports = bubblesort;
