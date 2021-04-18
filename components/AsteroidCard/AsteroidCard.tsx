import * as React from "react";
import { block } from "bem-cn";
import Button from "../Button/Button";
import DataFieldList from "../DataFieldList/DataFieldList";
import ResizableAsteroid from "../ResizableAsteroid/ResizableAsteroid";
import Link from "next/link";

const b = block("asteroid-card");

type Props = {
  name: string;
  index: number;
};

const AsteroidCard = ({ name, index }: Props) => (
  <div className={b({ hazardous: false })}>
    <div className={b("wrapper-asteroid")}>
      <ResizableAsteroid />{" "}
    </div>
    <div className={b("wrapper")}>
      <div className={b("wrapper-data")}>
        <Link href={"/asteroids/2468910"}>
          <a className={b("name")}>{`${index} ${name}`}</a>
        </Link>
        <DataFieldList
          items={[
            { caption: "Дата", value: "12 сентября 2021" },
            { caption: "Расстояние", value: "7 235 024 км" },
            { caption: "Размер", value: "85 м" },
          ]}
        />
      </div>
      <div className={b("wrapper-action")}>
        <p className={b("rating")}>Оценка:</p>
        <p className={b("hazard")}>не опасен</p>
        <Button text="На уничтожение" />
      </div>
    </div>
  </div>
);

export default AsteroidCard;
