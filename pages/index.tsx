import SettingsPanel from "../components/SettingsPanel/SettingsPanel";
import Layout from "../components/Layout/Layout";
import React from "react";
import AsteroidCardList from "../components/AsteroidCardList/AsteroidCardList";
import { block } from "bem-cn";
import s from "./index.module.scss";
import fetch from "node-fetch";
import absoluteUrl from "next-absolute-url";

const b = block("index");
const fetcher = (url: any) => fetch(url).then((res) => res.json());

type Props = {
  userData: any;
};

const IndexPage = ({ userData }: Props) => {
  // const { data, error } = useSwr("/api/asteroids", fetcher);

  // if (error) return <div>Failed to load users</div>;
  // if (!props.data) return <div>Loading...</div>;

  // console.log(props.data);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ul className={s[b()]}>
        <li className={s[b("settings-panel")]}>
          <SettingsPanel />
        </li>
        <li className={s[b("asteroid-card-list")]}>
          <AsteroidCardList asteroidData={userData} />
        </li>
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, query }) => {
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

// export async function getStaticProps(_context: any) {
//   const res = await fetch(
//     `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-16&end_date=2021-04-23&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR`
//   );
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   console.log("---");
//   console.log(data);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default IndexPage;
