export default function factToPage(returnElement, array) {
  let fact;
  fact = getFact(array);

  returnElement.innerHTML = fact;
}

export async function generateFacts(json, array) {
  let response = await fetch(json);
  let data = await response.json();
  let randomSeason = Math.floor(Math.random() * data.survivor.seasons.length);
  console.log(data.survivor.seasons[randomSeason]);

  return array;
}

export function getFact(array) {
  let fact;
  let randomIndex;

  try {
    if (array.length == 0 || array.length == undefined) {
      fact = "There is no Survivor data here yet, please come back later";
    } else {
      randomIndex = Math.floor(Math.random() * array.length);
      fact = array[randomIndex];
    }
  } catch (error){
    fact = "There was an error: " + error;
  }

  return fact;
}
