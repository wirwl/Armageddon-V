import React, { ReactNode } from "react";
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
      ></Header>
      <main className={b("main-content")}>{children}</main>
    </div>
    <Footer>2021 © Все права и планета защищены</Footer>
  </div>
);

export default Layout;
