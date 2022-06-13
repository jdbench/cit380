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
  let randomBootMap;
  let season;
  let castData;
  let idolData;
  let bootMapping;
  /*Get random season and then a random survivor from the season using math.random*/
  try {
    if (szn == undefined || szn == "no") {
      randomSeason = Math.floor(Math.random() * array.length);
      randomCast = Math.floor(
        Math.random() * array[randomSeason].castData.length
      );
      randomIdol = Math.floor(
        Math.random() * array[randomSeason].idolData.length
      );
      randomBootMap = Math.floor(
        Math.random() * array[randomSeason].bootMapping.length
      );

      season = array[randomSeason];
      castData = array[randomSeason].castData[randomCast];
      idolData = array[randomSeason].idolData[randomIdol];
      bootMapping = array[randomSeason].bootMapping[randomBootMap];
    } else {
      season = array[szn];
      castData =
        array[szn].castData[
          Math.floor(Math.random() * array[szn].castData.length)
        ];
      idolData =
        array[szn].idolData[
          Math.floor(Math.random() * array[szn].idolData.length)
        ];
      bootMapping =
        array[szn].bootMapping[
          Math.floor(Math.random() * array[szn].bootMapping.length)
        ];
    }
  } catch (error) {
    console.log(error);
    console.log(season);
    console.log(castData);
    console.log(idolData);
    console.log(bootMapping);
  }

  facts = [
    `In Season ${season.version_season}, ${season.season_name}, ${castData.name} lasted ${castData.szn_days} days.`,
    `${castData.name} has lasted ${castData.total_days} total days on Survivor.`,
    `${castData.name} ` + isSurvivorDead(castData),
    `${bootMapping.name} ${castOut(bootMapping).toLowerCase()} Season ${season.version_season}, ${season.season_name}.`,
    `${bootMapping.name} finished ${bootMapping.placement[0].place}${fixPlaceEnd(bootMapping)} in Season ${season.version_season}, ${season.season_name}.`,
    `In Season ${season.version_season}, ${season.season_name}, ${bootMapping.name} ${wasVotedByJury(bootMapping)}`,
  ];

  function isSurvivorDead(castData) {
    if (castData.deceased == true) {
      return "is no longer living.";
    } else {
      return "is still living.";
    }
  }
  function wasVotedByJury(bootMapping) {
    let varElimination = bootMapping.placement[0].elimination;
    if (bootMapping.jury == true) {
      return "was voted out, but made it to the jury.";
    } else if (varElimination != "Winner"|varElimination != "Runner-up"){
      return "was voted out, but didn't make the jury.";
    } else {
      return "made it to the final tribal council.";
    }
  }
  function castOut(bootMapping) {
    let varElimination = bootMapping.placement[0].elimination;
    if (varElimination == "Voted Out") {
      return "was voted out in";
    } else if (varElimination == "Quit") {
      return "quit during";
    } else if (varElimination == "Voted Out but Returned"){
      return "was voted out, but returned to the game by winning a challenge in";
    } else if (varElimination == "MedEvac") {
      return "was medically evacuated from";
    } else if (varElimination == "Ejected") {
      return "was the first person to be ejected from the game in";
    } else if (varElimination == "Family Emergency") {
      return "was removed from the game due to a family emergency during";
    } else if (varElimination == "Winner"|varElimination == "Runner-up") {
      return `was the ${varElimination} in`;
    } else if (varElimination == "Switched"|varElimination == "Voted Out but Switched") {
      return "switched places with their spouse after a vote during";
    } else {
      return "lost a tiebreaker in a tie vote"
    }
  }
  function fixPlaceEnd(bootMapping) {
    let placed = bootMapping.placement[0].place;
    if (
      placed == "1" ||
      placed == "21" ||
      placed == "31" ||
      placed == "41" ||
      placed == "51"
    ) {
      return "st";
    } else if (
      placed == "2" ||
      placed == "22" ||
      placed == "32" ||
      placed == "42" ||
      placed == "52"
    ) {
      return "nd";
    } else if (
      placed == "3" ||
      placed == "23" ||
      placed == "33" ||
      placed == "43" ||
      placed == "53"
    ) {
      return "rd";
    } else {
      return "th";
    }
  }

  return facts;
}

export function filterSzn() {
  let select = document.getElementById("season");
  return select.value;
}

export function pushOptions(json, element) {
  let i;
  let option;
  let season;

  for (i = 0; i < json.length; i++) {
    season = json[i].version_season;
    option = document.createElement("option");
    option.id = `szn-${season}`;
    option.value = i;
    option.innerHTML = `${season}`;

    element.appendChild(option);
  }
}
