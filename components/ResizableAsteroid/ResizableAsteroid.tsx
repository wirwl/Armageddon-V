import * as React from "react";
import { block } from "bem-cn";

import asteroidUrl from "./asteroid2.svg";

const b = block("resizable-asteroid");

type Props = {
  size?: number;
};
// 71 186 598
// 72  189 607
const scaleFactor = (size: integer) => {
  return 1;
};

const s = scaleFactor(71);

const ResizableAsteroid = ({ size = 71 }: Props) => (
  <img
    className={b()}
    src={asteroidUrl}
    alt="asteroid"
    style={{
      transform: `translateX(${(s - 1) * 5}%) translateY(-${
        (s - 1) * 45
      }%) scale(${s})`,
    }}
  />
);

export default ResizableAsteroid;
