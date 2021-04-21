import block from "bem-cn";
import React, { useState } from "react";

const b = block("checkbox");

type Props = {
  handleOnChange?: (isChecked: boolean) => void;
  text?: string;
};

const Checkbox = ({ handleOnChange, text = "text" }: Props) => {
  const [checked, setChecked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("...on change...");
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
