import * as React from "react";
import { block } from "bem-cn";
import { ReactNode } from "react";

const b = block("footer");

type Props = {
  children?: ReactNode;
};

const Footer = ({ children }: Props) => (
  <footer className={b()}>{children}</footer>
);

export default Footer;
