import block from "bem-cn";
import { useState } from "react";

const b = block("toggle-distance-type");

type Props = {
  value1: string;
  value2: string;
  handleOnChange?: (isValue2: boolean) => void;
};

const ToggleDistanceType = ({ value1, value2, handleOnChange }: Props) => {
  const [selectedValue, setSelectedValue] = useState(value1);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.currentTarget.value);
    handleOnChange && handleOnChange(selectedValue === value1 ? true : false);
  };

  return (
    <div className={b()}>
      <div className={b("wrapper")}>
        <span>Расстояние </span>
        <label className={b("earth")}>
          <input
            onChange={handleValueChange}
            className={b("distance")}
            type="radio"
            name="distance"
            value={value1}
            checked={selectedValue === value1}
          />
          <span className={b("distance-type")}>{value1}</span>
        </label>
        <span>,&nbsp;</span>
      </div>
      <label className={b("luna")}>
        <input
          onChange={handleValueChange}
          className={b("distance")}
          type="radio"
          name="distance"
          value={value2}
          checked={selectedValue === value2}
        />
        <span className={b("distance-type")}>{value2}</span>
      </label>
    </div>
  );
};

export default ToggleDistanceType;
