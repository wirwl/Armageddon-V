import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";
import { block } from "bem-cn";
import s from "./index.module.scss";
import fetch from "node-fetch";
import absoluteUrl from "next-absolute-url";
import { AsteroidData, ServerData } from "../interfaces/asteroid";
import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { useRouter } from "next/router";
import useSwr from "swr";
import AsteroidCard from "../components/AsteroidCard/AsteroidCard";
// import { NextApiRequest, NextApiResponse } from "next";

const b = block("index");
// const fetcher = (url: any) => fetch(url).then((res) => res.json());
let renderIndex = 0;
type Props = {
  userData: ServerData;
};

const IndexPage = ({ userData }: Props) => {
  renderIndex += 1;
  console.log("renderIndex: " + renderIndex);

  const dispatch = useDispatch();

  const asteroidsList: AsteroidData[] = [];

  const asteroidsFromStore: AsteroidData[] = useSelector(
    (state: IRootState) => state.asteroids
  );

  asteroidsFromStore.push(...userData.asteroids);

  dispatch({ type: "onAddAsteroids", asteroids: asteroidsFromStore });

  return (
    <Layout title="Armageddon V">
      <ul className={s[b()]}>
        <li className={s[b("settings-panel")]}>
          <SettingsPanel />
        </li>
        <li className={s[b("asteroid-card-list")]}>
          {userData ? (
            <AsteroidCardList
              userData={userData}
              curData={asteroidsFromStore}
            />
          ) : (
            <div>Loading...</div>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  // Fetch the first page as default
  const page = query.page || 1;
  let userData = null;
  // Fetch data from external API
  const host = absoluteUrl(req, req.headers.host);
  try {
    const res = await fetch(
      `${host.origin}/api/asteroids2?page=${page}&hazardous=1`
    );
    // const res = await fetch(`${process.env.FETCH_URL}/api/users?page=${page}`)
    if (res.status !== 200) {
      throw new Error("Failed to fetch");
    }
    userData = await res.json();
  } catch (err) {
    userData = { error: { message: err.message } };
  }
  // Pass data to the page via props
  return { props: { userData: userData } };
};

export default IndexPage;
