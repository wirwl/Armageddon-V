import * as React from "react";
import { block } from "bem-cn";
import Link from "next/link";
import { ReactNode } from "react";

const b = block("header");

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Header = ({ title = "Title", description = "Description" }: Props) => (
  <header className={b()}>
    <div className={b("text")}>
      <h1 className={b("title")}>{title}</h1>
      <p className={b("description")}>{description}</p>
    </div>
    <nav className={b("page-links")}>
      <a className={b("asteroids-page")}>Астероиды</a>
      <Link href="/destroy">
        <a className={b("destroy-page")}>Уничтожение</a>
      </Link>
    </nav>
  </header>
);

export default Header;
