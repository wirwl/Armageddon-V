import { block } from "bem-cn";
import asteroidUrl from "./asteroid.svg";

const b = block("resizable-asteroid");

type Props = {
  size: number;
};

const sizeToScaleCoefficient = (size: number) => {
  // Базовый размер при котором размер иконки метиорита равен 100%,
  // это изображение 71x72 пикселей.
  const baseSize = 54;
  return size / baseSize;
};

const ResizableAsteroid = ({ size }: Props) => {
  const s = sizeToScaleCoefficient(size);

  return (
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
};

export default ResizableAsteroid;
