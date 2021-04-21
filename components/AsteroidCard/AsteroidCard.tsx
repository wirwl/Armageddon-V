import * as React from "react";
import { block } from "bem-cn";
import Button from "../Button/Button";
import DataFieldList from "../DataFieldList/DataFieldList";
import ResizableAsteroid from "../ResizableAsteroid/ResizableAsteroid";
import Link from "next/link";
import { AsteroidData } from "../../interfaces/asteroid";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const b = block("asteroid-card");

type Props = {
  data: AsteroidData;
};

const normalizeAsteroidName = (name: string): string => {
  const op = name.indexOf("(", 0);
  const cp = name.indexOf(")", op + 1);
  if (op >= 0 && cp > 0) return name.slice(op + 1, cp);
  else return name;
};

const AsteroidCard = ({ data }: Props) => {
  const {
    id,
    name,
    estimatedDiameterMax,
    isPotentiallyHazardous,
    closeApproachData,
    missDistanceKilometers,
    missDistanceLunar,
  } = data;

  const prettifyDate = (date: string): string => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const prettifiedDate = new Intl.DateTimeFormat("ru-RU", options as any)
      .format(new Date(date))
      .toString();
    return prettifiedDate.substr(0, prettifiedDate.length - 3);
  };

  const isMoonTypeDistance = useSelector(
    (state: IRootState) => state.isMoonTypeDistance
  );

  const distance = `${new Intl.NumberFormat("ru-RU").format(
    Math.round(isMoonTypeDistance ? missDistanceLunar : missDistanceKilometers)
  )} ${isMoonTypeDistance ? "" : "км"}`;

  return (
    <div className={b({ hazardous: isPotentiallyHazardous })}>
      <div className={b("wrapper")}>
        <div className={b("wrapper-data")}>
          <div className={b("wrapper-name")}>
            <div className={b("wrapper-asteroid")}>
              <ResizableAsteroid size={data.estimatedDiameterMax} />
            </div>
            <Link href={`/asteroids/${id}`}>
              <a className={b("name")}>{`${normalizeAsteroidName(name)}`}</a>
            </Link>
          </div>
          <DataFieldList
            items={[
              {
                caption: "Дата",
                value: prettifyDate(closeApproachData),
              },
              {
                caption: "Расстояние",
                value: distance,
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
          <Button text="На уничтожение" link="/destroy" />
        </div>
      </div>
    </div>
  );
};

export default AsteroidCard;
