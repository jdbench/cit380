import factToPage, { generateFacts, createFactArray } from "./utils.js";
let factArray = [];
const json = "./js/sample.json";
const factOnPage = document.getElementById("fact");

generateFacts(json).then((data) => {
  factArray = data;
  factArray = createFactArray(factArray);
});

document.getElementById("get-fact").addEventListener("click", function () {
  factToPage(factOnPage, factArray);
  generateFacts(json).then((data) => {
    factArray = data;
    factArray = createFactArray(factArray);
  });
});
