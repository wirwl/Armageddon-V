import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import { ParsedUrlQuery } from "node:querystring";
import { AsteroidData, ServerData } from "../../interfaces/asteroid";

const b = block("asteroid-card-list");

type Props = {
  userData: ServerData;
  // asteroids: AsteroidData[];
};

const AsteroidCardList = ({ userData }: Props) => {
  // const [users, setUsers] = useState([]);
  const [asteroids, setAsteroids] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  // Set up user data
  useEffect(() => {
    if (userData) {
      // Error check
      if (userData.error) {
        // Handle error
      } else {
        setAsteroids(userData.asteroids as any);
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
    // console.log("we in handleScroll function that replace in AsteroidCardList");
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
        if (userData.curPage < userData.maxPage && !loading) {
          // Trigger fetch
          const query: ParsedUrlQuery = router.query;
          query.page = (userData.curPage + 1).toString();
          // console.log(query.page);
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
          asteroid.estimatedDiameterMax = asteroid.estimatedDiameterMax + 100;
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
