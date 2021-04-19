import block from "bem-cn";
import React from "react";

const b = block("checkbox");

type Props = {
  handleOnChange?: (isChecked: boolean) => void;
  text?: string;
};

const Checkbox = ({ handleOnChange, text = "text" }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("...on change...");
    handleOnChange && handleOnChange(e.target.checked);
  };

  return (
    <label className={b()}>
      <input type="checkbox" onChange={onChange} /> {text}
    </label>
  );
};

export default Checkbox;
