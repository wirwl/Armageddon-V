import { NextApiRequest, NextApiResponse } from "next";
import { AsteroidData } from "../../interfaces/asteroid";

let asteroidsData: AsteroidData[] = [];
let nasaData: Response;
let jsonNASAData: any = null;
let maxPage: number;
let totalUsers = 0;
let refinedAsteroids: AsteroidData[] = [];

function prettifyDate(date: number): string {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const result = new Intl.DateTimeFormat("ru-RU", options as any)
    .format(new Date(date))
    .split(".")
    .reverse()
    .join("-");
  return result;
}

// Кол-во метеоритов на одной странице
const perPage = 10;

// Кол-во дней указываемых в запросе API NASA. Минимальное значение равно 1, а максимальное 7.
const daysPerRequest = 1;

const currentDate = Date.now();
const startDate = prettifyDate(currentDate);
const endDate = prettifyDate(
  currentDate + (daysPerRequest - 1) * 1000 * 60 * 60 * 24
);

let currentURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR`;

const getLimitedAsteroids = (limit: number) => {
  const refinedAsteroids: AsteroidData[] = [];
  for (let i = 0; i < asteroidsData.length; i++) {
    if (i < limit) refinedAsteroids.push(asteroidsData[i]);
  }
  return refinedAsteroids;
};

const getAsteroidData = (o: any) => {
  const asteroids: AsteroidData[] = [];

  // o.near_earth_objects.asteroids.sort(function (a: AsteroidData, b: AsteroidData) {
  //   const data1 = a.closeApproachData;
  //   const data2 = b.closeApproachData;
  //   if (data1 > data2) return 1;
  //   if (data1 < data2) return -1;
  //   return 0;
  // });

  const ordered = Object.keys(o.near_earth_objects)
    .sort()
    .reduce((obj, key) => {
      (obj as any)[key] = o.near_earth_objects[key];
      return obj;
    }, {}) as any;

  for (const date in ordered) {
    for (const asteroid of ordered[date]) {
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

  if (!jsonNASAData) {
    nasaData = await fetch(currentURL);
    jsonNASAData = await nasaData.json();
    asteroidsData = getAsteroidData(jsonNASAData);
    totalUsers = totalUsers + jsonNASAData.element_count;
    maxPage = Math.ceil(totalUsers / perPage);
  }

  let limit = perPage * curPage;

  refinedAsteroids.push(...getLimitedAsteroids(limit));
  try {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        message: "Fetched users",
        asteroids: refinedAsteroids,
        curPage: curPage,
        maxPage: maxPage,
        totalUsers: totalUsers,
        currentURL,
      })
    );
  } catch (err) {
    console.log(err);
  }

  if (curPage >= maxPage) {
    currentURL = jsonNASAData.links.next;
    jsonNASAData = null;
  }
}
