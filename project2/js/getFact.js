export default async function factToPage(returnElement, array) {
  let fact;
  await generateFacts(array);
  fact = getFact(array);

  returnElement.innerHTML = fact;
}

export async function generateFacts(json, array) {
  let response = await fetch(json);
  let data = await response.json();
  let randomSeason = Math.floor(Math.random() * (data.survivor.seasons.length));
  console.log(data.survivor.seasons[randomSeason]);

  return array;
}

export function getFact(array) {
  let fact;
  let randomIndex = Math.floor(Math.random() * (array.length));

  fact = array[randomIndex];

  return fact;
}