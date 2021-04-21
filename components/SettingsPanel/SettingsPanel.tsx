import { block } from "bem-cn";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";
import ToggleButton from "../ToggleDistanceType/ToggleDistanceType";

const b = block("settings-panel");

type SettingsPanel = {
  handleSettingsChanged: (
    isShowOnlyHazardous: boolean,
    isLuneTypeDistance: boolean
  ) => void;
};

const SettingsPanel = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckbox = (isChecked: boolean) => {
    dispatch({ type: "onChangeHazardous", isShowOnlyHazardous: isChecked });

    const query = router.query;
    query.hazardous = isChecked ? "1" : "0";
    router.push({ pathname: router.pathname, query: query }, undefined, {
      scroll: false,
    });
  };

  const handdleToggleButton = (isMoon: boolean) => {
    dispatch({ type: "onChangeTypeDistance", isMoonTypeDistance: isMoon });

    const query = router.query;
    query.luna = isMoon ? "1" : "0";
    router.push({ pathname: router.pathname, query: query }, undefined, {
      scroll: false,
    });
  };

  const route = useRouter();

  return (
    <div className={b()}>
      <div className={b("checkbox")}>
        <Checkbox
          isChecked={!!parseInt(route.query.hazardous as string)}
          handleOnChange={handleCheckbox}
          text={"Показать только опасные"}
        />
      </div>
      <div className={b("toggle-button")}>
        <ToggleButton
          isMoon={!!parseInt(route.query.luna as string)}
          handleOnChange={handdleToggleButton}
          value1="в километрах"
          value2="в дистанциях до луны"
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
