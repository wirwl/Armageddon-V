import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";
import { block } from "bem-cn";
import s from "./index.module.scss";
import fetch from "node-fetch";
import absoluteUrl from "next-absolute-url";
// import { NextApiRequest, NextApiResponse } from "next";

const b = block("index");
// const fetcher = (url: any) => fetch(url).then((res) => res.json());

type Props = {
  userData: any;
};

const IndexPage = ({ userData }: Props) => {
  // const { data, error } = useSwr("/api/asteroids", fetcher);

  // if (error) return <div>Failed to load users</div>;
  // if (!props.data) return <div>Loading...</div>;

  // console.log(userData);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ul className={s[b()]}>
        <li className={s[b("settings-panel")]}>
          <SettingsPanel />
        </li>
        <li className={s[b("asteroid-card-list")]}>
          <AsteroidCardList userData={userData} />
        </li>
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, query }: any) => {
  // Fetch the first page as default
  const page = query.page || 1;
  let userData = null;
  // Fetch data from external API
  const host = absoluteUrl(req, req.headers.host);
  try {
    const res = await fetch(`${host.origin}/api/users?page=${page}`);
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
