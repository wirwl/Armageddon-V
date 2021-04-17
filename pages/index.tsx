import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";
import { block } from "bem-cn";
import s from "./index.module.scss";

const b = block("index");

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <ul className={s[b()]}>
      <li className={s[b("control")]}>
        <SettingsPanel />
      </li>
      <li className={s[b("control")]}>
        <AsteroidCardList />
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
