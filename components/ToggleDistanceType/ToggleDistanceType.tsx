import block from "bem-cn";

const b = block("toggle-distance-type");

const ToggleDistanceType = () => (
  <div className={b()}>
    <div className={b("wrapper")}>
      <span>Расстояние </span>
      <label className={b("earth")}>
        <input className={b("distance")} type="radio" name="distance" checked />
        <span className={b("distance-type")}>в километрах</span>
      </label>
      <span>, </span>
    </div>
    <label className={b("luna")}>
      <input className={b("distance")} type="radio" name="distance" />{" "}
      <span className={b("distance-type")}> в дистанциях до луны</span>
    </label>
  </div>
);

export default ToggleDistanceType;
