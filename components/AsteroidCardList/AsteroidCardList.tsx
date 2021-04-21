import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import { AsteroidData, ServerData } from "../../interfaces/asteroid";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const b = block("asteroid-card-list");

type Props = {
  userData: ServerData;
  curData: AsteroidData[];
};

const AsteroidCardList = ({ userData, curData }: Props) => {
  const isShowOnlyHazardous = useSelector(
    (state: IRootState) => state.isShowOnlyHazardous
  );

  const [asteroids, setAsteroids] = useState<AsteroidData[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  console.log("value from index.tsx");
  console.log(isShowOnlyHazardous);

  // if (isShowOnlyHazardous)
  //   setAsteroids(
  //     asteroids.filter(
  //       (value: AsteroidData) => value.isPotentiallyHazardous === true
  //     )
  //   );

  // console.log(userData.asteroids);

  // Set up user data
  useEffect(() => {
    if (userData) {
      // Error check
      if (userData.error) {
        // Handle error
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
  }, [userData]);

  // Router event handler
  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    console.log("we in handleScroll function that replace in AsteroidCardList");
    // To get page offset of last user
    const lastUserLoaded = document.querySelector(
      `.${b()} > .${b("item")}:last-child`
    );
    // console.log(lastUserLoaded);
    if (lastUserLoaded) {
      const lastUserLoadedOffset =
        (lastUserLoaded as HTMLElement).offsetTop + lastUserLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastUserLoadedOffset) {
        // Stops loading
        /* IMPORTANT: Add !loading  */
        // userData.curPage <= userData.maxPage &&
        if (!loading) {
          console.log("Trigger fetch");
          const query = router.query;
          query.page = (userData.curPage + 1).toString();
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
    <ul className={b()}>
      {asteroids.length > 0 &&
        asteroids.map((asteroid: AsteroidData, i) => {
          return (
            <li className={b("item")} key={i}>
              <AsteroidCard index={i} data={asteroid} />
            </li>
          );
        })}
    </ul>
  );
};

export default AsteroidCardList;
