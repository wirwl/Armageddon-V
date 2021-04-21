import { NextApiRequest, NextApiResponse } from "next";
import { AsteroidData } from "../../interfaces/asteroid";

let asteroidsData: AsteroidData[] = [];
let nasaData: Response;
let jsonNASAData: any = null;

function prettifyDate(date: number): string {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const result = new Intl.DateTimeFormat("ru-RU", options as any)
    .format(new Date(date))
    .split(".")
    .reverse()
    .join("-");
  return result;
}

// Кол-во дней указываемых в запросе API NASA. Минимальное значение равно 1, а максимальное 7.
const daysPerRequest = 1;

const currentDate = Date.now();
const startDate = prettifyDate(currentDate);
const endDate = prettifyDate(
  currentDate + (daysPerRequest - 1) * 1000 * 60 * 60 * 24
);

let startURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR`;
let nextURL = startURL;

const getAsteroidData = (o: any) => {
  const asteroids: AsteroidData[] = [];

  for (const date in o.near_earth_objects) {
    for (const asteroid of o.near_earth_objects[date]) {
      const ad: AsteroidData = {
        id: asteroid.id,
        name: asteroid.name,
        estimatedDiameterMax:
          asteroid.estimated_diameter.meters.estimated_diameter_max,
        isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
        closeApproachData: asteroid.close_approach_data[0].close_approach_date,
        missDistanceKilometers:
          asteroid.close_approach_data[0].miss_distance.kilometers,
        missDistanceLunar: asteroid.close_approach_data[0].miss_distance.lunar,
      };
      asteroids.push(ad);
    }
  }
  return asteroids;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const curPage: number = parseInt(req.query.page as string) || 1;

  nasaData = await fetch(curPage > 1 ? nextURL : startURL);

  jsonNASAData = await nasaData.json();
  asteroidsData = getAsteroidData(jsonNASAData);

  try {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        asteroids: asteroidsData,
        curPage: curPage,
      })
    );
  } catch (err) {
    console.log(err);
  }

  nextURL = jsonNASAData.links.next;
}
