import { block } from "bem-cn";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";
// import ToggleButton from "../ToggleDistanceType/ToggleDistanceType";

const b = block("settings-panel");

type SettingsPanel = {
  handleSettingsChanged: (
    isShowOnlyHazardous: boolean,
    isLuneTypeDistance: boolean
  ) => void;
};

const SettingsPanel = () => {
  const dispatch = useDispatch();

  // const handler = useCallback(() => {
  //   dispatch(action());
  // }, []);

  const handleCheckbox = useCallback((isChecked: boolean) => {
    console.log(isChecked);
    dispatch({ type: "onChangeHazardous", isShowOnlyHazardous: isChecked });
  }, []);

  return (
    <div className={b()}>
      <div className={b("checkbox")}>
        <Checkbox
          handleOnChange={handleCheckbox}
          text={"Показать только опасные"}
        />
      </div>
      <div className={b("toggle-button")}>{/* <ToggleButton /> */}</div>
    </div>
  );
};

export default SettingsPanel;
