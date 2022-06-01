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
  let facts = [];
  let fact;
  let randomSurvivor;
  let randomSeason;
  let season;
  let survivorData;
/*Try catch block for debugging */
  try {
/*If there is no data in the array, return a string. Else,
get a random season, get random survivor data. */
    if (array.length == 0) {
      fact = "There is no Survivor data here yet, please come back later";
    } else {
      randomSeason = Math.floor(Math.random() * array.length);
      console.log(array[randomSeason]);
    }
  } catch (error) {
    fact = "There was an error: " + error;
  }

  return fact;
}

export function createFactArray(array){

}
