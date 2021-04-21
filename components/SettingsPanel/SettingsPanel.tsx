import { block } from "bem-cn";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
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
  // const handler = useCallback(() => {
  //   dispatch(action());
  // }, []);

  const handleCheckbox = (isChecked: boolean) => {
    dispatch({ type: "onChangeHazardous", isShowOnlyHazardous: isChecked });

    const query: ParsedUrlQuery = router.query;
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

  return (
    <div className={b()}>
      <div className={b("checkbox")}>
        <Checkbox
          handleOnChange={handleCheckbox}
          text={"Показать только опасные"}
        />
      </div>
      <div className={b("toggle-button")}>
        <ToggleButton
          handleOnChange={handdleToggleButton}
          value1="в километрах"
          value2="в дистанциях до луны"
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
