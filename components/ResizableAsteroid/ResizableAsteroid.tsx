import * as React from "react";
import { block } from "bem-cn";

import asteroidUrl from "./asteroid2.svg";

const b = block("resizable-asteroid");

type Props = {
  size: number;
};
// 71 186 598
// 72  189 607
const ResizableAsteroid = ({ size }: Props) => (
  <img className={b()} width={"181px"} src={asteroidUrl} alt="asteroid" />
);

export default ResizableAsteroid;
