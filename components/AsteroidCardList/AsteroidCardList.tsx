import * as React from "react";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";

const b = block("asteroid-card-list");

const AsteroidCardList = () => (
  <div className={b()}>
    <AsteroidCard />
    <AsteroidCard />
    <AsteroidCard />
  </div>
);

export default AsteroidCardList;
