import * as React from "react";
import { block } from "bem-cn";

const b = block("data-field");

export type DataFieldItem = {
  caption?: string;
  value?: string | number;
};

const DataField = ({ caption = "caption", value = "value" }: DataFieldItem) => (
  <p className={b()}>
    <span className={b("caption")}>{caption}</span>
    <span className={b("dots")}></span>
    <span className={b("value")}>{value}</span>
  </p>
);

export default DataField;
