import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <SettingsPanel />
    <AsteroidCardList />
  </Layout>
);

export default IndexPage;
