export default function factToPage(returnElement, array) {
  let fact;
  fact = getFact(array);

  returnElement.innerHTML = fact;
}
/*Function that pulls data from the JSON and returns it to an array*/
export async function generateFacts(json) {
  let response = await fetch(json);
  let data = await response.json();

  return data;
}
/*Function that gets the array and iterates through the array
with random indexes*/
export function getFact(array) {
  let fact;
  let randomIndex;
  /*Try catch block for debugging */
  try {
    /*If there is no data in the array, return a string. Else, get a random fact from factArray using Math.random*/
    if (array.length == 0) {
      fact = "There is no Survivor data here yet, please come back later";
    } else {
      randomIndex = Math.floor(Math.random() * array.length);
      fact = array[randomIndex];
    }
  } catch (error) {
    fact = "There was an error: " + error;
  }

  return fact;
}
/*Get array and turn array data into trivia strings, then store this array data into the facts array */
export function createFactArray(array) {
  let facts = [];
  let randomSurvivor;
  let randomSeason;
  let season;
  let survivorData;
  /*Still figuring this code out*/
  randomSeason = Math.floor(Math.random() * array.length);

  season = array[randomSeason];
  console.log(season);

  return facts;
}
