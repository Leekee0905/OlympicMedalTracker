import { useState } from "react";
import "../styles/InputBox.css";
import Medal from "./Medal";

const InputBox = ({ handleSubmit, handleUpdate }) => {
  const medalType = ["금메달", "은메달", "동메달"];

  const [data, setData] = useState({
    nation: "",
    gold: 0,
    silver: 0,
    cooper: 0,
  });

  return (
    <div className="input-box">
      <form className="input-form" onSubmit={(e) => handleSubmit(e, data, setData)}>
        <div className="medal-input">
          <label>
            <span className="medal-title">국가명</span>
          </label>
          <input
            className="input-data"
            type="text"
            placeholder="국가 입력"
            name="nation"
            value={data.nation}
            onChange={(e) => setData({ ...data, nation: e.target.value })}
          />
        </div>

        {medalType.map((medal, index) => (
          <Medal key={index} medalType={medal} data={data} setData={setData} />
        ))}
        <div className="button-box">
          <button className="update-button" type="submit">
            국가추가
          </button>
          <button className="update-button" type="button" onClick={() => handleUpdate(data, setData)}>
            업데이트
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
