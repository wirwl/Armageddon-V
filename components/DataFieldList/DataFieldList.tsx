import * as React from "react";
import { block } from "bem-cn";
import DataField, { DataFieldItem } from "../DataField/DataField";

const b = block("data-field-list");

type Props = {
  items: DataFieldItem[];
};

const DataFieldList = ({ items }: Props) => (
  <ul className={b()}>
    {items.map((item) => (
      <li className={b("item")}>
        <DataField caption={item.caption} value={item.value} />
      </li>
    ))}
  </ul>
);

export default DataFieldList;
