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

export type ServerData = {
  message: string;
  // users: any;
  asteroids: AsteroidData[];
  curPage: number;
  maxPage: number;
  error: { message: string };
};
