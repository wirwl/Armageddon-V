import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { block } from "bem-cn";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import { ParsedUrlQuery } from "node:querystring";

const b = block("asteroid-card-list");

type Props = {
  userData: any;
};

const AsteroidCardList = ({ userData }: Props) => {
  const [users, setUsers] = useState([]);
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
        setUsers(userData.users);
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

  const handleScroll = () => {
    // To get page offset of last user
    const lastUserLoaded = document.querySelector(
      ".user-list > .user:last-child"
    );
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
          query["page"] = (parseInt(userData.curPage) + 1).toString();
          router.push({
            pathname: router.pathname,
            query: query,
          });
        }
      }
    }
  };

  return (
    <ul className={b()}>
      <li className={b("item")}>
        <AsteroidCard />
      </li>
    </ul>
  );
};

export default AsteroidCardList;
