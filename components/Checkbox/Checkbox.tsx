import block from "bem-cn";
import React, { useState } from "react";

const b = block("checkbox");

type Props = {
  handleOnChange?: (isChecked: boolean) => void;
  text?: string;
  isChecked?: boolean;
};

const Checkbox = ({
  handleOnChange,
  text = "text",
  isChecked = false,
}: Props) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    handleOnChange && handleOnChange(e.target.checked);
  };

  return (
    <label className={b()}>
      <input
        className={b("input")}
        type="checkbox"
        key={Math.random()}
        checked={checked}
        onChange={onChange}
      />
      <span className={b("text")}>{text}</span>
    </label>
  );
};

export default Checkbox;
