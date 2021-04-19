import * as React from "react";
import { block } from "bem-cn";
import Button from "../Button/Button";
import DataFieldList from "../DataFieldList/DataFieldList";
import ResizableAsteroid from "../ResizableAsteroid/ResizableAsteroid";
import Link from "next/link";
import { AsteroidData } from "../../interfaces/asteroid";

const b = block("asteroid-card");

type Props = {
  // name: string;
  index: number;
  data: AsteroidData;
};

const normalizeAsteroidName = (name: string): string => {
  const op = name.indexOf("(", 0);
  const cp = name.indexOf(")", op + 1);
  if (op >= 0 && cp > 0) return name.slice(op + 1, cp);
  else return name;
};

const AsteroidCard = ({ index, data }: Props) => {
  const {
    name,
    estimatedDiameterMax,
    isPotentiallyHazardous,
    closeApproachData,
    missDistanceKilometers,
    // missDistanceLunar,
    // closeApproachDataList,
  } = data;

  const prettifyDate = (date: string): string => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const prettifiedDate = new Intl.DateTimeFormat("ru-RU", options as any)
      .format(new Date(date))
      .toString();
    return prettifiedDate.substr(0, prettifiedDate.length - 3);
  };

  return (
    <div className={b({ hazardous: isPotentiallyHazardous })}>
      <div className={b("wrapper-asteroid")}>
        <ResizableAsteroid size={data.estimatedDiameterMax} />
      </div>
      <div className={b("wrapper")}>
        <div className={b("wrapper-data")}>
          <Link href={"/asteroids/2468910"}>
            <a className={b("name")}>{`${index} ${normalizeAsteroidName(
              name
            )}`}</a>
          </Link>
          <DataFieldList
            items={[
              {
                caption: "Дата",
                value: prettifyDate(closeApproachData),
              },
              {
                caption: "Расстояние",
                value: `${new Intl.NumberFormat("ru-RU").format(
                  Math.round(missDistanceKilometers)
                )} км`,
              },
              {
                caption: "Размер",
                value: `${Math.round(estimatedDiameterMax)} м`,
              },
            ]}
          />
        </div>
        <div className={b("wrapper-action")}>
          <p className={b("rating")}>Оценка:</p>
          <p className={b("hazard")}>
            {isPotentiallyHazardous ? "опасен" : "не опасен"}
          </p>
          <Button text="На уничтожение" />
        </div>
      </div>
    </div>
  );
};

export default AsteroidCard;
