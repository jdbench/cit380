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
  let randomCast;
  let randomSeason;
  let randomIdol;
  let season;
  let castData;
  let idolData;
  /*Get random season and then a random survivor from the season using math.random*/
  try{
  if (szn == undefined || szn == "no"){
    randomSeason = Math.floor(Math.random() * array.length);
    randomCast = Math.floor(Math.random() * array[randomSeason].castData.length);
    randomIdol = Math.floor(Math.random() * array[randomSeason].idolData.length);

    season = array[randomSeason];
    castData = array[randomSeason].castData[randomCast];
    idolData = array[randomSeason].idolData[randomIdol];
  } else{
    season = array[szn];
    castData = array[szn].castData[Math.floor(Math.random()*array[szn].castData.length)];
    idolData = array[szn].idolData[Math.floor(Math.random()*array[szn].idolData.length)];
  }
}catch(error){
  console.log(error);
  console.log(season);
  console.log(castData);
  console.log(idolData);
}

  facts = [
    `In Season ${season.version_season}, ${season.season_name}, ${castData.name} lasted ${castData.szn_days} days.`,
    `${castData.name} has lasted ${castData.total_days} total days on Survivor.`,
    `${castData.name} ` + isSurvivorDead(castData),

  ];


  return facts;

  function isSurvivorDead(castData){
    if (castData.deceased == true){
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