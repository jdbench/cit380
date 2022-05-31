import factToPage, { generateFacts } from "./getFact.js";
let factArray = [];
const json = "./js/test.json";
const factOnPage = document.getElementById("fact");

factArray = document.addEventListener("DOMContentLoaded", function () {
  generateFacts(json, factArray);
});

document.getElementById("get-fact").addEventListener("click", function () {
  factToPage(factOnPage, factArray);
});
