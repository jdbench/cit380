import factToPage, { generateFacts, createFactArray } from "./utils.js";
let factArray = [];
const json = "./js/sample.json";
const factOnPage = document.getElementById("fact");

/*When javascript loads, generate a fact array*/
generateFacts(json).then((data) => {
  factArray = data;
  factArray = createFactArray(factArray);
});

/*Onclick of get fact button, run factToPage function which will output
a random fact to the screen or a message stating that there is no data
in the array, then create a new factArray with random data using generateFacts
to read the json and createFactArray to create the array with data
of a random season.*/
document.getElementById("get-fact").addEventListener("click", function () {
  factToPage(factOnPage, factArray);
  generateFacts(json).then((data) => {
    factArray = data;
    factArray = createFactArray(factArray);
  });
});
