import factToPage, { generateFacts } from "./getFact.js";
let factArray = [];
const json = "./js/sample.json";
const factOnPage = document.getElementById("fact");

generateFacts(json).then((data) => {
  console.log(data);
  factArray = data;
});

document.getElementById("get-fact").addEventListener("click", function () {
  factToPage(factOnPage, factArray);
});
