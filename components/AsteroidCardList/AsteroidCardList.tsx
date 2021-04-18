import * as React from "react";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";

const b = block("asteroid-card-list");

const AsteroidCardList = () => (
  <ul className={b()}>
    <li className={b("item")}>
      <AsteroidCard />
    </li>
    <li className={b("item")}>
      <AsteroidCard />
    </li>
    <li className={b("item")}>
      <AsteroidCard />
    </li>
  </ul>
);

export default AsteroidCardList;
