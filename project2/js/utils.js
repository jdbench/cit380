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
export function createFactArray(array, szn) {
  let facts = [];
  let randomSurvivor;
  let randomSeason;
  let season;
  let survivorData;
  /*Get random season and then a random survivor from the season using math.random*/
  if (szn == undefined || szn == "no"){
    randomSeason = Math.floor(Math.random() * array.length);
    randomSurvivor = Math.floor(Math.random() * array[randomSeason].data.length);

    season = array[randomSeason];
    survivorData = array[randomSeason].data[randomSurvivor];
  } else{
    season = array[szn];
    survivorData = array[szn].data[Math.floor(Math.random()*array[szn].data.length)];
  }
  facts = [
    `In Season ${season.version_season}, ${season.season_name}, ${survivorData.name} lasted ${survivorData.szn_days} days.`,
    `${survivorData.name} has lasted ${survivorData.total_days} total days on Survivor.`,
    `${survivorData.name} ` + isSurvivorDead(survivorData),

  ];


  return facts;

  function isSurvivorDead(survivorData){
    if (survivorData.deceased == true){
      return "is no longer living.";
    }else {
      return "is still living."
    }
  }
}

export function filterSzn(){
  let select = document.getElementById("season");
  return select.value;
}

export function pushOptions(json, element){
  let i;
  let option;
  let season;

  for (i = 0; i<json.length;i++){
    season = json[i].version_season;
    option = document.createElement('option');
    option.id = `szn-${season}`;
    option.value = i;
    option.innerHTML = `${season}`;

    element.appendChild(option);
  }
}