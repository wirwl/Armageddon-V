import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";
import { block } from "bem-cn";
import fetch from "node-fetch";
import absoluteUrl from "next-absolute-url";
import { AsteroidData, ServerData } from "../interfaces/asteroid";
import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";

import s from "./index.module.scss";

const b = block("index");

let renderIndex = 0;

type Props = {
  serverData: ServerData;
};

const IndexPage = ({ serverData }: Props) => {
  console.log(serverData);
  renderIndex += 1;
  console.log("renderIndex: " + renderIndex);

  const dispatch = useDispatch();

  const asteroidsFromStore: AsteroidData[] = useSelector(
    (state: IRootState) => state.asteroids
  );

  if (serverData.asteroids) asteroidsFromStore.push(...serverData.asteroids);

  dispatch({ type: "onAddAsteroids", asteroids: asteroidsFromStore });

  return (
    <Layout title="Armageddon V">
      <ul className={s[b()]}>
        <li className={s[b("settings-panel")]}>
          <SettingsPanel />
        </li>
        <li className={s[b("asteroid-card-list")]}>
          {serverData ? (
            <AsteroidCardList
              serverData={serverData}
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
  let serverData = null;
  const host = absoluteUrl(req, req.headers.host);
  const page = query.page || 1;
  try {
    const res = await fetch(
      // `${host.origin}/api/asteroids`
      `${host.origin}/api/asteroids?page=${page}&hazardous=1`
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch");
    }
    serverData = await res.json();
  } catch (err) {
    serverData = { error: { message: err.message } };
  }

  return { props: { serverData: serverData } };
};

export default IndexPage;
