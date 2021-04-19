import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { block } from "bem-cn";

const b = block("layout");

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className={b()}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className={b("wrapper")}>
      <Header
        title="Armageddon V"
        description="Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле."
      >
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>Users List</a>
          </Link>{" "}
          | <a href="/api/users">Users API</a>
        </nav>
      </Header>
      <main className={b("main-content")}>{children}</main>
    </div>
    <Footer>2021 © Все права и планета защищены</Footer>
  </div>
);

export default Layout;
