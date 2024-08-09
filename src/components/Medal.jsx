const Medal = ({ medalType, data, setData }) => {
  const getDataValue = () => {
    if (medalType === "금메달") {
      return data.gold;
    }
    if (medalType === "은메달") {
      return data.silver;
    }
    if (medalType === "동메달") {
      return data.cooper;
    }
  };
  const getDataKey = (e) => {
    if (medalType === "금메달") {
      return setData({ ...data, gold: Number(e.target.value) });
    }
    if (medalType === "은메달") {
      return setData({ ...data, silver: Number(e.target.value) });
    }
    if (medalType === "동메달") {
      return setData({ ...data, cooper: Number(e.target.value) });
    }
  };
  const medalTypeConverter = () => {
    if (medalType === "금메달") {
      return "gold";
    }
    if (medalType === "은메달") {
      return "silver";
    }
    if (medalType === "동메달") {
      return "cooper";
    }
  };

  return (
    <div className="medal-input">
      <label>
        <span className="medal-title">{medalType}</span>
      </label>
      <input
        className="input-data"
        type="number"
        name={medalTypeConverter()}
        value={getDataValue()}
        onChange={(e) => getDataKey(e)}
      />
    </div>
  );
};

export default Medal;
