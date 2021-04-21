import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import { AsteroidData, ServerData } from "../../interfaces/asteroid";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

import spinner from "./loading.svg";

const b = block("asteroid-card-list");

type Props = {
  serverData: ServerData;
  curData: AsteroidData[];
};

const AsteroidCardList = ({ serverData, curData }: Props) => {
  const isShowOnlyHazardous = useSelector(
    (state: IRootState) => state.isShowOnlyHazardous
  );

  const [asteroids, setAsteroids] = useState<AsteroidData[]>([]);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    if (serverData) {
      if (serverData.error) {
        setIsError(true);
      } else {
        setAsteroids(
          isShowOnlyHazardous
            ? curData.filter(
                (value: AsteroidData) => value.isPotentiallyHazardous === true
              )
            : curData
        );
      }
    }
  }, [serverData]);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    console.log("we in handleScroll function that replace in AsteroidCardList");

    const lastMeteoriteLoaded = document.querySelector(
      `.${b("list")} > .${b("item")}:last-child`
    );
    // console.log(lastUserLoaded);
    if (lastMeteoriteLoaded) {
      const lastUserLoadedOffset =
        (lastMeteoriteLoaded as HTMLElement).offsetTop +
        lastMeteoriteLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastUserLoadedOffset) {
        if (!loading) {
          const query = router.query;
          query.page = (serverData.curPage + 1).toString();
          query.hazardous = isShowOnlyHazardous ? "1" : "0";
          router.push(
            {
              pathname: router.pathname,
              query: query,
            },
            undefined,
            { scroll: false }
          );
        }
      }
    }
  };

  return (
    <div className={b()}>
      {isError && <div className={b("error")}>{serverData.error.message}</div>}
      <ul className={b("list")}>
        {asteroids.length > 0 &&
          asteroids.map((asteroid: AsteroidData, i) => {
            return (
              <li className={b("item")} key={i}>
                <AsteroidCard index={i} data={asteroid} />
              </li>
            );
          })}
      </ul>
      {loading && <img className={b("spinner")} src={spinner} />}
    </div>
  );
};

export default AsteroidCardList;
