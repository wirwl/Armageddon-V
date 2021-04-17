import { block } from "bem-cn";
import Checkbox from "../Checkbox/Checkbox";
import ToggleButton from "../ToggleDistanceType/ToggleDistanceType";

const b = block("settings-panel");

const SettingsPanel = () => (
  <div className={b()}>
    <div className={b("checkbox")}>
      <Checkbox text={"Показать только опасные"} />
    </div>
    <div className={b("toggle-button")}>
      <ToggleButton />
    </div>
  </div>
);

export default SettingsPanel;
