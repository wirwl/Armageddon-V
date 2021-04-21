import * as React from "react";
import { block } from "bem-cn";
import Link from "next/link";

const b = block("button");

type Props = {
  text?: string;
  link?: string;
};

const Button = ({ text = "button", link = "/" }: Props) => (
  <div className={b()}>
    <Link href={link}>
      <a className={b("text")}>{text}</a>
    </Link>
  </div>
);

export default Button;
