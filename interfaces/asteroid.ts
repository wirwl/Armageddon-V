// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type CloseApproachData = {
  kilometersPerSecond: number;
  closeApproachDateFull: string;
  missDistanceKilometers: number;
  missDistanceLunar: number;
  orbitingBody: string;
};

export type AsteroidData = {
  id: string;
  name: string;
  estimatedDiameterMax: number;
  isPotentiallyHazardous: boolean;
  closeApproachData: string;
  missDistanceKilometers: number;
  missDistanceLunar: number;
  // closeApproachDataList?: CloseApproachData[];
};

// export type AsteroidDataByDate = {
//   [key: string]: AsteroidData;
// };

export type ServerData = {
  message: string;
  // users: any;
  asteroids: AsteroidData[];
  curPage: number;
  maxPage: number;
  error: string;
};
