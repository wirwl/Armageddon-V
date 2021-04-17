import { block } from "bem-cn";
import Checkbox from "../Checkbox/Checkbox";

const b = block("settings-panel");

const SettingsPanel = () => (
  <div className={b()}>
    <Checkbox text={"Показать только опасные"} />
    <div>
      <span>Расстояние</span>
      <span>в километрах </span>,<span>в дистанциях до луны</span>
    </div>
  </div>
);

export default SettingsPanel;
