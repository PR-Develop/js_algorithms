let bubblesort = require("./bubblesort");
let dataGenerator = require("./dataGenerator");

let data = dataGenerator.generateUnsortedIntArray(1000);

console.time("bubblesort");
console.log(bubblesort(data, true));
console.timeEnd("bubblesort");
