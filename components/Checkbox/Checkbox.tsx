import block from "bem-cn";

const b = block("checkbox");

type Props = {
  text?: string;
};

const Checkbox = ({ text = "text" }: Props) => (
  <label className={b()}>
    <input type="checkbox" /> {text}
  </label>
);

export default Checkbox;
