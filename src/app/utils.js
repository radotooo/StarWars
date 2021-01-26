/**
 * Here you can define helper functions to use across your app.
 */

const getData = async () => {
  const final = [];
  let response = await fetch('https://swapi.dev/api/planets/');

  let data = await response.json();

  final.push(data);
  while (data.next) {
    response = await fetch(`${data.next}`);

    data = await response.json();
    final.push(data);
  }

  return final;
};

export const getPlanets = async () => {
  const data = await getData();
  const planets = data.map((x) => x.results.map((c) => c));

  return planets.flat();
};
