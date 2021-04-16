import * as React from "react";
import { block } from "bem-cn";
import Link from "next/link";

const b = block("button");

type Props = {
  text?: string;
};

const Button = ({ text = "button" }: Props) => (
  <div className={b()}>
    <Link href="/">
      <a className={b("text")}>{text}</a>
    </Link>
  </div>
);

export default Button;
