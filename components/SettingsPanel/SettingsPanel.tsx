import * as React from "react";
import { block } from "bem-cn";

const b = block("settings-panel");

const SettingsPanel = () => (
  <div className={b()}>
    <label>
      <input type="checkbox" /> Показать только опасные
    </label>
    <div>
      <span>Расстояние в километрах,</span>
      <span>в дистанциях до луны</span>
    </div>
  </div>
);

export default SettingsPanel;
